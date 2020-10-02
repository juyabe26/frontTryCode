import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { appRoutes } from 'src/app/routes';

@Component({
  selector: 'wkr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  get routeSignIn() { return '/' + appRoutes.SIGN_IN; };
  get routeForgotPasswors() { return '/' + appRoutes.FORGOT_PASSWORD; };

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }

}
