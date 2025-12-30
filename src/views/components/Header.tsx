import React, { useState, useEffect } from 'react';
import { Page, AdminUser } from '../../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
  userRole?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, isLoggedIn, onLogout, userRole }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = isLoggedIn
    ? [
        { id: Page.ADMIN_DASHBOARD, label: 'QUẢN LÝ ĐĂNG KÝ' },
        ...(userRole === 'superadmin' ? [{ id: Page.USER_MANAGEMENT, label: 'QUẢN TRỊ TÀI KHOẢN' }] : []),
      ]
    : [
        { id: Page.HOME, label: 'TRANG CHỦ' },
        { id: Page.REGULATIONS, label: 'QUY ĐỊNH THĂM' },
        { id: Page.TRADITION, label: 'TRUYỀN THỐNG' },
        { id: Page.REGISTRATION, label: 'ĐĂNG KÝ TRỰC TUYẾN' },
        { id: Page.FEEDBACK, label: 'GÓP Ý - LIÊN HỆ' },
      ];

  return (
    <header className="w-full">
      {/* Top Utility Bar */}
      <div className="bg-slate-100 border-b border-slate-200 py-1 text-[11px] text-slate-600">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="font-medium">
            {now.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} | {now.toLocaleTimeString('vi-VN')}
          </div>
          <div className="flex gap-4">
       <a href="#" className="hover:text-mod-red">Liên hệ: 0123.xxxx.456</a>
     
          </div>
        </div>
      </div>

      {/* Main Identity Area */}
      <div className="bg-white py-4 border-b-2 border-mod-red">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-4">
             <div className="w-16 h-16 bg-mod-red rounded-full flex items-center justify-center text-mod-gold shadow-md">
             <div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
  <img
    src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-1/476484585_122124106886619420_6455411769556515810_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeGhlPuQJnL0IGgILyozmA5mtDVkrRZ0PDy0NWStFnQ8PGdH88b9IRDTxi_CQkkedWziHMPaHLGae-XhrdIqWyQe&_nc_ohc=YzEYZlRhLGcQ7kNvwHIajTW&_nc_oc=Adm0sLdgWYNYMQQa24Ko864V6rpNvTbvyC4AGK8E7CkE6KwEtPjLJDFtNSpbgZMDbK8&_nc_zt=24&_nc_ht=scontent.fhan5-8.fna&_nc_gid=sqM-RL_h4SCg0r-orxCtKA&oh=00_AfmTiAMFUbs7TvJPXI-Yqpg3mrVcES2nksryvnJdGI4sSg&oe=69599E23"
    alt="Logo"
    className="w-full h-full object-cover"
  />
</div>
             </div>
             <div className="text-center md:text-left">
                <h2 className="text-mod-red font-bold text-lg md:text-xl uppercase leading-tight tracking-tight">CỔNG THÔNG TIN ĐIỆN TỬ</h2>
                <h1 className="text-mod-red font-extrabold text-xl md:text-2xl uppercase leading-tight">TIỂU ĐOÀN 15 SPG-9</h1>
             </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-mod-red shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-11">
            <div className="flex overflow-x-auto no-scrollbar">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 h-11 text-[13px] font-bold transition-all whitespace-nowrap flex items-center border-r border-white/10 ${
                    currentPage === item.id
                      ? 'bg-white text-mod-red'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {isLoggedIn ? (
              <button
                onClick={onLogout}
                className="text-white text-[12px] font-bold px-4 hover:bg-white/10 h-11 flex items-center"
              >
                ĐĂNG XUẤT
              </button>
            ) : (
              <button
                onClick={() => onNavigate(Page.ADMIN_LOGIN)}
                className="text-mod-gold text-[12px] font-bold px-4 hover:bg-white/10 h-11 flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                HÀNH CHÍNH
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

