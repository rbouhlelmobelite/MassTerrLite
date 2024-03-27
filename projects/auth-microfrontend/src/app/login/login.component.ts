import { AutofillMonitor } from '@angular/cdk/text-field';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import data from '../../assets/interface_labels/interface_labels_keys_en.json';
import { LoginService } from '../core/services/login/login.service';
import { TokenStorageService } from '../core/services/token-storage/token-storage.service';
import { UserService } from '../core/services/user/user.service';
import { GlobalService } from '../core/services/global/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit, OnDestroy {
  // Using ViewChild to get a reference to the username and password input elements
  @ViewChild('username', { read: ElementRef }) username!: ElementRef<HTMLElement>;
  @ViewChild('password', { read: ElementRef }) password!: ElementRef<HTMLElement>;

  // Boolean variables to track autofill status
  usernameAutofilled!: boolean;
  passwordAutofilled!: boolean;

  // Boolean variable to control password visibility
  hide = true;

  // Variables to store error and form data
  error: string | null = null;
  form: any;

  // Variable to store translation data
  translations: any = data;

  // Boolean variable to track API errors
  apiError = false;

  // Constructor to initialize the component with required services and dependencies
  constructor(
    private readonly fb: FormBuilder,
    private readonly loginService: LoginService,
    private readonly tokenStorageService: TokenStorageService,
    private readonly userService: UserService,
    private readonly _autofill: AutofillMonitor,
    public router: Router,
    public globalService: GlobalService,
  ) {
    // Initializing the form with form controls
    this.form = this.fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  // Lifecycle hook - Called after the component's view has been initialized
  ngAfterViewInit() {
    // Monitoring autofill status for username and password inputs
    this._autofill.monitor(this.username).subscribe((e) => (this.usernameAutofilled = e.isAutofilled));
    this._autofill.monitor(this.password).subscribe((e) => (this.passwordAutofilled = e.isAutofilled));
    setTimeout(() => {
      this.globalService.setLoadingState(false);
    }, 500);;
  }

  /**
   * Custom error validator function.
   * @param {string | null} error - The error message.
   * @returns {object | null} - The error object.
   */
  errorValidator(error: string | null): { [key: string]: boolean } | null {
    if (error !== null) {
      return { successResponseRequired: true };
    }
    return null;
  }

  /**
   * Method to handle keydown events and reset error and API error messages.
   */
  onKeyDown() {
    this.error = null;
    this.apiError = false;
  }

  /**
   * Method triggered when the "Login" button is pressed.
   * @param {any} event - The button click event.
   */
  onLoginPressed(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.submit(event);
  }

  /**
   * Method to handle the form submission.
   * @param {any} event - The form submission event.
   */
  submit(event: any) {
    this.error = null;
    this.apiError = false;

    // Marking all form controls as touched to trigger validation
    this.form.markAllAsTouched();

    // Retrieving username and password from the form
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;

    // Checking for missing username or password
    if (!username || !password) {
      this.error = this.translations.login_page_error_message_missing_username_or_password;
      return;
    }

    // Creating login data object
    const loginData = { username, password, grant_type: 'password' };

    // Sending a login request to the login service
    this.loginService
      .login(loginData)
      .pipe(
        catchError((error) => {
          this.error = error.error.message;
          this.apiError = true;
          return [];
        }),
      )
      .subscribe({
        next: (response: any) => {
          if (response?.httpStatus === 'ACCEPTED') {
            // Successful login - save token and retrieve authenticated user information
            this.tokenStorageService.saveToken(
              response.data.access_token,
              response.data.expires_in,
              response.data.refresh_token,
            );

            // Retrieving authenticated user information
            this.userService.getAuthenticatedUser().subscribe({
              next: (userResponse: any) => {
                if (userResponse) {
                  // Saving user role
                  this.userService.saveRole(userResponse.data.role);
                  this.userService.saveEmail(userResponse.data.email);

                  // Redirecting to the home page after successful login
                  this.router.navigate(['/home']);
                }
              },
              error: (err: any) => {
                this.logOut()
              },
            });
          }
        },
        error: (err) => {
          // Handling API errors
          this.apiError = true;
          this.error = err.error.message;
        },
      });
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  // Lifecycle hook - Called when the component is about to be destroyed
  ngOnDestroy() {
    // Stopping autofill monitoring for username and password inputs
    this._autofill.stopMonitoring(this.username);
    this._autofill.stopMonitoring(this.password);
  }
}
