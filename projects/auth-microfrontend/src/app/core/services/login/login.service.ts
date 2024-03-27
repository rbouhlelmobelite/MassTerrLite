import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiGlobalConfig } from '../../constants/ApiGlobalConfig';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  headers = new HttpHeaders();

  constructor(private readonly httpClient: HttpClient) {
    // Initializing headers with default values
    this.headers = this.headers.append('Authorization', 'Basic bWFzczo');
    this.headers = this.headers.append('x-tenant', 'lite');
  }

  /**
   * Method to perform a login operation.
   * @param loginData Object containing login data.
   * @returns Observable<any> representing the result of the login operation.
   */
  login(loginData: any): Observable<any> {
    return this.httpClient.post<any>(ApiGlobalConfig.login, loginData, { headers: this.headers });
  }

  /**
   * Method to initiate the forgot password process.
   * @param email Email address for which the forgot password process is initiated.
   * @returns Observable<any> representing the result of the forgot password process.
   */
  forgotPassword(email: string): Observable<any> {
    return this.httpClient.post<any>(ApiGlobalConfig.forgotPassword, { email }, { headers: this.headers });
  }

  /**
   * Method to reset the password.
   * @param resetData Object containing reset password data.
   * @returns Observable<any> representing the result of the password reset process.
   */
  resetPassword(resetData: any): Observable<any> {
    return this.httpClient.post<any>(ApiGlobalConfig.resetPassword, resetData, { headers: this.headers });
  }

  /**
   * Method to activate an account.
   * @param password New password to activate the account.
   * @param userId ID of the user whose account needs to be activated.
   * @returns Observable<any> representing the result of the account activation process.
   */
  activateAccount(password: string, userId: string): Observable<any> {
    return this.httpClient.put<any>(`${ApiGlobalConfig.activateAccount}/${userId}`, password, {
      headers: this.headers,
    });
  }

  /**
   * Method to get the user ID.
   * @param linkId ID of the link used to fetch the user ID.
   * @returns Observable<any> representing the result of the user ID retrieval process.
   */
  getUserID(linkId: string): Observable<any> {
    return this.httpClient.get<any>(`${ApiGlobalConfig.getUserId}/${linkId}`, {
      headers: this.headers,
    });
  }
}
