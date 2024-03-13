import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';
import { AuthResponse } from "../Model/AuthResponse";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  errorMessage: string | null = null;
  authObs: Observable<AuthResponse>;
  router: Router = inject(Router);

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmitted(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoginMode){
      this.isLoading = true;
      this.authObs = this.authService.login(email, password);
    }else{
      this.isLoading = true;
      this.authObs = this.authService.signup(email, password);
    }

    this.authObs.subscribe({
      next: (res) => { 
        console.log(res);
        this.isLoading = false; 
        this.router.navigate(['/dashboard']);
      },
      error: (errMsg) => { 
        this.isLoading = false;

        this.errorMessage = errMsg;
        this.hideSnackbar();
      }
    })
    form.reset();
  }

  hideSnackbar(){
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }
}
