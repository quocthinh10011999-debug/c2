import React, { useState } from 'react';
import { RegistrationController } from '../../controllers/RegistrationController';
import Registration from '../components/Registration';

const RegistrationPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegistrationSubmit = async (formData: {
    fullName: string;
    idNumber: string;
    phoneNumber: string;
    relationship: string;
    soldierName: string;
    soldierUnit: string;
    visitDate: string;
  }) => {
    setIsSubmitting(true);
    try {
      const result = await RegistrationController.submitRegistration(formData);
      if (result.success) {
        alert('Đăng ký thành công! Hệ thống đã ghi nhận thông tin của bạn.');
        // Reset form or navigate
      } else {
        alert(result.error || 'Có lỗi xảy ra khi đăng ký');
      }
    } catch (error) {
      alert('Có lỗi xảy ra khi gửi đăng ký');
    } finally {
      setIsSubmitting(false);
    }
  };

  return <Registration />;
};

export default RegistrationPage;
