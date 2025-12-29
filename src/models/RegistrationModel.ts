import { VisitorInfo, RegistrationStatus } from '../types';

export class RegistrationModel {
  private static readonly STORAGE_KEY = 'military_registrations';

  static getAllRegistrations(): VisitorInfo[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting registrations:', error);
      return [];
    }
  }

  static saveRegistrations(registrations: VisitorInfo[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(registrations));
    } catch (error) {
      console.error('Error saving registrations:', error);
    }
  }

  static addRegistration(registrationData: Omit<VisitorInfo, 'id' | 'status' | 'createdAt'>): VisitorInfo {
    const registrations = this.getAllRegistrations();
    const newRegistration: VisitorInfo = {
      ...registrationData,
      id: this.generateId(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    registrations.unshift(newRegistration); // Add to beginning
    this.saveRegistrations(registrations);
    return newRegistration;
  }

  static updateRegistrationStatus(id: string, status: RegistrationStatus): boolean {
    const registrations = this.getAllRegistrations();
    const index = registrations.findIndex(reg => reg.id === id);

    if (index === -1) return false;

    registrations[index] = { ...registrations[index], status };
    this.saveRegistrations(registrations);
    return true;
  }

  static getRegistrationById(id: string): VisitorInfo | undefined {
    const registrations = this.getAllRegistrations();
    return registrations.find(reg => reg.id === id);
  }

  static getRegistrationsByStatus(status: RegistrationStatus): VisitorInfo[] {
    const registrations = this.getAllRegistrations();
    return registrations.filter(reg => reg.status === status);
  }

  static getPendingRegistrations(): VisitorInfo[] {
    return this.getRegistrationsByStatus('pending');
  }

  static getApprovedRegistrations(): VisitorInfo[] {
    return this.getRegistrationsByStatus('approved');
  }

  static getRejectedRegistrations(): VisitorInfo[] {
    return this.getRegistrationsByStatus('rejected');
  }

  static searchRegistrations(query: string): VisitorInfo[] {
    const registrations = this.getAllRegistrations();
    const lowercaseQuery = query.toLowerCase();

    return registrations.filter(reg =>
      reg.fullName.toLowerCase().includes(lowercaseQuery) ||
      reg.soldierName.toLowerCase().includes(lowercaseQuery) ||
      reg.soldierUnit.toLowerCase().includes(lowercaseQuery) ||
      reg.phoneNumber.includes(query) ||
      reg.idNumber.includes(query)
    );
  }

  static getRegistrationStats(): { pending: number; approved: number; rejected: number; total: number } {
    const registrations = this.getAllRegistrations();
    return {
      pending: registrations.filter(r => r.status === 'pending').length,
      approved: registrations.filter(r => r.status === 'approved').length,
      rejected: registrations.filter(r => r.status === 'rejected').length,
      total: registrations.length
    };
  }

  private static generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
