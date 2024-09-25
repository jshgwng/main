import { Routes } from '@angular/router';

// pages
import { AppIconsComponent } from './icons/icons.component';
import { AppSamplePageComponent } from './sample-page/sample-page.component';
import { AppReportAccidentPage } from './report-accident/report-accident.component';
import { AppAccidentReportsComponent } from './accident-reports/accident-reports.component';
import { AppReportDetailComponent } from './report-detail/report-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppUserPolicyComponent } from './user-policy/user-policy.component';

export const ExtraRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'icons',
        component: AppIconsComponent,
      },
      {
        path: 'sample-page',
        component: AppSamplePageComponent,
      },
      {
        path: 'report-accident',
        component: AppReportAccidentPage,
      },
      {
        path: 'accident-reports',
        component: AppAccidentReportsComponent,
      },
      {
        path: 'report-details/:id',
        component: AppReportDetailComponent,
      },
      {
        path: 'profile',  
        component: UserProfileComponent,
      },
      {
        path: 'user-policy',  
        component: AppUserPolicyComponent,
      },
    ],
  },
];
