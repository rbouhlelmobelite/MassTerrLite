import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedLibraryModule } from 'dist/shared-library';
import { of, throwError } from 'rxjs';
import { LoginService } from '../core/services/login/login.service';
import { MaterialModule } from '../material.module';
import { ActivateAccountComponent } from './activate-account.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ActivateAccountComponent', () => {
  let component: ActivateAccountComponent;
  let fixture: ComponentFixture<ActivateAccountComponent>;
  let mockActivatedRoute : any;
  let mockRouter  :any;
  let mockLoginService : any;
   

  beforeEach(() => {
    mockActivatedRoute = {
      params: of({ request: 'test-request-id' }),
    };
    mockLoginService = jasmine.createSpyObj(['activateAccount' ,'getUserID']);
    mockLoginService.getUserID.and.returnValue(of([]))
    TestBed.configureTestingModule({
      declarations: [ActivateAccountComponent],
      imports: [ BrowserAnimationsModule ,  SharedLibraryModule , MaterialModule],
      providers: [
        FormBuilder,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: LoginService, useValue: mockLoginService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateAccountComponent);
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
    component.onActivateAccountPressed();
    fixture.detectChanges();
    expect(component.error).toBe('Please enter your new password');
  });

  it('should set error if new password is invalid', () => {
    component.form.get('newPassword').setValue('invalid');
    component.onActivateAccountPressed();
    fixture.detectChanges();
    expect(component.error).toBe(
      'The password must contains at least 8 characters, one capital letter, one number and one special character'
    );
  });

  it('should set error if new password and confirm password do not match', () => {
    component.form.get('newPassword').setValue('password123');
    component.form.get('confirmPassword').setValue('password456');
    component.onActivateAccountPressed();
    fixture.detectChanges();
    expect(component.error).toBe('The password must contains at least 8 characters, one capital letter, one number and one special character');
  });

  it('should set error message after failed password reset', () => {
    component.form.get('newPassword').setValue('password123');
    component.form.get('confirmPassword').setValue('password123');
    mockLoginService.activateAccount.and.returnValue(of({ error: true, message: 'Test error' }));
    component.onActivateAccountPressed();
    fixture.detectChanges();
    expect(component.error).toBe('The password must contains at least 8 characters, one capital letter, one number and one special character');
  });

  it('should redirect to login if activation token is expired', () => {
    const errorResponse = { error : {message: 'expired link'  , errorCode:401}};
    spyOn(component['router'] ,'navigateByUrl')

    mockLoginService.getUserID.and.returnValue(throwError(() => errorResponse));
    component.getUserId();
    fixture.detectChanges();
    expect(component['router'].navigateByUrl).toHaveBeenCalledWith('/login')
  });

  it('should redirect to login if activation token is expired', () => {
    const errorResponse = { error : {message: 'expired link'  , errorCode:401}};
    spyOn(component['router'] ,'navigateByUrl')

    mockLoginService.getUserID.and.returnValue(throwError(() => errorResponse));
    component.getUserId();
    fixture.detectChanges();
    expect(component['router'].navigateByUrl).toHaveBeenCalledWith('/login')
  });


  it('should handle form submission with emtpy data', fakeAsync(() => {
    const mockResponse = { error: false };
    mockLoginService.activateAccount.and.returnValue(of(mockResponse));

    component.form.setValue({
      newPassword: '',
      confirmPassword: '',
    });

    component.onActivateAccountPressed();
    tick();

    expect(component.error).toBe(component.translations.activate_account_error_message_empty_password)

  }));


  it('should handle form submission with mismatch password', fakeAsync(() => {
    const mockResponse = { error: false };
    mockLoginService.activateAccount.and.returnValue(of(mockResponse));

    component.form.setValue({
      newPassword: 'MassTerlite2024!',
      confirmPassword: 'MassTerlite2025!',
    });

    component.onActivateAccountPressed();
    tick();

    expect(component.error).toBe(component.translations.activate_account_error_message_passwords_not_match)

  }));

  it('should handle form submission with empty new password', fakeAsync(() => {
    const mockResponse = { error: false };
    mockLoginService.activateAccount.and.returnValue(of(mockResponse));

    component.form.setValue({
      newPassword: '',
      confirmPassword: 'MassTerlite2024!',
    });

    component.onActivateAccountPressed();
    tick();

    expect(component.error).toBe(component.translations.activate_account_error_message_empty_password)

  }));

  it('should handle form submission with invalid new pawword', fakeAsync(() => {
    const mockResponse = { error: false };
    mockLoginService.activateAccount.and.returnValue(of(mockResponse));

    component.form.setValue({
      newPassword: 'masserlite',
      confirmPassword: 'MassTerlite2024!',
    });

    component.onActivateAccountPressed();
    tick();

    expect(component.error).toBe(component.translations.activate_account_error_message_invalid_password)

  }));
  it('should error be the response message in case error', fakeAsync(() => {
    const mockResponse = { error: true , message:'error-message' };
    mockLoginService.activateAccount.and.returnValue(of(mockResponse));

    component.form.setValue({
      newPassword: 'MassTerlite2024!',
      confirmPassword: 'MassTerlite2024!',
    });

    component.onActivateAccountPressed();
    tick();

    expect(component.error).toBe(mockResponse.message)

  }));
});