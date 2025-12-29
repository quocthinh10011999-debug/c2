import React, { useState, useEffect } from 'react';
import { StoredAdminUser } from '../../types';
import { UserController } from '../../controllers/UserController';
import UserManagement from '../components/UserManagement';

const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<StoredAdminUser[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    setUsers(UserController.getAllUsers());
  };

  const handleAddUser = async (userData: { username: string; fullName: string; role: 'superadmin' | 'staff'; password: string }) => {
    const result = await UserController.addUser(userData);
    if (result.success) {
      loadUsers();
      alert('Thêm tài khoản thành công');
    } else {
      alert(result.error || 'Thêm tài khoản thất bại');
    }
  };

  const handleRemoveUser = async (userId: string) => {
    const result = await UserController.removeUser(userId);
    if (result.success) {
      loadUsers();
      alert('Xóa tài khoản thành công');
    } else {
      alert(result.error || 'Xóa tài khoản thất bại');
    }
  };

  return (
    <UserManagement
      users={users}
      onAddUser={handleAddUser}
      onRemoveUser={handleRemoveUser}
    />
  );
};

export default UserManagementPage;
