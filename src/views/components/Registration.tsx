import React, { useState } from 'react';
import { VisitorInfo } from '../../types';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    phoneNumber: '',
    relationship: '',
    soldierName: '',
    soldierUnit: '',
    visitDate: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('military_registrations') || '[]');
    const newReg: VisitorInfo = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('military_registrations', JSON.stringify([newReg, ...existing]));
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="max-w-xl mx-auto py-24 px-4 text-center animate-fade-in">
      <div className="bg-white p-10 rounded shadow-2xl border-t-8 border-green-600">
        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-600">
           <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 uppercase">Gửi phiếu đăng ký thành công</h2>
        <p className="text-slate-600 mb-8 text-sm">Hệ thống đã ghi nhận thông tin của đồng chí/thân nhân. Phiếu đăng ký đang chờ xét duyệt. Vui lòng giữ liên lạc qua số điện thoại <b>{formData.phoneNumber}</b>.</p>
        <button onClick={() => setSubmitted(false)} className="w-full py-3 bg-mod-red text-white font-bold rounded hover:bg-red-800 transition-all uppercase text-sm tracking-widest shadow-lg">Trở lại trang chủ</button>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-white p-8 content-card">
        <div className="flex flex-col items-center mb-10">
           <h1 className="text-2xl font-bold text-mod-red uppercase text-center">Phiếu Đăng Ký Thăm Quân Nhân Trực Tuyến</h1>
           <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest italic">(Kèm theo quy trình quản lý hành chính nội bộ)</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 border-l-4 border-mod-red pl-3 uppercase text-xs">Phần 1: Thông tin người đến thăm</h3>
              <div className="space-y-3">
                <input required placeholder="Họ và tên người thăm" className="w-full p-2.5 border border-slate-200 rounded text-sm focus:border-mod-red outline-none" onChange={e => setFormData({...formData, fullName: e.target.value})} />
                <input required placeholder="Số CMND / Căn cước công dân" className="w-full p-2.5 border border-slate-200 rounded text-sm focus:border-mod-red outline-none" onChange={e => setFormData({...formData, idNumber: e.target.value})} />
                <input required placeholder="Số điện thoại liên lạc" type="tel" className="w-full p-2.5 border border-slate-200 rounded text-sm focus:border-mod-red outline-none" onChange={e => setFormData({...formData, phoneNumber: e.target.value})} />
                <input required placeholder="Mối quan hệ với quân nhân (VD: Cha, Mẹ, Vợ...)" className="w-full p-2.5 border border-slate-200 rounded text-sm focus:border-mod-red outline-none" onChange={e => setFormData({...formData, relationship: e.target.value})} />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 border-l-4 border-mod-red pl-3 uppercase text-xs">Phần 2: Thông tin quân nhân được thăm</h3>
              <div className="space-y-3">
                <input required placeholder="Họ và tên quân nhân" className="w-full p-2.5 border border-slate-200 rounded text-sm focus:border-mod-red outline-none" onChange={e => setFormData({...formData, soldierName: e.target.value})} />
                <input required placeholder="Đại đội / Tiểu đoàn / Đơn vị" className="w-full p-2.5 border border-slate-200 rounded text-sm focus:border-mod-red outline-none" onChange={e => setFormData({...formData, soldierUnit: e.target.value})} />
                <div>
                  <label className="text-[11px] text-slate-400 font-bold uppercase mb-1 block">Ngày dự kiến đến thăm</label>
                  <input required type="date" className="w-full p-2.5 border border-slate-200 rounded text-sm focus:border-mod-red outline-none" onChange={e => setFormData({...formData, visitDate: e.target.value})} />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-100 flex flex-col items-center">
             <div className="flex items-start gap-2 mb-6 max-w-2xl">
                <input type="checkbox" required className="mt-1" />
                <p className="text-[11px] text-slate-500 italic">Tôi xin cam đoan các thông tin khai báo trên là hoàn toàn chính xác và xin chịu mọi trách nhiệm trước pháp luật cũng như quy định của đơn vị về tính xác thực của thông tin này.</p>
             </div>
             <button type="submit" className="w-full md:w-auto bg-mod-red text-white font-bold py-3 px-16 rounded hover:bg-red-800 transition-all shadow-xl uppercase text-sm tracking-widest">Gửi đăng ký xét duyệt</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;

