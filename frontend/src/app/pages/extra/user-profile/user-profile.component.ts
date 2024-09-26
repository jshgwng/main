import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 234 567 890',
    address: '123 Main St, Springfield, USA',
    profilePhoto: '/assets/images/profile/user-1.jpg',
    dob: '1990-01-01', 
    gender: 'Male',
    occupation: 'Software Engineer',
    maritalStatus: 'Single',
    insurance: {
      provider: 'HealthFirst Insurance',
      policyNumber: 'HF123456789',
      startDate: '2024-06-24',
      expirationDate: '2025-06-30',
      type: 'Health',
      status: 'ACTIVE',
      coverageAmount: '$1,000,000',
      premium: '$150,000',
      providerContact: '+1 555 123 4567'
    },
    car: {
      registrationNumber: 'ABC 001A',
      make: 'TOYOTA',
      model: 'LC79',
      year: 2003
    },
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Sister',
      phone: '+1 234 567 8910'
    }
  };
}
