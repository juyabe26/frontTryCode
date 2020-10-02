import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { pathsRoutes, appRoutes } from 'src/app/routes';


@Component({
  selector: 'wkr-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  get routeRegisterUser() { return '/' + appRoutes.REGISTER_USER; };
  get routeForgotPasswors() { return '/' + appRoutes.FORGOT_PASSWORD; };

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }

}
