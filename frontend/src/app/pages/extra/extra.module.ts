import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { ExtraRoutes } from './extra.routing';
import { AppIconsComponent } from './icons/icons.component';
import { AppSamplePageComponent } from './sample-page/sample-page.component';
import { AppReportAccidentPage } from './report-accident/report-accident.component';
import { DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { AppAccidentReportsComponent } from './accident-reports/accident-reports.component';
import { AppReportDetailComponent } from './report-detail/report-detail.component';
import { AccidentReportDialogComponent } from './report-detail/accident-report-dialog/accident-report-dialog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AppUserPolicyComponent } from './user-policy/user-policy.component';


const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExtraRoutes),
    MaterialModule,
    FormsModule,
    MatDividerModule,  
    MatListModule,   
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    DropzoneModule,
   
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
  declarations: [
    AppIconsComponent,
    AppSamplePageComponent,
    AppReportAccidentPage,
    AppAccidentReportsComponent,
    AppReportDetailComponent,
    UserProfileComponent,
    AppUserPolicyComponent
  ],
})
export class ExtraModule {}
