import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { ReportDetailComponent } from './report-detail/report-detail.component'; // Import the new component

export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },
  {
    path: 'report-detail/:id', // Define the route with a parameter for the report ID
    component: ReportDetailComponent,
    data: {
      title: 'Report Detail',
    },
  },
];
