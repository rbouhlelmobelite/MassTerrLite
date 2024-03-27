import { Component } from '@angular/core';
import { GlobalService } from '../core/services/global/global.service';

@Component({
  selector: 'app-auth-loader',
  template: `
    <div *ngIf="isLoading$ | async" class="loader-overlay">
      <div class="loader-circle"></div>
    </div>
  `,
  styles: [
    `.loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      backdrop-filter: blur(2px); /* Ajout du flou en arrière-plan */
    }
    
    .loader-circle {
      border: 5px solid #f3f3f3;
      border-radius: 50%;
      border-top: 5px solid #3498db;
      width: 50px;
      height: 50px;
      -webkit-animation: spin 2s linear infinite; /* Safari */
      animation: spin 2s linear infinite;
    }
    
    /* Safari */
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    `
  ]
})
export class AuthLoaderComponent {
  isLoading$ = this.globalService.isLoading$;

  constructor(private globalService: GlobalService) { }
}
