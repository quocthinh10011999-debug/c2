// --- TYPES ---
export enum Page {
  HOME = 'home',
  REGULATIONS = 'regulations',
  TRADITION = 'tradition',
  REGISTRATION = 'registration',
  FEEDBACK = 'feedback',
  ADMIN_LOGIN = 'admin_login',
  ADMIN_DASHBOARD = 'admin_dashboard',
  USER_MANAGEMENT = 'user_management'
}

export type RegistrationStatus = 'pending' | 'approved' | 'rejected';

export interface VisitorInfo {
  id: string;
  fullName: string;
  idNumber: string;
  phoneNumber: string;
  relationship: string;
  soldierName: string;
  soldierUnit: string;
  visitDate: string;
  status: RegistrationStatus;
  createdAt: string;
}

export interface FeedbackMessage {
  id: string;
  title: string;
  content: string;
  phoneNumber: string;
  createdAt: string;
}

export interface AdminUser {
  id: string;
  username: string;
  role: 'superadmin' | 'staff';
  fullName: string;
}

export interface StoredAdminUser extends AdminUser {
  password?: string;
}

