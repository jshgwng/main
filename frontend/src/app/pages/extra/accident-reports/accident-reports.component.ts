import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AccidentReport } from 'src/models/accident-report.model';

@Component({
  selector: 'app-accident-reports',
  templateUrl: './accident-reports.component.html',
  styleUrls: ['./accident-reports.component.scss']
})
export class AppAccidentReportsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'location', 'description', 'severity', 'status', 'dateOfAccident'];
  dataSource: AccidentReport[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAccidentReports();
  }

  loadAccidentReports() {
    const token = localStorage.getItem('token');  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Retrieve user information from local storage
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const email = user.userResponse?.email; // Safely access email
    
    const role = user.userResponse?.role;
    // Construct the URL based on the user role
    let url = 'http://localhost:8080/api/v1/accident-reports';
    // if (role === 'ADMIN') {
    //   url += `?username=${email}`; // Append email if user is ADMIN
    // }
    this.http.get<AccidentReport[]>(url,{ headers })
      .pipe(
        catchError(this.handleError) 
      )
      .subscribe({
        next: (data) => {
          console.log(data)
          this.dataSource = data.map(report => ({
            createdBy: report.createdBy,
            createdDate: report.createdDate,
            lastModifiedBy: report.lastModifiedBy,
            lastModifiedDate: report.lastModifiedDate,
            id: report.id,
            location: report.location || 'Unknown',
            vin: report.vin,
            model: report.model,
            yearOfManufacture: report.yearOfManufacture,
            engineCapacity: report.engineCapacity,
            registrationNo: report.registrationNo,
            description: report.description || 'No description provided',
            severity: report.severity || 'Unknown',
            status: report.status || 'Pending',
            dateOfAccident: report.dateOfAccident ? new Date(report.dateOfAccident) : null,
            scenePhotographs: report.scenePhotographs,
            motorInsuranceStickerImg: report.motorInsuranceStickerImg,
            insurer: report.insurer,
            claimRefNo: report.claimRefNo,
            policyRefNo: report.policyRefNo,
            nearestPolicyStation: report.nearestPolicyStation,
            fatalities: report.fatalities,
            deleted: report.deleted
          }));
        },
        error: (error) => {
          console.error('Error fetching accident reports:', error);
        }
      });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.error('Logging error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  goToDetails(report: AccidentReport) {
    // Log the report data to the console before navigation
   
  
    // Serialize the report object to JSON for passing in queryParams
    const reportData = JSON.stringify(report);
  
    // Navigate to the report details page and pass the serialized report data
    this.router.navigate(['/extra/report-details', report.id], { queryParams: { data: reportData } });
  }
  
  

}
