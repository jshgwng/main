import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  userRegistrationObj = new UserRegistration();
  constructor(
    private service: NotificationsService,
    private http: HttpClient,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  onSignUp() {
    this.authService
      .signUp(
        this.userRegistrationObj.fullName,
        this.userRegistrationObj.email,
        this.userRegistrationObj.phoneNumber,
        this.userRegistrationObj.phoneNumber
      )
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    // this.http.post('http://localhost:8080/api/v1/auth/register', this.userRegistrationObj, { observe: 'response' })
    //   .subscribe(
    //     (res: any) => {
    //       // Check if status code is 200
    //       if (res.status === 200) {
    //         this.router.navigateByUrl('/authentication/login');
    //         this.service.success('Registration Success!');

    //       } else {
    //         // If not 200, print the response body
    //         this.service.error(JSON.stringify(res.body));

    //       }
    //     },
    //     (error) => {
    //       console.error('There was an error!', error);
    //       // Display the error response body
    //       if (error.error) {

    //         this.service.error(JSON.stringify(error.error.message));
    //       } else {
    //         this.service.error(JSON.stringify('An error occurred. Please try again.'));

    //       }
    //     }
    //   );
  }

  submit() {
    // console.log(this.form.value);
    this.router.navigate(['/dashboard']);
  }
}

export class UserRegistration {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;

  constructor() {
    this.fullName = '';
    this.email = '';
    this.phoneNumber = '';
    this.password = '';
  }
}
