import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPasswordComponent } from './forgot-password.component';
import { LoginService } from '../core/services/login/login.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { SharedLibraryModule } from 'dist/shared-library';
import { MaterialModule } from '../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let loginService: jasmine.SpyObj<LoginService>;

  beforeEach(() => {
    loginService = jasmine.createSpyObj('LoginService', ['forgotPassword']);

    TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, SharedLibraryModule, MaterialModule , RouterTestingModule , BrowserAnimationsModule],
      providers: [{ provide: LoginService, useValue: loginService }, FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    component.translations = { // Mock translations object
      forgot_password_You_should_receive_an_email: 'Mock success message',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSendPressed', () => {
    it('should set error when email is empty', () => {
      
      component.form.get('email').setValue('');
      const errorResponse = { error: { message: 'Please enter your email address' } };
      loginService.forgotPassword.and.returnValue(throwError(() => errorResponse));
      
      component.onSendPressed();

      
      expect(component.error).toEqual('Please enter your email address');
    });

    it('should call loginService.forgotPassword and set info on success', () => {
      
      const email = 'test@example.com';
      component.form.get('email').setValue(email);
      loginService.forgotPassword.and.returnValue(of({}));

      
      component.onSendPressed();

      
      expect(loginService.forgotPassword).toHaveBeenCalledWith(email);
      expect(component.info).toEqual(component.translations.forgot_password_You_should_receive_an_email);
    });

    it('should set error on failure', () => {
      
      const email = 'test@example.com';
      component.form.get('email').setValue(email);
      const errorResponse = { error: { message: 'Sorry, we don’t recognise this email. Please try again' } };
      loginService.forgotPassword.and.returnValue(throwError(() => errorResponse));

      
      component.onSendPressed();

      
      expect(loginService.forgotPassword).toHaveBeenCalledWith(email);
      expect(component.error).toEqual(errorResponse.error.message);
    });
  });

  
});
