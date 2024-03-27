import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiGlobalConfig } from '../../constants/ApiGlobalConfig';

// Constants for local storage keys
const ROLE = 'ROLE';
const EMAIL = 'EMAIL';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Variable to track whether the current user is an admin
  isAdmin = false;

  // Variable to store information about the current user
  currentUser: any;

  constructor(private readonly httpClient: HttpClient) {}

  /**
   * Method to get the details of the authenticated user.
   * @returns Observable<any> representing the details of the authenticated user.
   */
  getAuthenticatedUser(): Observable<any> {
    // Setting up headers for the HTTP request
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic bWFzczo');
    headers = headers.append('x-tenant', 'lite');

    // Making the HTTP GET request to fetch user details
    return this.httpClient.get<any>(ApiGlobalConfig.userDetails, { headers: headers });
  }

  /**
   * Method to save the role of the current user in local storage.
   * @param role Role of the current user.
   */
  saveRole(role: any) {
    // Saving the role in local storage
    window.localStorage.setItem(ROLE, role);
  }

  /**
   * Method to save the email of the current user in local storage.
   * @param email Email of the current user.
   */
  saveEmail(email: any) {
    // Saving the email in local storage
    window.localStorage.setItem(EMAIL, email);
  }
}
