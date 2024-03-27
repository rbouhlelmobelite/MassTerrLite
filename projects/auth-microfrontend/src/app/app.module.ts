import { NgModule } from '@angular/core';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedLibraryModule } from 'shared-library';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { authInterceptorProviders } from './core/interceptor/auth.interceptor';
import { LoginService } from './core/services/login/login.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthLoaderComponent } from './loader/auth-loader.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ActivateAccountComponent,
    AuthLoaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedLibraryModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  providers: [LoginService, authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
