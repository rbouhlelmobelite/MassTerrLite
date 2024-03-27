import { Injectable } from '@angular/core';
import { TokenStorageService } from './core/services/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard {
  constructor(private readonly tokenStorageService: TokenStorageService) {}

  /**
   * @returns true if a valid token exist, false otherwise
   */
  canActivate(): boolean {
    const token = this.tokenStorageService.getToken();
    // if token not found stay in /login page
    if (!token) {
      return true;
    } else {
      // if token exist and it's not valid stay in /login page
      // if a valid token exist go to /home page

      return this.tokenStorageService.isTokenExpired();
    }
  }
}
