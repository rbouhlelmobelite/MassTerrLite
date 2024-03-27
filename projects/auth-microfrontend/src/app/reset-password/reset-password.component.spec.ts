import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ResetPasswordComponent } from './reset-password.component';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../core/services/login/login.service';
import { SharedLibraryModule } from 'dist/shared-library';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;
  let mockActivatedRoute : any;
  let mockRouter  :any;
  let mockLoginService : any;
  let router: Router;


  beforeEach(() => {
    mockActivatedRoute = {
      params: of({ request: 'test-request-id' }),
    };
    mockLoginService = jasmine.createSpyObj(['resetPassword']);

    TestBed.configureTestingModule({
      declarations: [ResetPasswordComponent  ],
      imports: [ BrowserAnimationsModule , RouterTestingModule ,  SharedLibraryModule , MaterialModule],
      providers: [
        FormBuilder,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: LoginService, useValue: mockLoginService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  it('should initialize requestID from ActivatedRoute', () => {
    expect(component.requestID).toBe('test-request-id');
  });

  it('should reset error and info on key down', () => {
    component.error = 'Test error';
    component.info = 'Test info';
    component.onKeyDown();
    fixture.detectChanges();
    expect(component.error).toBeNull();
    expect(component.info).toBeNull();
  });

  it('should set error if new password is empty', () => {
    component.form.get('newPassword').setValue('');
    component.onResetPasswordPressed();
    fixture.detectChanges();
    expect(component.error).toBe('Please enter your password');
  });

  it('should set error if new password is invalid', () => {
    component.form.get('newPassword').setValue('invalid');
    component.onResetPasswordPressed();
    fixture.detectChanges();
    expect(component.error).toBe(
      'The password must contains at least 8 characters, one capital letter, one number and one special character'
    );
  });

  it('should set error if new password and confirm password do not match', () => {
    component.form.get('newPassword').setValue('MassTerLite2023!');
    component.form.get('confirmPassword').setValue('MassTerLite2024!');
    component.onResetPasswordPressed();
    fixture.detectChanges();
    expect(component.error).toBe(component.translations.reset_password_error_message_passwords_not_match);
  });



  it('should error be the response message in case error', fakeAsync(() => {
    const mockResponse = { error: true , message:'error-message' };
    mockLoginService.resetPassword.and.returnValue(of(mockResponse));

    component.form.setValue({
      newPassword: 'MassTerlite2024!',
      confirmPassword: 'MassTerlite2024!',
    });

    component.onResetPasswordPressed();
    tick();

    expect(component.error).toBe(mockResponse.message)

  }));

  
  it('should set error message after failed password reset', () => {
    component.form.get('newPassword').setValue('password123');
    component.form.get('confirmPassword').setValue('password123');
    mockLoginService.resetPassword.and.returnValue(of({ error: true, message: 'Test error' }));
    component.onResetPasswordPressed();
    fixture.detectChanges();
    expect(component.error).toBe('The password must contains at least 8 characters, one capital letter, one number and one special character');
  });
});