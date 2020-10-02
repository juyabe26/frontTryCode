import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { appRoutes } from 'src/app/routes';


@Component({
  selector: 'wkr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  get routeInfoUser() { return '/' + appRoutes.INFO_USERS; };
  get routeFormUser() { return '/' + appRoutes.FORM_USERS; };
  get routeUsersPlanet() { return '/' + appRoutes.FORM_USERS_PLANET; };

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
  ) { }

  ngOnInit() { }

  onLogout() {
    this.authService.signOut();
    this.router.navigate([appRoutes.SIGN_IN]);
  }
}
