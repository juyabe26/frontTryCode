import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../shared/guard/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { pathsRoutes } from 'src/app/routes';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: pathsRoutes.USERS,
        loadChildren: () => import('./../users/users.module').then(m => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
