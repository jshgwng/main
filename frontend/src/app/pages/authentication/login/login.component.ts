import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  loginObj: Login;

  constructor(private http: HttpClient,private router:Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyNjY2MDY3NCwiZXhwIjoxNzI2NjY0Mjc0fQ.NlDeyABjHVg9NsnKjMUbyGoqX1pj9lAPYAh4nq_aam0'; 

    const headers = new HttpHeaders({
      'X-Auth-Token': token,
      'Content-Type': 'application/json'
    });
    
    this.http.post('http://localhost:5000/api/auth/login', this.loginObj, { headers, observe: 'response' })
      .subscribe(
        (res: any) => {
          // Check if status code is 200
          if (res.status === 200) {
            
            this.router.navigateByUrl('/dashboard')
           // alert('Login Success');
          } else {
            // If not 200, print the response body
            alert('Error: ' + res.body.message);

          }
        },
        (error) => {
          console.error('There was an error!', error);
          // Display the error response body
          if (error.error) {
            alert(error.error.message);

          } else {
            alert('An error occurred. Please try again.');
          }
        }
      );
    }}    

export class Login {
  email: string;
  password: string;
  
  constructor() {
    this.email = '';
    this.password = '';
  }
}
