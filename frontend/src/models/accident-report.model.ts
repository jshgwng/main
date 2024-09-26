export interface AccidentReport {
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    id: number;
    location: string;
    vin: string;
    model: string;
    yearOfManufacture: string;
    engineCapacity: string;
    registrationNo: string;
    description: string;
    severity: string;
    status: string;
    dateOfAccident: Date | null;
    scenePhotographs: string;
    motorInsuranceStickerImg: string;
    insurer: string;
    claimRefNo: string;
    policyRefNo: string;
    nearestPolicyStation: string;
    fatalities: number;
    deleted: boolean;
  }
  