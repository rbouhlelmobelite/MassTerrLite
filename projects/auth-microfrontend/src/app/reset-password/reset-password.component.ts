import { AutofillMonitor } from '@angular/cdk/text-field';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import data from '../../assets/interface_labels/interface_labels_keys_en.json';
import { regularExpressionPassword } from '../core/constants/RegularExpressions';
import { LoginService } from '../core/services/login/login.service';
import { GlobalService } from '../core/services/global/global.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements AfterViewInit, OnDestroy {
  // Using ViewChild to get a reference to the newPassword and confirmPassword input elements
  @ViewChild('newPassword', { read: ElementRef }) newPassword!: ElementRef<HTMLElement>;
  @ViewChild('confirmPassword', { read: ElementRef }) confirmPassword!: ElementRef<HTMLElement>;

  // Boolean variables to track autofill status
  newPasswordAutofilled!: boolean;
  confirmPasswordAutofilled!: boolean;

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

  // Variable to store the request ID from the route parameters
  requestID!: string;

  // Constructor to initialize the component with required services and dependencies
  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly loginService: LoginService,
    private readonly _autofill: AutofillMonitor,
    private readonly globalService: GlobalService,
  ) {
    // Initializing the form with form controls and validation rules
    this.form = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(regularExpressionPassword)]],
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  // Lifecycle hook - Called after the constructor and when the component is initialized
  ngOnInit() {
    // Subscribing to route parameters to get the request ID
    this.route.params.subscribe((params) => {
      this.requestID = params['request'];
    });
  }

  // Lifecycle hook - Called after the component's view has been initialized
  ngAfterViewInit() {
    // Monitoring autofill status for newPassword and confirmPassword inputs
    this._autofill.monitor(this.newPassword).subscribe((e) => (this.newPasswordAutofilled = e.isAutofilled));
    this._autofill.monitor(this.confirmPassword).subscribe((e) => (this.confirmPasswordAutofilled = e.isAutofilled));
    setTimeout(() => {
      this.globalService.setLoadingState(false);
    }, 500);;
  }

  /**
   * Method to handle keydown events and reset error and info messages.
   */
  onKeyDown() {
    this.error = null;
    this.info = null;
  }

  /**
   * Method triggered when the "Reset Password" button is pressed.
   */
  onResetPasswordPressed() {
    // Checking for an empty new password
    if (this.form.get('newPassword').value === '') {
      this.error = this.translations.reset_password_error_message_empty_password;
      return;
    }

    // Checking for an invalid new password
    if (this.form.get('newPassword').invalid) {
      this.error = this.translations.reset_password_error_message_invalid_password;
      return;
    }

    // Checking if new and confirm passwords match
    if (this.form.get('newPassword').value !== this.form.get('confirmPassword').value) {
      this.error = this.translations.reset_password_error_message_passwords_not_match;
      return;
    }

    // Creating data object for the reset password request
    const dataBodyRequest = {
      password: this.form.get('newPassword').value,
      request: this.requestID,
    };

    // Sending a request to the login service to reset the password
    this.loginService.resetPassword(dataBodyRequest).subscribe({
      next: (response: any) => {
        if (response.error) {
          this.error = response.message;
        } else {
          // Redirecting to the login page after a successful password reset
          setTimeout(() => {
            this.router.navigateByUrl('/login');
          }, 3000);
          this.info = this.translations.reset_password_success_message;
        }
      },
      error: (err: any) => {
        console.log(err);
        this.error = err.error.message;
      },
    });
  }

  // Lifecycle hook - Called when the component is about to be destroyed
  ngOnDestroy() {
    // Stopping autofill monitoring for newPassword and confirmPassword inputs
    this._autofill.stopMonitoring(this.newPassword);
    this._autofill.stopMonitoring(this.confirmPassword);
  }
}
