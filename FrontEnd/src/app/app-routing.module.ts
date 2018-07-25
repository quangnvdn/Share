import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginComponent } from './pages/users/login/login.component';
import { SignupComponent } from './pages/users/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { RegularClientComponent } from './pages/users/regular-client/regular-client.component'
//import { AuthGuard } from './_guards/auth.guard';
import {AuthGuardService as AuthGuard } from './_guards/auth-guard.service';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      {
          path: 'order', 
          component: HomeComponent
      },
      {
        path: 'client',
        component: RegularClientComponent
      }
  ]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
