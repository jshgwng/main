import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationModel } from './authentication.model';
import { Subject, tap } from 'rxjs';
import { Router } from '@angular/router';

interface User {
  id: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  role: string;
}

interface AuthenticationResponse {
  token: string;
  user: User;
}
@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private http: HttpClient, private router:Router) {}
  signUp(
    fullName: string,
    email: string,
    phoneNumber: string,
    password: string
  ) {
    return this.http
      .post<AuthenticationResponse>(
        'http://localhost:8080/api/v1/auth/register',
        {
          fullName: fullName,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
        }
      )
  }
  login(email: string, password: string) {
    return this.http.post<AuthenticationResponse>(
      'http://localhost:8080/api/v1/auth/login',
      {
        email: email,
        password: password,
      }
    );
  }
}
