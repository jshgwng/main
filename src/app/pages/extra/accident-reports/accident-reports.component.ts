import { Component, OnInit } from '@angular/core';
import { ACCIDENT_DATA } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-accident-reports',
  templateUrl: './accident-reports.component.html'
})
export class AppAccidentReportsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'location', 'description', 'severity', 'status', 'dateOfAccident'];
  dataSource = ACCIDENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
