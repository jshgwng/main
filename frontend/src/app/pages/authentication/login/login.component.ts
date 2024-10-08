import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthenticationService } from '../authentication.service';
import { LoginResponse } from 'src/models/login-response.models';
import { Subject, tap } from 'rxjs';
import { User } from '../user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  loginObj: Login;
  user = new Subject<User>();
  constructor(private service: NotificationsService,private http: HttpClient,private router:Router,private authService: AuthenticationService) {
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
    
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyNjY2MDY3NCwiZXhwIjoxNzI2NjY0Mjc0fQ.NlDeyABjHVg9NsnKjMUbyGoqX1pj9lAPYAh4nq_aam0'; 

    const headers = new HttpHeaders({
    
      'Content-Type': 'application/json'
    });

    this.authService
    .login(
      this.loginObj.email,
      this.loginObj.password
    )
    .subscribe(
      (res) => {
        // console.log(res);
        localStorage.setItem("token",res.token);
        localStorage.setItem("user",JSON.stringify(res.userResponse))
        localStorage.setItem("role",JSON.stringify(res.userResponse.role))
        if(res.userResponse.role === "ADMIN"){
          this.router.navigateByUrl('/dashboard');
        }
        this.router.navigateByUrl('//extra/report-accident');
        this.service.success('Login Success!');
      },
      (error) => {
        console.log(error.error);
        this.service.error(error.error.details)
      }
    );
    
    // this.http.post('http://localhost:8080/api/v1/auth/login', this.loginObj, { headers, observe: 'response' })
    //   .subscribe(
    //     (res: any) => {
    //       // Check if status code is 200
    //       if (res.status === 200) {
    //         this.service.success('Login Successfull')
    //         this.router.navigateByUrl('/dashboard')
    //        // alert('Login Success');
    //       } else {
    //         // If not 200, print the response body
    //         this.service.error(res.body.message)
           

    //       }
    //     },
    //     (error) => {
    //       console.error('There was an error!', error);
    //       // Display the error response body
    //       if (error.error) {
    //         alert(error.error.message);

    //       } else {
    //         this.service.error('An error occurred. Please try again.')
           
    //       }
    //     }
    //   );
    }}    

export class Login {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
