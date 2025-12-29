import React, { useState, useEffect } from 'react';
import { AdminUser } from '../types';

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<(AdminUser & { password?: string })[]>([]);
  const [newUser, setNewUser] = useState({ username: '', fullName: '', role: 'staff' as const, password: '' });

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('military_admins') || '[]'));
  }, []);

  const addUser = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = [...users, { ...newUser, id: Math.random().toString(36).substr(2, 9) }];
    setUsers(updated);
    localStorage.setItem('military_admins', JSON.stringify(updated));
    setNewUser({ username: '', fullName: '', role: 'staff', password: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-white p-8 content-card">
        <h1 className="text-xl font-bold mb-8 text-mod-red uppercase border-b border-slate-100 pb-4">Quản lý danh sách cán bộ vận hành</h1>
        <form onSubmit={addUser} className="bg-slate-50 p-6 rounded border border-slate-200 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-full font-bold text-xs uppercase text-slate-400 mb-2">Thêm tài khoản cán bộ mới</div>
          <input required placeholder="Họ và tên cán bộ" value={newUser.fullName} onChange={e => setNewUser({...newUser, fullName: e.target.value})} className="border p-2.5 rounded text-sm outline-none focus:border-mod-red" />
          <input required placeholder="Tên đăng nhập" value={newUser.username} onChange={e => setNewUser({...newUser, username: e.target.value})} className="border p-2.5 rounded text-sm outline-none focus:border-mod-red" />
          <input required type="password" placeholder="Mật khẩu khởi tạo" value={newUser.password} onChange={e => setNewUser({...newUser, password: e.target.value})} className="border p-2.5 rounded text-sm outline-none focus:border-mod-red" />
          <select value={newUser.role} onChange={e => setNewUser({...newUser, role: e.target.value as any})} className="border p-2.5 rounded text-sm bg-white outline-none focus:border-mod-red">
            <option value="staff">Nhân viên trực ban</option>
            <option value="superadmin">Quản trị viên (Chỉ huy)</option>
          </select>
          <button type="submit" className="sm:col-span-2 bg-mod-red text-white font-bold py-2.5 rounded uppercase text-[12px] shadow hover:bg-red-800 transition-colors">Khởi tạo tài khoản</button>
        </form>
        <div className="space-y-3">
          {users.map(u => (
            <div key={u.id} className="bg-white p-4 rounded border border-slate-100 flex justify-between items-center shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 uppercase">{u.fullName.charAt(0)}</div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">{u.fullName}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">@{u.username} • {u.role === 'superadmin' ? 'CHỈ HUY' : 'TRỰC BAN'}</div>
                </div>
              </div>
              <button onClick={() => { const upd = users.filter(x => x.id !== u.id); setUsers(upd); localStorage.setItem('military_admins', JSON.stringify(upd)); }} className="text-slate-300 hover:text-red-600 p-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;

