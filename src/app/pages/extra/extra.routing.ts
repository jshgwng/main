import { Routes } from '@angular/router';

// pages
import { AppIconsComponent } from './icons/icons.component';
import { AppSamplePageComponent } from './sample-page/sample-page.component';
import { AppReportAccidentPage } from './report-accident/report-accident.component';
import { AppAccidentReportsComponent } from './accident-reports/accident-reports.component';

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
    ],
  },
];
