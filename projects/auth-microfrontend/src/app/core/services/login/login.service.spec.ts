import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { ApiGlobalConfig } from '../../constants/ApiGlobalConfig';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });

    service = TestBed.inject(LoginService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send login request successfully', () => {
    const loginData = {  };

    service.login(loginData).subscribe(response => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne(ApiGlobalConfig.login);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe('Basic bWFzczo');
    expect(req.request.headers.get('x-tenant')).toBe('lite');
    req.flush({  });
  });

  it('should send forgot password request successfully', () => {
    const email = 'test@example.com';

    service.forgotPassword(email).subscribe(response => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne(ApiGlobalConfig.forgotPassword);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe('Basic bWFzczo');
    expect(req.request.headers.get('x-tenant')).toBe('lite');
    req.flush({ });
  });

  it('should send reset password request successfully', () => {
    const resetData = {  };

    service.resetPassword(resetData).subscribe(response => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne(ApiGlobalConfig.resetPassword);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe('Basic bWFzczo');
    expect(req.request.headers.get('x-tenant')).toBe('lite');
    req.flush({ });
  });

});
