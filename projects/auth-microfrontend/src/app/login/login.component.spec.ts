
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedLibraryModule } from 'dist/shared-library';
import { MaterialModule } from '../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, async, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../core/services/login/login.service';
import { TokenStorageService } from '../core/services/token-storage/token-storage.service';
import { UserService } from '../core/services/user/user.service';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;
  let mockTokenStorageService: jasmine.SpyObj<TokenStorageService>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let mockAutofillMonitor: jasmine.SpyObj<AutofillMonitor>;

  beforeEach(async(() => {
    mockLoginService = jasmine.createSpyObj('LoginService', ['login']);
    mockTokenStorageService = jasmine.createSpyObj('TokenStorageService', ['saveToken']);
    mockUserService = jasmine.createSpyObj('UserService', ['getAuthenticatedUser', 'saveRole', 'saveEmail']);
    mockAutofillMonitor = jasmine.createSpyObj('AutofillMonitor', ['monitor', 'stopMonitoring']);
    const mockLoginResponse = {
      httpStatus: 'ACCEPTED',
      data: {
        access_token: 'test-access-token',
        expires_in: '3600',
        refresh_token: 'test-refresh-token',
      },
    };
  
    const mockUserResponse = {
      data: {
        role: 'USER',
        email: 'test@example.com',
      },
    };
  
    mockLoginService.login.and.returnValue(of(mockLoginResponse));
    mockUserService.getAuthenticatedUser.and.returnValue(of(mockUserResponse));
  
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [BrowserAnimationsModule ,  ReactiveFormsModule, HttpClientTestingModule , SharedLibraryModule , MaterialModule , RouterTestingModule],

      providers: [
        FormBuilder,
        { provide: LoginService, useValue: mockLoginService },
        { provide: TokenStorageService, useValue: mockTokenStorageService },
        { provide: UserService, useValue: mockUserService },
        { provide: AutofillMonitor, useValue: mockAutofillMonitor },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
 
});
