import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './../../routes';
const routes: Routes = [
  { path: appRoutes.NONE, redirectTo: 'auth/sign-in', pathMatch: 'full' },
  { path: appRoutes.AUTH, loadChildren: () => import('../../auth/auth.module').then(auth => auth.AuthModule) },
  { path: appRoutes.DASHBOARD, loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
