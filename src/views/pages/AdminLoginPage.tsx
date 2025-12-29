import React from 'react';
import { AdminUser } from '../../types';
import { UserController } from '../../controllers/UserController';
import AdminLogin from '../components/AdminLogin';

interface AdminLoginPageProps {
  onLogin: (user: AdminUser) => void;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onLogin }) => {
  const handleLogin = async (username: string, password: string) => {
    const result = await UserController.login(username, password);
    if (result.success && result.user) {
      onLogin(result.user);
    } else {
      alert(result.error || 'Đăng nhập thất bại');
    }
  };

  return <AdminLogin onLogin={handleLogin} />;
};

export default AdminLoginPage;
