import React, { useState } from 'react';
import { FeedbackMessage } from '../../types';

const Feedback: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('military_feedbacks') || '[]');
    const newMessage: FeedbackMessage = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      content,
      phoneNumber,
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('military_feedbacks', JSON.stringify([newMessage, ...existing]));
    setSent(true);
    setTitle(''); setContent(''); setPhoneNumber('');
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-white p-8 content-card">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
           <div className="w-1 h-8 bg-mod-red"></div>
           <h1 className="text-2xl font-bold text-mod-red uppercase">Góp ý và Liên hệ riêng</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            <p className="text-sm text-slate-600 leading-relaxed italic border-l-4 border-slate-100 pl-4">
              Chúng tôi luôn coi trọng ý kiến đóng góp của thân nhân và nhân dân. Mọi thông tin phản hồi sẽ được Ban chỉ huy đơn vị trực tiếp xem xét và xử lý bảo mật.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {sent && <div className="bg-green-600 text-white p-3 rounded text-sm font-bold flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                THƯ CỦA ĐỒNG CHÍ ĐÃ ĐƯỢC GỬI THÀNH CÔNG!
              </div>}
              <input required placeholder="Tiêu đề thư" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2.5 border border-slate-200 rounded text-sm focus:border-mod-red outline-none" />
              <input required type="tel" placeholder="Số điện thoại cá nhân (để nhận phản hồi)" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="w-full p-2.5 border border-slate-200 rounded text-sm focus:border-mod-red outline-none" />
              <textarea required rows={8} placeholder="Nội dung ý kiến, thắc mắc hoặc kiến nghị..." value={content} onChange={e => setContent(e.target.value)} className="w-full p-2.5 border border-slate-200 rounded text-sm resize-none focus:border-mod-red outline-none" />
              <button type="submit" className="bg-mod-red text-white font-bold py-3 px-10 rounded hover:bg-red-800 transition-all uppercase text-sm shadow-md">Gửi ý kiến</button>
            </form>
          </div>

          <div className="space-y-6">
             <div className="bg-slate-50 p-6 border-t-4 border-mod-red">
                <h4 className="text-mod-red font-bold uppercase text-[11px] mb-4">Thông tin đường dây nóng</h4>
                <div className="space-y-4 text-xs">
                   <div className="flex gap-3">
                      <span className="text-mod-red">📞</span>
                      <div>
                        <p className="font-bold text-slate-800">Điện thoại trực ban:</p>
                        <p className="text-slate-600">0243.XXXX.456</p>
                      </div>
                   </div>
                   <div className="flex gap-3">
                      <span className="text-mod-red">📧</span>
                      <div>
                        <p className="font-bold text-slate-800">Email công vụ:</p>
                        <p className="text-slate-600">tieudoan15@gmail.com.vn</p>
                      </div>
                   </div>
                   <div className="flex gap-3">
                      <span className="text-mod-red">📍</span>
                      <div>
                        <p className="font-bold text-slate-800">Địa chỉ:</p>
                        <p className="text-slate-600">Đô Lương, Nghệ An</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="bg-white p-4 border border-slate-200">
                <p className="text-[10px] text-slate-400 font-medium">Lưu ý: Không gửi các thông tin bí mật quân sự, thông tin chưa được kiểm chứng qua cổng thông tin công cộng này.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

