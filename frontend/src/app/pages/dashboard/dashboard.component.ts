import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexResponsive,
} from 'ng-apexcharts';

// Accident report interface
export interface AccidentReport {
  id: number; // Add an ID property
  location: string;
  description: string;
  severity: 'minor' | 'moderate' | 'severe';
  status: 'pending' | 'investigating' | 'resolved' | 'closed';
  claimId: string | null;
  insurer: string | null;
  policyId: string | null;
  dateOfAccident: string;
  mediaUrl: string;
  vin: string | null;
  model: string | null;
  yearOfManaufacture: string | null;
  engineCapacity: string | null;
  registrationNo: string | null;
}

// Sample data
export const ACCIDENT_DATA: AccidentReport[] = [
  {
    id: 1,
    location: 'MEDICAL QUARTERS, TESO   A, ADYEL, LIRA',
    description:
      'Vehicle hit by a motorcycle trying to overtake on the wrong side',
    severity: 'minor',
    status: 'pending',
    claimId: null,
    insurer: null,
    policyId: null,
    dateOfAccident: '2024-09-18',
    mediaUrl:
      'https://cdn.aarp.net/content/dam/aarpe/en/home/auto/driver-safety/what-to-do-after-car-accident/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.932.jpeg/content/dam/aarp/auto/2021/06/1140-car-crash.jpg',
    vin: '1234',
    model: 'Toyota',
    yearOfManaufacture: '2023',
    engineCapacity: '2L',
    registrationNo: 'UBH 203H',
  },
  {
    id: 2,
    location: 'RWANDET, KAPTEKA, CHESOWER, BUKWO',
    description: 'Rear-end collision at a traffic signal',
    severity: 'moderate',
    status: 'investigating',
    claimId: 'CLM123456',
    insurer: 'ABC Insurance',
    policyId: 'POL78910',
    dateOfAccident: '2024-09-15',
    mediaUrl:
      'https://images.pexels.com/photos/1230677/pexels-photo-1230677.jpeg?auto=compress&cs=tinysrgb&w=600',
    vin: '1234',
    model: 'Toyota',
    yearOfManaufacture: '2023',
    engineCapacity: '2L',
    registrationNo: 'UBH 203H',
  },
  {
    id: 3,
    location: 'KITAMBARA, KIDOMA, KIZIRANFUMBI, KIKUUBE',
    description: 'Side collision at an intersection',
    severity: 'severe',
    status: 'resolved',
    claimId: 'CLM654321',
    insurer: 'XYZ Insurance',
    policyId: 'POL32198',
    dateOfAccident: '2024-09-10',
    mediaUrl:
      'https://images.pexels.com/photos/3368844/pexels-photo-3368844.jpeg?auto=compress&cs=tinysrgb&w=600',
    vin: '1234',
    model: 'Toyota',
    yearOfManaufacture: '2023',
    engineCapacity: '2L',
    registrationNo: 'UBH 203H',
  },
  {
    id: 4,
    location: 'SAGAZI  B, MEERU, NABITANGA, SSEMBABULE',
    description:
      'Vehicle skidded on a wet road and crashed into a roadside barrier',
    severity: 'moderate',
    status: 'closed',
    claimId: 'CLM112233',
    insurer: '123 Insurance',
    policyId: 'POL77654',
    dateOfAccident: '2024-09-05',
    mediaUrl:
      'https://images.pexels.com/photos/48125/firefighter-extinguish-fire-extinction-48125.jpeg?auto=compress&cs=tinysrgb&w=600',
    vin: '1234',
    model: 'Toyota',
    yearOfManaufacture: '2023',
    engineCapacity: '2L',
    registrationNo: 'UBH 203H',
  },
  {
    id: 5,
    location: 'LUBIRI, KIBUYE II, MAKINDYE DIVISION, KAMPALA',
    description: 'Single vehicle accident due to driver fatigue',
    severity: 'minor',
    status: 'pending',
    claimId: null,
    insurer: null,
    policyId: null,
    dateOfAccident: '2024-09-01',
    mediaUrl:
      'https://images.pexels.com/photos/5351111/pexels-photo-5351111.jpeg?auto=compress&cs=tinysrgb&w=600',
    vin: '1234',
    model: 'Toyota',
    yearOfManaufacture: '2023',
    engineCapacity: '2L',
    registrationNo: 'UBH 203H',
  },
];

export interface accidentOverviewChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  marker: ApexMarkers;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl:'./dashboard.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppDashboardComponent implements OnInit{
  @ViewChild('chart') chart: ChartComponent = Object.create(null);

  public accidentOverviewChart!: Partial<accidentOverviewChart> | any;

  displayedColumns: string[] = [
    'id',
    'location',
    'description',
    'severity',
    'status',
    'dateOfAccident',
  ];
  dataSource = ACCIDENT_DATA;

  constructor(private router: Router) {
    // Accident overview chart
    this.accidentOverviewChart = {
      series: [
        {
          name: 'Accident Severity',
          data: [10, 15, 25, 5],
          color: '#FF5733',
        },
        {
          name: 'Casualties',
          data: [2, 1, 0, 5],
          color: '#FFC300',
        },
      ],

      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      plotOptions: {
        bar: { horizontal: false, columnWidth: '35%', borderRadius: [4] },
      },
      chart: {
        type: 'bar',
        height: 390,
        offsetX: -15,
        toolbar: { show: true },
        foreColor: '#adb0bb',
        fontFamily: 'inherit',
        sparkline: { enabled: false },
      },
      dataLabels: { enabled: false },
      markers: { size: 0 },
      legend: { show: false },
      xaxis: {
        type: 'category',
        categories: [
          'High Severity',
          'Medium Severity',
          'Low Severity',
          'Critical Severity',
        ],
        labels: {
          style: { cssClass: 'grey--text lighten-2--text fill-color' },
        },
      },
      yaxis: {
        show: true,
        min: 0,
        max: 30,
        tickAmount: 4,
        labels: {
          style: {
            cssClass: 'grey--text lighten-2--text fill-color',
          },
        },
      },
      stroke: {
        show: true,
        width: 3,
        lineCap: 'butt',
        colors: ['transparent'],
      },
      tooltip: { theme: 'light' },

      responsive: [
        {
          breakpoint: 600,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 3,
              },
            },
          },
        },
      ],
    };
  }
  role = localStorage.getItem("role")?.replace(/"/g, '');
  ngOnInit() {
console.log(this.role?.replace(/"/g, ''))
  }

  viewDetails(report: AccidentReport) {
    this.router.navigate(['/report-detail', report.id]);
  }
}
