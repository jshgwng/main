export interface LoginResponse {
    token: string;
    userResponse: {
      id: number;
      fullName: string;
      phoneNumber: string | null;
      email: string;
      role: string;
    };
  }
  