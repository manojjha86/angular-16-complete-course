import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((mod) => mod.DashBoardModule)},
    { path: 'login', loadChildren: () => import('./login/auth.module').then((mod) => mod.AuthModule)}   
  ]; 

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})], 
  exports: [RouterModule], 
  providers: []
})
export class RouteModule { }
