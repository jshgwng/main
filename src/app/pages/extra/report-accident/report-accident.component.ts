import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { OPTIONS } from './data';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

interface ListObject {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-report-accident-page',
  templateUrl: './report-accident.component.html',
  styleUrl: './report-accident.component.css',
  providers: [provideNativeDateAdapter()],
})
export class AppReportAccidentPage implements OnInit {
  onUploadSuccess($event: any) {
    throw new Error('Method not implemented.');
  }
  onUploadError($event: any) {
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
    {
      value: 'test-three-insurance',
      viewValue: 'Test Three Insurance Company',
    },
    { value: 'test-four-insurance', viewValue: 'Test Four Insurance Company' },
  ];
  config: DropzoneConfigInterface | undefined;

  constructor() {}

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
}
