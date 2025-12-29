import React, { useState, useEffect } from 'react';
import { VisitorInfo, FeedbackMessage, RegistrationStatus } from '../types';

const AdminDashboard: React.FC = () => {
  const [registrations, setRegistrations] = useState<VisitorInfo[]>([]);
  const [feedbacks, setFeedbacks] = useState<FeedbackMessage[]>([]);
  const [activeTab, setActiveTab] = useState<'reg' | 'feedback'>('reg');

  useEffect(() => {
    setRegistrations(JSON.parse(localStorage.getItem('military_registrations') || '[]'));
    setFeedbacks(JSON.parse(localStorage.getItem('military_feedbacks') || '[]'));
  }, []);

  const updateStatus = (id: string, status: RegistrationStatus) => {
    const updated = registrations.map(reg => reg.id === id ? { ...reg, status } : reg);
    setRegistrations(updated);
    localStorage.setItem('military_registrations', JSON.stringify(updated));
  };

  const deleteFeedback = (id: string) => {
    if (confirm('Xóa tin nhắn này khỏi hệ thống?')) {
      const updated = feedbacks.filter(f => f.id !== id);
      setFeedbacks(updated);
      localStorage.setItem('military_feedbacks', JSON.stringify(updated));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-white content-card p-6">
        <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
          <div className="flex gap-6">
            <button onClick={() => setActiveTab('reg')} className={`pb-4 px-2 font-bold text-xs uppercase tracking-widest transition-all ${activeTab === 'reg' ? 'border-b-4 border-mod-red text-mod-red' : 'text-slate-400'}`}>Quản lý đăng ký</button>
            <button onClick={() => setActiveTab('feedback')} className={`pb-4 px-2 font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'feedback' ? 'border-b-4 border-mod-red text-mod-red' : 'text-slate-400'}`}>Góp ý & Tin nhắn {feedbacks.length > 0 && <span className="bg-mod-red text-white text-[9px] px-1.5 py-0.5 rounded-full">{feedbacks.length}</span>}</button>
          </div>
        </div>

        {activeTab === 'reg' ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-y border-slate-200">
                  <th className="px-6 py-3 font-bold text-slate-700 uppercase text-[11px]">Thân nhân</th>
                  <th className="px-6 py-3 font-bold text-slate-700 uppercase text-[11px]">Chiến sĩ nhận thăm</th>
                  <th className="px-6 py-3 font-bold text-slate-700 uppercase text-[11px]">Lịch hẹn</th>
                  <th className="px-6 py-3 font-bold text-slate-700 uppercase text-[11px]">Trạng thái</th>
                  <th className="px-6 py-3 font-bold text-slate-700 uppercase text-[11px] text-right">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {registrations.length === 0 ? (
                  <tr><td colSpan={5} className="py-20 text-center text-slate-400 italic">Hiện không có lượt đăng ký mới nào trong danh sách</td></tr>
                ) : registrations.map(reg => (
                  <tr key={reg.id} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4">
                       <div className="font-bold text-slate-900">{reg.fullName}</div>
                       <div className="text-[11px] text-slate-500">SĐT: {reg.phoneNumber} | CCCD: {reg.idNumber}</div>
                    </td>
                    <td className="px-6 py-4">
                       <div className="font-medium">{reg.soldierName}</div>
                       <div className="text-[11px] text-slate-500">{reg.soldierUnit}</div>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium">{new Date(reg.visitDate).toLocaleDateString('vi-VN')}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${reg.status === 'approved' ? 'bg-green-100 text-green-700' : reg.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {reg.status === 'approved' ? 'Đã duyệt' : reg.status === 'rejected' ? 'Từ chối' : 'Chờ duyệt'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {reg.status === 'pending' && (
                        <div className="flex justify-end gap-3">
                          <button onClick={() => updateStatus(reg.id, 'approved')} className="text-green-600 font-bold text-[11px] uppercase hover:underline">Phê duyệt</button>
                          <button onClick={() => updateStatus(reg.id, 'rejected')} className="text-red-600 font-bold text-[11px] uppercase hover:underline">Hủy bỏ</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedbacks.length === 0 ? (
              <div className="col-span-full py-20 text-center text-slate-400 italic">Hòm thư điện tử trống</div>
            ) : feedbacks.map(f => (
              <div key={f.id} className="bg-slate-50 p-6 rounded border border-slate-200 relative group">
                <button onClick={() => deleteFeedback(f.id)} className="absolute top-3 right-3 text-slate-300 hover:text-red-600 opacity-0 group-hover:opacity-100"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                <div className="text-[10px] font-bold text-mod-red mb-2">{new Date(f.createdAt).toLocaleString('vi-VN')}</div>
                <h4 className="font-bold text-slate-800 mb-3 text-sm border-b border-slate-200 pb-2">{f.title}</h4>
                <p className="text-xs text-slate-600 line-clamp-4 leading-relaxed mb-4">{f.content}</p>
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth={2} /></svg>
                   {f.phoneNumber}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

