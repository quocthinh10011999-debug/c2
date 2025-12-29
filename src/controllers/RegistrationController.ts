import { VisitorInfo, RegistrationStatus } from '../types';
import { RegistrationModel } from '../models/RegistrationModel';

export class RegistrationController {
  static async submitRegistration(formData: {
    fullName: string;
    idNumber: string;
    phoneNumber: string;
    relationship: string;
    soldierName: string;
    soldierUnit: string;
    visitDate: string;
  }): Promise<{ success: boolean; registration?: VisitorInfo; error?: string }> {
    try {
      // Validate input
      const validation = this.validateRegistrationData(formData);
      if (!validation.valid) {
        return { success: false, error: validation.error };
      }

      // Create registration
      const registration = RegistrationModel.addRegistration(formData);
      return { success: true, registration };
    } catch (error) {
      console.error('Registration submission error:', error);
      return { success: false, error: 'Có lỗi xảy ra khi gửi đăng ký' };
    }
  }

  static async updateRegistrationStatus(registrationId: string, status: RegistrationStatus): Promise<{ success: boolean; error?: string }> {
    try {
      const success = RegistrationModel.updateRegistrationStatus(registrationId, status);
      if (!success) {
        return { success: false, error: 'Không tìm thấy đăng ký cần cập nhật' };
      }
      return { success: true };
    } catch (error) {
      console.error('Update registration status error:', error);
      return { success: false, error: 'Có lỗi xảy ra khi cập nhật trạng thái' };
    }
  }

  static getAllRegistrations(): VisitorInfo[] {
    return RegistrationModel.getAllRegistrations();
  }

  static getPendingRegistrations(): VisitorInfo[] {
    return RegistrationModel.getPendingRegistrations();
  }

  static getApprovedRegistrations(): VisitorInfo[] {
    return RegistrationModel.getApprovedRegistrations();
  }

  static getRejectedRegistrations(): VisitorInfo[] {
    return RegistrationModel.getRejectedRegistrations();
  }

  static searchRegistrations(query: string): VisitorInfo[] {
    return RegistrationModel.searchRegistrations(query);
  }

  static getRegistrationStats(): { pending: number; approved: number; rejected: number; total: number } {
    return RegistrationModel.getRegistrationStats();
  }

  private static validateRegistrationData(data: any): { valid: boolean; error?: string } {
    if (!data.fullName?.trim()) {
      return { valid: false, error: 'Vui lòng nhập họ và tên' };
    }

    if (!data.idNumber?.trim()) {
      return { valid: false, error: 'Vui lòng nhập số CMND/CCCD' };
    }

    if (!data.phoneNumber?.trim()) {
      return { valid: false, error: 'Vui lòng nhập số điện thoại' };
    }

    if (!data.relationship?.trim()) {
      return { valid: false, error: 'Vui lòng nhập mối quan hệ' };
    }

    if (!data.soldierName?.trim()) {
      return { valid: false, error: 'Vui lòng nhập tên quân nhân' };
    }

    if (!data.soldierUnit?.trim()) {
      return { valid: false, error: 'Vui lòng nhập đơn vị quân nhân' };
    }

    if (!data.visitDate) {
      return { valid: false, error: 'Vui lòng chọn ngày thăm' };
    }

    // Validate phone number format (basic)
    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(data.phoneNumber)) {
      return { valid: false, error: 'Số điện thoại không hợp lệ' };
    }

    // Validate ID number format (basic)
    if (data.idNumber.length < 9 || data.idNumber.length > 12) {
      return { valid: false, error: 'Số CMND/CCCD không hợp lệ' };
    }

    // Validate visit date is not in the past
    const visitDate = new Date(data.visitDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (visitDate < today) {
      return { valid: false, error: 'Ngày thăm không được là ngày trong quá khứ' };
    }

    return { valid: true };
  }
}
