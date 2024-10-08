import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { OPTIONS } from './data';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NotificationsService } from 'angular2-notifications';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface ListObject {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-report-accident-page',
  templateUrl: './report-accident.component.html',
  styleUrls: ['./report-accident.component.css'],
  providers: [provideNativeDateAdapter()],
})
export class AppReportAccidentPage implements OnInit {
onUploadError($event: any) {
throw new Error('Method not implemented.');
}
onUploadSuccess($event: any) {
throw new Error('Method not implemented.');
}
  myControl = new FormControl('');
  options: string[] = OPTIONS;
  filteredOptions: Observable<string[]> | undefined;
  severities: ListObject[] = [
    { value: 'minor', viewValue: 'Minor' },
    { value: 'moderate', viewValue: 'Moderate' },
    { value: 'severe', viewValue: 'Severe' },
  ];

  statuses: ListObject[] = [
    { value: 'pending', viewValue: 'Pending' },
    { value: 'investigating', viewValue: 'Investigating' },
    { value: 'resolved', viewValue: 'Resolved' },
    { value: 'closed', viewValue: 'Closed' },
  ];
  
  insurers: ListObject[] = [
    { value: 'test-one-insurance', viewValue: 'Test One Insurance Company' },
    { value: 'test-two-insurance', viewValue: 'Test Two Insurance Company' },
    { value: 'test-three-insurance', viewValue: 'Test Three Insurance Company' },
    { value: 'test-four-insurance', viewValue: 'Test Four Insurance Company' },
  ];

  config: DropzoneConfigInterface | undefined;
  accidentForm: FormGroup;

  constructor(private service: NotificationsService, private http: HttpClient) {
    this.accidentForm = new FormGroup({
      location: new FormControl(''),
      vin: new FormControl(''),
      model: new FormControl(''),
      yearOfManufacture: new FormControl(''),
      engineCapacity: new FormControl(''),
      registrationNo: new FormControl(''),
      description: new FormControl(''),
      severity: new FormControl(''),
      status: new FormControl(''),
      dateOfAccident: new FormControl(''),
      scenePhotographs: new FormControl(''), // Update as needed
      motorInsuranceStickerImg: new FormControl(''), // Update as needed
      insurer: new FormControl(''),
      claimRefNo: new FormControl(''),
      policyRefNo: new FormControl(''),
      nearestPolicyStation: new FormControl(''), // Add if needed
      fatalities: new FormControl(0), // Default to 0
    });
  }

  notify(message: any) {
    this.service.alert('New Accident', message, {
      position: ['top', 'right'],
      timeout: 200,
      animate: 'fade',
      showProgressBar: true,
    });
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toUpperCase();
    return this.options.filter((option) =>
      option.toUpperCase().includes(filterValue)
    );
  }

  submitReport() {
    const reportData = this.accidentForm.value;
  
    // Check if dateOfAccident is valid
    let dateOfAccident: string | undefined;
  
    // Prepare the data object
    const payload = {
      location: reportData.location ,
      vin: reportData.vin ,
      model: reportData.model,
      yearOfManufacture: reportData.yearOfManufacture,
      engineCapacity: reportData.engineCapacity,
      registrationNo: reportData.registrationNo,
      description: reportData.description,
      severity: reportData.severity,
      status: reportData.status,
      dateOfAccident: dateOfAccident,
      scenePhotographs: reportData.scenePhotographs, 
      motorInsuranceStickerImg: reportData.motorInsuranceStickerImg, 
      insurer: reportData.insurer,
      claimRefNo: reportData.claimRefNo,
      policyRefNo: reportData.policyRefNo,
      nearestPolicyStation: reportData.nearestPolicyStation, 
      fatalities: reportData.fatalities,
    };
  
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');
    
    if (!token) {
      this.service.error('Auth token not found.');
      return;
    }
  
    // Send the data through HTTP POST request with Bearer token
    this.http.post('http://localhost:8080/api/v1/accident-reports', payload, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`  // Add the Bearer token here
      })
    }).subscribe(
      (response) => {
        this.service.success('submitted successfully!');
        this.accidentForm.reset(); // Reset the form after submission
      },
      (error) => {
        console.error('Error submitting report:', error);
        this.service.error('Failed to submit.');
      }
    );
  }
  
  
  
}
