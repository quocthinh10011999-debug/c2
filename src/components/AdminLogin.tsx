import React, { useState } from 'react';
import { AdminUser } from '../types';

interface AdminLoginProps {
  onLogin: (user: AdminUser) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const users: (AdminUser & { password?: string })[] = JSON.parse(localStorage.getItem('military_admins') || '[]');
    if (users.length === 0 && username === 'admin' && password === '123456') {
      onLogin({ id: '1', username: 'admin', role: 'superadmin', fullName: 'Quản trị viên' });
      return;
    }
    const found = users.find(u => u.username === username && (u.password === password || (!u.password && password === '123456')));
    if (found) onLogin(found); else alert('Tên đăng nhập hoặc mật khẩu không đúng');
  };

  return (
    <div className="max-w-md mx-auto py-24 px-4">
      <div className="bg-white p-10 rounded shadow-2xl content-card">
        <div className="text-center mb-8">
           <div className="w-16 h-16 bg-mod-red rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
           </div>
           <h2 className="text-xl font-bold text-mod-red uppercase">Đăng nhập cổng hành chính</h2>
           <p className="text-[10px] text-slate-400 font-bold mt-1 tracking-widest uppercase">Hệ thống quản lý nội bộ</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input required placeholder="Tên đăng nhập" className="w-full p-3 border border-slate-200 rounded text-sm focus:border-mod-red outline-none" onChange={e => setUsername(e.target.value)} />
          <input required type="password" placeholder="Mật khẩu" className="w-full p-3 border border-slate-200 rounded text-sm focus:border-mod-red outline-none" onChange={e => setPassword(e.target.value)} />
          <button type="submit" className="w-full bg-mod-red text-white font-bold py-3 rounded hover:bg-red-800 transition-all uppercase text-sm tracking-widest shadow-md">Xác thực truy cập</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

