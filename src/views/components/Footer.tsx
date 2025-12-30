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
              <img
                src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-1/476484585_122124106886619420_6455411769556515810_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeGhlPuQJnL0IGgILyozmA5mtDVkrRZ0PDy0NWStFnQ8PGdH88b9IRDTxi_CQkkedWziHMPaHLGae-XhrdIqWyQe&_nc_ohc=YzEYZlRhLGcQ7kNvwHIajTW&_nc_oc=Adm0sLdgWYNYMQQa24Ko864V6rpNvTbvyC4AGK8E7CkE6KwEtPjLJDFtNSpbgZMDbK8&_nc_zt=24&_nc_ht=scontent.fhan5-8.fna&_nc_gid=sqM-RL_h4SCg0r-orxCtKA&oh=00_AfmTiAMFUbs7TvJPXI-Yqpg3mrVcES2nksryvnJdGI4sSg&oe=69599E23"
                alt="Logo Tiểu đoàn 15"
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-lg"
              />
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

