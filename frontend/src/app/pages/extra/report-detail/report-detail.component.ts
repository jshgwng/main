import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AccidentReportDialogComponent } from './accident-report-dialog/accident-report-dialog.component';
import { AccidentReport } from 'src/models/accident-report.model';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss']
})
export class AppReportDetailComponent implements OnInit {
  report!: AccidentReport; // Explicitly declare the type

  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AccidentReportDialogComponent);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.data) {
        console.log('Navigated details with report:', params.data);
        this.report = JSON.parse(params.data); // Parse the serialized data back into an object
      }
    });
  }
}

//AccidentReport
// ngOnInit(): void {
  //   // Safely accessing navigation extras using optional chaining
  //   const navigation = this.router.getCurrentNavigation();
  //   if (navigation?.extras?.state && navigation.extras.state['report']) {
  //     this.report = navigation.extras.state['report'];
  //     console.log('Received report data:', this.report);
  //   } else {
  //     console.log('No report data found in navigation extras');
  //   }
