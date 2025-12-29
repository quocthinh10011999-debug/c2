export class ValidationService {
  // Phone number validation
  static isValidPhoneNumber(phone: string): boolean {
    // Vietnamese phone number patterns
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  }

  // ID number validation (basic)
  static isValidIdNumber(idNumber: string): boolean {
    // Basic validation for Vietnamese ID numbers
    return idNumber.length >= 9 && idNumber.length <= 12 && /^\d+$/.test(idNumber);
  }

  // Email validation
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Date validation
  static isValidDate(dateString: string): boolean {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date.getTime());
  }

  static isFutureDate(dateString: string): boolean {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  }

  // Text validation
  static isNotEmpty(text: string): boolean {
    return text && text.trim().length > 0;
  }

  static hasMinimumLength(text: string, minLength: number): boolean {
    return text && text.trim().length >= minLength;
  }

  static hasMaximumLength(text: string, maxLength: number): boolean {
    return text && text.trim().length <= maxLength;
  }

  // Username validation
  static isValidUsername(username: string): boolean {
    // Alphanumeric, underscore, dash, 3-20 characters
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    return usernameRegex.test(username);
  }

  // Password validation
  static isValidPassword(password: string): boolean {
    // At least 6 characters
    return password && password.length >= 6;
  }

  // Comprehensive validation results
  static validateField(value: string, rules: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: string) => boolean;
  }): { isValid: boolean; error?: string } {
    // Required check
    if (rules.required && !this.isNotEmpty(value)) {
      return { isValid: false, error: 'Trường này là bắt buộc' };
    }

    // Skip other validations if empty and not required
    if (!value && !rules.required) {
      return { isValid: true };
    }

    // Min length check
    if (rules.minLength && !this.hasMinimumLength(value, rules.minLength)) {
      return { isValid: false, error: `Phải có ít nhất ${rules.minLength} ký tự` };
    }

    // Max length check
    if (rules.maxLength && !this.hasMaximumLength(value, rules.maxLength)) {
      return { isValid: false, error: `Không được vượt quá ${rules.maxLength} ký tự` };
    }

    // Pattern check
    if (rules.pattern && !rules.pattern.test(value)) {
      return { isValid: false, error: 'Định dạng không hợp lệ' };
    }

    // Custom validation
    if (rules.custom && !rules.custom(value)) {
      return { isValid: false, error: 'Giá trị không hợp lệ' };
    }

    return { isValid: true };
  }
}
