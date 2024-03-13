import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { canActivate } from './RouteGuards/authGuard';

const routes: Routes = [ 
    { path: '', component: HomeComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'dashboard', component: DashboardComponent, canActivate: [canActivate] },  
  ]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule], 
  providers: []
})
export class RouteModule { }
