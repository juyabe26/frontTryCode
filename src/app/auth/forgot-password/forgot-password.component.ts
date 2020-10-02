import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { appRoutes } from 'src/app/routes';

@Component({
  selector: 'wkr-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {

  get routeSignIn() { return '/' + appRoutes.SIGN_IN; };
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
