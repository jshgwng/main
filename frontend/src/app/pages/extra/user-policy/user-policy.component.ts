import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-policy',
  templateUrl: './user-policy.component.html',
  styleUrl: './user-policy.component.scss',
})
export class AppUserPolicyComponent implements OnInit {
  private httpClient = inject(HttpClient);

  constructor() {}

  ngOnInit() {
    this.httpClient
      .get('http://localhost:8080/api/v1/user-policies')
      .subscribe({
        next:(res)=>{
          console.log(res)
        }
      });
  }
}
