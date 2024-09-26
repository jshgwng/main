import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { LoginResponse } from 'src/models/login-response.models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  loginObj: Login;

  constructor(private service: NotificationsService, private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  notify(message: any) {
    this.service.error('error', message, {
      position: ['top', 'right'],
      timeout: 200,
      animate: 'fade',
      showProgressBar: true,
    });
  }

  onLogin() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.post<LoginResponse>('http://localhost:8080/api/v1/auth/login', this.loginObj, { headers, observe: 'response' })
      .subscribe(
        (res: any) => {
          if (res.status === 200) {
            const loginResponse: LoginResponse = res.body; // Access the response body and cast it to LoginResponse

            // Save the token and user details to localStorage
            localStorage.setItem('token', loginResponse.token);
            localStorage.setItem('user', JSON.stringify(loginResponse.userResponse));

            this.service.success('Login Successful');
            this.router.navigateByUrl('/dashboard');
          } else {
            this.notify(res.status);
          }
        },
        (error) => {
          console.error('There was an error!', error);
          if (error.error) {
            this.notify(error.error.message);
          } else {
            this.service.error('An error occurred. Please try again.');
          }
        }
      );
  }
}

export class Login {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
