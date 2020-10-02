import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent, SignUpComponent, ForgotPasswordComponent, VerifyEmailComponent } from '.';
import { pathsRoutes } from '../routes';

const routes: Routes = [
  { path: pathsRoutes.SIGN_IN, component: SignInComponent },
  { path: pathsRoutes.REGISTER_USER, component: SignUpComponent },
  { path: pathsRoutes.FORGOT_PASSWORD, component: ForgotPasswordComponent },
  { path: pathsRoutes.VERIFY_EMAIL, component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
