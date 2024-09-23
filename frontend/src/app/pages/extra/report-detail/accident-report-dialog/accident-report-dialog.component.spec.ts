import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentReportDialogComponent } from './accident-report-dialog.component';

describe('AccidentReportDialogComponent', () => {
  let component: AccidentReportDialogComponent;
  let fixture: ComponentFixture<AccidentReportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccidentReportDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccidentReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
