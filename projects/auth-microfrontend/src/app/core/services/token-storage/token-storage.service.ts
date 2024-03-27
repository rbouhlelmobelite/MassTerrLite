import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const AUTH_TOKEN_KEY = 'access_token';
const EXPIRES_IN = 'expires_in';
const AUTH_REFRESH_TOKEN = 'refresh_token';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(public router: Router) {}

  public saveToken(token: string, expiresIn: string, refreshToken: string): void {
    const expirationDate = Date.now() + parseInt(expiresIn) * 1000;
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
    window.localStorage.removeItem(EXPIRES_IN);
    window.localStorage.removeItem(AUTH_REFRESH_TOKEN);
    window.localStorage.setItem(AUTH_REFRESH_TOKEN, refreshToken);
    window.localStorage.setItem(EXPIRES_IN, String(expirationDate));
    window.localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  public getRefreshToken(): string | null {
    return window.localStorage.getItem(AUTH_REFRESH_TOKEN);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(AUTH_TOKEN_KEY);
  }

  public getExpiresIn(): string | null {
    return window.localStorage.getItem(EXPIRES_IN);
  }

  signOut(): void {
    window.localStorage.clear();
  }

  isTokenExpired(): boolean {
    // if token exist and expired
    const expiresIn = this.getExpiresIn() || '0'; // Provide a default value of '0' if expiresIn is null
    if (parseInt(expiresIn) < Date.now()) {
      this.signOut();
      return true; // token expired
    } else {
      this.router.navigate(['/home']);
      return false; // token not expired
    }
  }
}
