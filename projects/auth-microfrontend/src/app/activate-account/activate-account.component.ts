import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import data from '../../assets/interface_labels/interface_labels_keys_en.json';
import { regularExpressionPassword } from '../core/constants/RegularExpressions';

// Importing a service for handling login-related functionality
import { LoginService } from '../core/services/login/login.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss'],
})
export class ActivateAccountComponent {
  // Boolean variables to control password visibility
  hideConfirmPassword = true;
  hideNewPassword = true;

  // Variables to store error and info messages
  error: string | null = null;
  info: string | null = null;

  // Variable to store form data
  form: any;

  // Variable to store translation data
  translations: any = data;

  // Variables to store request ID and user ID
  requestID!: string;
  userId!: string;

  /**
   * Constructor to initialize the component with required services and dependencies.
   * @param {FormBuilder} fb - The FormBuilder service instance.
   * @param {ActivatedRoute} route - The ActivatedRoute service instance.
   * @param {Router} router - The Router service instance.
   * @param {LoginService} loginService - The LoginService service instance.
   */
  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly loginService: LoginService,
  ) {
    // Initializing the form with form controls and validation rules
    this.form = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(regularExpressionPassword)]],
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  /**
   * Lifecycle hook - Called after the constructor and when the component is initialized.
   */
  ngOnInit() {
    // Subscribing to route parameters to get the request ID
    this.route.params.subscribe((params) => {
      this.requestID = params['request'];
    });

    // Fetching the user ID
    this.getUserId();
  }

  /**
   * Method to fetch the user ID based on the request ID.
   */
  getUserId() {
    this.loginService.getUserID(this.requestID).subscribe({
      next: (response: any) => {
        this.userId = response.data.userId;
      },
      error: (err: any) => {
        console.log(err);
        // Redirecting to the login page if the link is expired
        if (err.error?.message === 'expired link') {
          this.router.navigateByUrl('/login');
        }
      },
    });
  }

  /**
   * Method to handle keydown events and reset error and info messages.
   */
  onKeyDown() {
    this.error = null;
    this.info = null;
  }

  /**
   * Method triggered when the "Activate Account" button is pressed.
   */
  onActivateAccountPressed() {
    // Checking for an empty new password
    if (this.form.get('newPassword').value === '') {
      this.error = this.translations.activate_account_error_message_empty_password;
      return;
    }

    // Checking for an invalid new password
    if (this.form.get('newPassword').invalid) {
      this.error = this.translations.activate_account_error_message_invalid_password;
      return;
    }

    // Checking if new and confirm passwords match
    if (this.form.get('newPassword').value !== this.form.get('confirmPassword').value) {
      this.error = this.translations.activate_account_error_message_passwords_not_match;
      return;
    }

    // Activating the account using the login service
    this.loginService.activateAccount(this.form.get('newPassword').value, this.userId).subscribe({
      next: (response: any) => {
        if (response.error) {
          this.error = response.message;
        } else {
          // Redirecting to the login page after a successful activation
          setTimeout(() => {
            this.router.navigateByUrl('/login');
          }, 3000);
          this.info = this.translations.activate_account_success_message;
        }
      },
      error: (err: any) => {
        console.log(err);
        this.error = err.error.message;
      },
    });
  }
}
