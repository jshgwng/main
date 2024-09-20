import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccidentReport, ACCIDENT_DATA } from '../../dashboard/dashboard.component'; // Adjust the path as needed

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss']
})
export class ReportDetailComponent implements OnInit {
  report: AccidentReport | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the 'id' from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Find the report with the matching ID
      this.report = ACCIDENT_DATA.find(accident => accident.id === +id);
    }
  }
}
