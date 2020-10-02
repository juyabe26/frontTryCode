import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { appRoutes } from 'src/app/routes';

@Component({
  selector: 'wkr-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  get routeSignIn() { return '/' + appRoutes.SIGN_IN; };
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
