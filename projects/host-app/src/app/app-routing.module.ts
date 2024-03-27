import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'mfe1', pathMatch: 'full' },
  {
    path: 'mfe1',
    loadChildren: () =>
      import("../../../auth-microfrontend/src/app/app.module").then((m) => m.AppModule),
  },
  // {
  //   path: 'authMf',
  //   loadChildren: () =>
  //     import('authMicrofrontend/authMicrofrontend').then((m) => { return m.authMicrofrontend;
  //     }),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
