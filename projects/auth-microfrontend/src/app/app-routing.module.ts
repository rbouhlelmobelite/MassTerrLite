import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { APP_BASE_HREF } from '@angular/common';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { AuthguardGuard } from './authguard.guard';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [() => inject(AuthguardGuard).canActivate()] },
  {
    path: 'reset/:request',
    component: ResetPasswordComponent,
    canActivate: [() => inject(AuthguardGuard).canActivate()],
  },
  {
    path: 'activate-account/:request',
    component: ActivateAccountComponent,
    canActivate: [() => inject(AuthguardGuard).canActivate()],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [() => inject(AuthguardGuard).canActivate()],
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule { }
