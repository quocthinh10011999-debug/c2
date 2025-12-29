import React from 'react';

interface FooterProps {
  onAdminClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => (
  <footer className="bg-slate-900 text-slate-400 py-16 border-t-4 border-mod-red">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2 space-y-4">
           <div className="flex items-center gap-3 text-white mb-6">
              <div className="bg-mod-red p-1 rounded-full"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg></div>
              <span className="font-bold text-lg uppercase tracking-widest">TIỂU ĐOÀN 15</span>
           </div>
           <p className="text-[12px] leading-relaxed">
            Tiểu đoàn 15 - Sư đoàn 324.<br/>
             Chịu trách nhiệm nội dung: Tiểu đoàn 15.<br/>
           </p>
        </div>
        <div>
          <h4 className="text-white font-bold text-[11px] uppercase mb-4 tracking-wider">Thông tin liên hệ</h4>
          <ul className="text-[11px] space-y-2">
            <li>Địa chỉ: Đô Lương, Nghệ An</li>
            <li>Điện thoại: 0123.XXXX.456</li>
            <li>Thư điện tử: tieudoan15@.gov.vn</li>
          </ul>
        </div>
        <div>
           <h4 className="text-white font-bold text-[11px] uppercase mb-4 tracking-wider">Cổng thành viên</h4>
           <button onClick={onAdminClick} className="text-[10px] text-mod-gold hover:underline font-bold uppercase tracking-widest">Đăng nhập hệ thống nội bộ</button>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase font-medium tracking-widest">QUÂN ĐỘI NHÂN DÂN VIỆT NAM - VÌ NHÂN DÂN QUÊN MÌNH, VÌ NHÂN DÂN PHỤC VỤ</p>
      </div>
    </div>
  </footer>
);

export default Footer;

