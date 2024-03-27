import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage/token-storage.service';

const AUTH_TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly tokenStorageService: TokenStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.tokenStorageService.getToken();
    if (token !== null) {
      authReq = req.clone({
        headers: req.headers.set(AUTH_TOKEN_HEADER_KEY, `Bearer ${token}`),
      });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }];
