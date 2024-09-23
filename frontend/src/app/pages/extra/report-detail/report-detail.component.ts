import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccidentReport, ACCIDENT_DATA } from '../../dashboard/dashboard.component'; // Adjust the path as needed
import { MatDialog } from '@angular/material/dialog';
import { AccidentReportDialogComponent } from './accident-report-dialog/accident-report-dialog.component';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss']
})
export class AppReportDetailComponent implements OnInit {
  report: AccidentReport | undefined;

  constructor(private route: ActivatedRoute,public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AccidentReportDialogComponent);
  }

  ngOnInit(): void {
    // Get the 'id' from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Find the report with the matching ID
      this.report = ACCIDENT_DATA.find(accident => accident.id === +id);
    }
  }
}
