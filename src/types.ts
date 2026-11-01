export type ViewMode = 'home' | 'portal' | 'contact';

export interface ClientProfile {
  id: string;
  entityName: string;
  domicile: string;
  fundVehicle: string;
  committedCapital: string;
  distributedYield: string;
  portfolioCompanies: {
    name: string;
    deviceType: string;
    markets: string;
    investmentType: string;
    status: string;
  }[];
  quarterlyStatements: {
    id: string;
    period: string;
    date: string;
    fileSize: string;
  }[];
}

export interface ContactSubmission {
  fullName: string;
  entityName: string;
  email: string;
  investorType: string;
  message: string;
}
