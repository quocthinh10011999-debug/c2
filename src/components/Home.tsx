import React from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => (
  <div className="max-w-7xl mx-auto px-4 py-6 animate-fade-in">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Featured News / Hero */}
      <div className="lg:col-span-2 space-y-6">
        <div className="relative h-[400px] overflow-hidden rounded shadow-lg group">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcVFzX9dmPZSOMV6Ls5rKQd9dv3BEYqJQarg&s" alt="Official" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
            <span className="bg-mod-red text-white text-[10px] font-bold px-2 py-1 mb-3 self-start">TIN NỔI BẬT</span>
            <h2 className="text-white text-2xl font-bold mb-2">Đơn vị Tiểu đoàn 15 hoàn thành xuất sắc nhiệm vụ huấn luyện sẵn sàng chiến đấu năm 2025</h2>
            <p className="text-slate-300 text-sm line-clamp-2">Phát huy truyền thống vẻ vang, cán bộ chiến sĩ đơn vị luôn nỗ lực vượt khó, làm chủ vũ khí trang bị kỹ thuật hiện đại...</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="content-card p-4">
             <h3 className="text-mod-red font-bold border-b border-slate-200 pb-2 mb-3 flex items-center gap-2 uppercase text-sm">
                <span className="w-2 h-2 bg-mod-red"></span> Tin tức đơn vị
             </h3>
             <ul className="space-y-3">
               {[
                 "Hội nghị tổng kết công tác Đảng, công tác chính trị quý IV",
                 "Giao lưu hậu phương quân đội thắm tình quân dân",
                 "Tăng cường công tác giáo dục chính trị cho chiến sĩ nhập ngũ năm 2025. Đẩy nhanh công tác chuẩn bị tiếp nhận huấn luyện chiến sĩ nhập ngũ năm 2026 "
               ].map((item, i) => (
                 <li key={i} className="text-sm border-b border-slate-100 pb-2 last:border-0 hover:text-mod-red cursor-pointer flex gap-2">
                   <span className="text-slate-400 font-mono">0{i+1}.</span>
                   {item}
                 </li>
               ))}
             </ul>
          </div>
          <div className="content-card p-4">
             <h3 className="text-mod-red font-bold border-b border-slate-200 pb-2 mb-3 flex items-center gap-2 uppercase text-sm">
                <span className="w-2 h-2 bg-mod-red"></span> Thông báo mới
             </h3>
             <ul className="space-y-3">
               {[
                 "Thông báo về việc thay đổi khung giờ thăm quân nhân ngày Lễ",
                 "Danh sách các vật dụng bị hạn chế mang vào đơn vị",
                 "Kế hoạch tổ chức hoạt động Tết nguyên đán năm 2026"
               ].map((item, i) => (
                 <li key={i} className="text-sm border-b border-slate-100 pb-2 last:border-0 hover:text-mod-red cursor-pointer flex gap-2">
                    <span className="text-mod-red">•</span>
                    {item}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>

      {/* Sidebar Utilities */}
      <div className="space-y-6">
        <div className="bg-white p-5 border-t-4 border-mod-red shadow-md">
          <h3 className="text-mod-red font-bold text-center mb-4 uppercase text-sm">Dịch vụ trực tuyến</h3>
          <div className="grid grid-cols-1 gap-3">
            <button onClick={() => onNavigate(Page.REGISTRATION)} className="flex items-center gap-3 bg-mod-red text-white p-3 rounded hover:bg-red-800 transition-colors shadow">
              <div className="bg-white/20 p-2 rounded"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg></div>
              <div className="text-left">
                <div className="font-bold text-[13px]">Đăng ký thăm</div>
                <div className="text-[10px] opacity-80">Thủ tục nhanh gọn, minh bạch</div>
              </div>
            </button>
            <button onClick={() => onNavigate(Page.REGULATIONS)} className="flex items-center gap-3 bg-slate-800 text-white p-3 rounded hover:bg-slate-900 transition-colors shadow">
              <div className="bg-white/20 p-2 rounded"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg></div>
              <div className="text-left">
                <div className="font-bold text-[13px]">Nội quy đơn vị</div>
                <div className="text-[10px] opacity-80">Dành cho thân nhân chiến sĩ</div>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white p-5 border border-slate-200 shadow-sm">
          <h3 className="text-slate-800 font-bold border-b border-slate-200 pb-2 mb-4 uppercase text-[12px]">Video nổi bật</h3>
          <div className="aspect-video bg-slate-200 rounded overflow-hidden relative">
             <img src="https://scontent.fhan5-5.fna.fbcdn.net/v/t39.30808-6/600281932_122173797602619420_7047020449649347904_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEEEJ7GzOns48ER8kft3xbroQYYTtFndEehBhhO0Wd0R-xmbwoOsWFJzOV83Y6F7YntB1lDZKA_j_6BlWU01aIl&_nc_ohc=HMoJIvBXnDgQ7kNvwHI0PGJ&_nc_oc=AdlIOzgUg7z4uN3YEL_-E6RV-saBQtj8RUBN95j21n-SBivv3c21yHBmvPyKU0J7s4Y&_nc_zt=23&_nc_ht=scontent.fhan5-5.fna&_nc_gid=f9l5lQx7L0uZncH1G9jOGQ&oh=00_Afkn6aTE40DqcmRK2k7lGu32oCI2wHq6pYpXDNqWu9pVEA&oe=6958EE8F" alt="Video thumb" className="w-full h-full object-cover" />
             <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer">
                <div className="w-12 h-12 bg-mod-red rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
                   <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4.516 7.548c0-.923.951-1.476 1.729-1.1l5.823 3.707c.558.357.558 1.843 0 2.2L6.245 16.062c-.778.376-1.729-.177-1.729-1.1V7.548z" /></svg>
                </div>
             </div>
          </div>
          <p className="mt-3 text-sm font-medium text-slate-700">Phóng sự: 24h của người chiến sĩ tại Đơn vị Tiểu đoàn 15 SPG-9</p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

