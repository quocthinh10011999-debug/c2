import React from 'react';

const Tradition: React.FC = () => {
  const regionHistory = [
    { year: "1945", title: "Thành lập Quân khu 4", desc: "Quân khu 4 được thành lập ngày 15/10/1945 tại làng Hoàng Mai (nay là xã Hoàng Mai, huyện Yên Dũng, tỉnh Bắc Giang), là một trong 7 quân khu đầu tiên của Quân đội Nhân dân Việt Nam.", img: "https://picsum.photos/seed/qk1/600/400" },
    { year: "1946-1954", title: "Kháng chiến chống Pháp", desc: "Trong cuộc kháng chiến chống Pháp, Quân khu 4 đã phối hợp chặt chẽ với các lực lượng vũ trang, góp phần bảo vệ vùng Đông Bắc và miền núi phía Bắc.", img: "https://picsum.photos/seed/qk2/600/400" },
    { year: "1954-1975", title: "Kháng chiến chống Mỹ", desc: "Trong cuộc kháng chiến chống Mỹ, Quân khu 4 đã tổ chức và chỉ huy nhiều chiến dịch quan trọng, góp phần vào thắng lợi chung của dân tộc.", img: "https://picsum.photos/seed/qk3/600/400" },
    { year: "1975-nay", title: "Bảo vệ biên giới và xây dựng", desc: "Sau chiến thắng, Quân khu 4 tiếp tục bảo vệ vững chắc biên giới phía Bắc, đồng thời góp phần xây dựng và bảo vệ Tổ quốc.", img: "https://picsum.photos/seed/qk4/600/400" }
  ];

  const divisionHistory = [
    { year: "1965", title: "Thành lập Sư đoàn 324", desc: "Sư đoàn 324 được thành lập ngày 30/6/1965 tại tỉnh Nghệ An theo quyết định của Bộ Quốc phòng. Đây là sư đoàn bộ binh chủ lực đầu tiên của Quân khu 4.", img: "https://picsum.photos/seed/sd1/600/400" },
    { year: "1965-1968", title: "Chiến dịch Tây Nguyên", desc: "Sư đoàn 324 đã tham gia chiến dịch Tây Nguyên (1965-1968), phối hợp với các đơn vị bạn giải phóng nhiều vùng đất và góp phần mở rộng căn cứ địa.", img: "https://picsum.photos/seed/sd2/600/400" },
    { year: "1969-1972", title: "Chiến dịch đường 9 - Nam Lào", desc: "Sư đoàn 324 tham gia chiến dịch đường 9 - Nam Lào (1970-1972), phối hợp với sư đoàn bạn đánh bại nhiều cuộc tiến công của địch, bảo vệ vững chắc tuyến đường chiến lược.", img: "https://picsum.photos/seed/sd3/600/400" },
    { year: "1975", title: "Chiến dịch Hồ Chí Minh", desc: "Sư đoàn 324 tham gia chiến dịch Hồ Chí Minh lịch sử, phối hợp với các đơn vị bạn tiến công và giải phóng hoàn toàn miền Nam thống nhất đất nước.", img: "https://picsum.photos/seed/sd4/600/400" },
    { year: "1979", title: "Chiến tranh biên giới Tây Nam", desc: "Sư đoàn 324 tham gia chiến tranh bảo vệ biên giới Tây Nam (1979), góp phần bảo vệ vững chắc chủ quyền biên giới của Tổ quốc.", img: "https://picsum.photos/seed/sd5/600/400" },
    { year: "Nay", title: "Xây dựng lực lượng chính quy", desc: "Hiện nay, Sư đoàn 324 tiếp tục phát huy truyền thống 'Bộ đội Cụ Hồ', luôn sẵn sàng chiến đấu, xây dựng đơn vị vững mạnh toàn diện.", img: "https://picsum.photos/seed/sd6/600/400" }
  ];

  const battalionHistory = [
    { year: "1993", title: "Thành lập Tiểu đoàn 15 SPG-9", desc: "Tiểu đoàn 15 được thành lập năm 1993, là đơn vị bộ binh thuộc Sư đoàn 324, với truyền thống chiến đấu kiên cường.", img: "https://picsum.photos/seed/td1/600/400" },
    { year: "1972-1975", title: "Chiến đấu bảo vệ biên giới", desc: "Trong những năm cuối kháng chiến chống Mỹ, Tiểu đoàn 15 đã tham gia nhiều trận đánh quan trọng, bảo vệ vững chắc biên giới phía Bắc và chuẩn bị cho tổng tiến công.", img: "https://picsum.photos/seed/td2/600/400" },
    { year: "1975", title: "Giải phóng hoàn toàn miền Nam", desc: "Tiểu đoàn 15 tham gia chiến dịch Hồ Chí Minh lịch sử, phối hợp với các đơn vị bạn tiến công và góp phần giải phóng hoàn toàn miền Nam.", img: "https://picsum.photos/seed/td3/600/400" },
    { year: "1979", title: "???", desc: "???", img: "https://picsum.photos/seed/td4/600/400" },
    { year: "1980-nay", title: "Xây dựng và bảo vệ Tổ quốc", desc: "Sau chiến tranh, Tiểu đoàn 15 tiếp tục phát huy truyền thống 'Quyết Thắng', luôn dẫn đầu phong trào thi đua, xây dựng đơn vị vững mạnh toàn diện, sẵn sàng bảo vệ Tổ quốc.", img: "https://picsum.photos/seed/td5/600/400" }
  ];

  const Section = ({ title, data, icon }: { title: string, data: any[], icon: string }) => (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-10 border-b border-slate-100 pb-4">
        <div className="text-2xl">{icon}</div>
        <h2 className="text-xl font-bold text-mod-red uppercase tracking-wide">{title}</h2>
      </div>
      <div className="space-y-12">
        {data.map((item, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-5/12">
              <img src={item.img} alt={item.title} className="rounded shadow-lg border border-slate-200" />
            </div>
            <div className="w-full md:w-7/12 relative pl-8 border-l-2 border-slate-100">
              <div className="absolute top-0 -left-[9px] w-4 h-4 bg-mod-red rounded-full border-2 border-white shadow-sm"></div>
              <div className="inline-block px-3 py-1 bg-mod-red text-white font-bold text-[11px] mb-3">{item.year}</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed italic">"{item.desc}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-white p-8 content-card">
        <div className="flex flex-col items-center mb-12">
           <h1 className="text-3xl font-extrabold text-mod-red uppercase text-center tracking-tighter">Lịch sử và Truyền thống vẻ vang</h1>
           <div className="w-24 h-1 bg-mod-gold mt-2"></div>
           <p className="text-xs text-slate-400 mt-4 uppercase font-bold tracking-[0.2em]">Kế thừa - Phát huy - Tỏa sáng</p>
        </div>

        {/* Anchor Nav */}
        <div className="flex justify-center gap-4 mb-16 overflow-x-auto no-scrollbar pb-2">
           {["QUÂN KHU 4", "SƯ ĐOÀN 324", "TIỂU ĐOÀN 15"].map((lbl, i) => (
             <button key={i} className="whitespace-nowrap px-6 py-2 bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-bold rounded-full hover:bg-mod-red hover:text-white hover:border-mod-red transition-all shadow-sm">
               {lbl}
             </button>
           ))}
        </div>

        <Section title="Truyền thống Quân khu 4" data={regionHistory} icon="🏰" />
        <Section title="Truyền thống Sư đoàn 324" data={divisionHistory} icon="⚔️" />
        <Section title="Truyền thống Tiểu đoàn 15 Quyết Thắng" data={battalionHistory} icon="🎖️" />
      </div>
    </div>
  );
};

export default Tradition;

