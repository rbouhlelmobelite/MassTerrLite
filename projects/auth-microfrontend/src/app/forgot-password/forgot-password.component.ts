import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import data from '../../assets/interface_labels/interface_labels_keys_en.json';
import { LoginService } from '../core/services/login/login.service';
import { GlobalService } from '../core/services/global/global.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements AfterViewInit {
  // Variable to store translation data
  translations: any = data;

  // Variable to store form data
  form: any;

  // Variables to store info and error messages
  info: string | null = null;
  error: string | null = null;

  /**
   * Constructor to initialize the component with required services and dependencies.
   * @param {FormBuilder} fb - The FormBuilder service instance.
   * @param {LoginService} loginService - The LoginService service instance.
   */
  constructor(
    private readonly fb: FormBuilder,
    private readonly loginService: LoginService,
    private readonly globalService: GlobalService,
    ) {
    // Initializing the form with form controls and validation rules
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngAfterViewInit(): void {
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
   * Method triggered when the "Send" button is pressed.
   */
  onSendPressed() {
    // Checking for an empty email address
    if (this.form.get('email').value === '') {
      this.error = 'Please enter your email address';
      return;
    }

    // Checking for an invalid email address
    if (this.form.invalid) {
      this.error = 'Invalid email';
      return;
    }

    // Sending a request to the login service to initiate the forgot password process
    this.loginService.forgotPassword(this.form.get('email').value).subscribe({
      next: (response: any) => {
        // Displaying an info message upon successful initiation
        this.info = this.translations.forgot_password_You_should_receive_an_email;
      },
      error: (err: any) => {
        // Displaying an error message in case of an error
        this.error = err.error.message;
      },
    });
  }
}
