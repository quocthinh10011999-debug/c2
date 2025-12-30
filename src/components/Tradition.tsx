import React from 'react';

const Tradition: React.FC = () => {
  const regionHistory = [
    {
      title: "📜 Lịch sử thành lập Quân khu 4",
      desc: " tên gọi ban đầu là Chiến khu 4, theo sắc lệnh của Chủ tịch Hồ Chí Minh, bao gồm các tỉnh Thanh Hóa, Nghệ An, Hà Tĩnh, Quảng Bình, Quảng Trị, Thừa Thiên Huế.",
      img: "https://file3.qdnd.vn/data/images/0/2022/10/12/tranhoai/bac%20ho%20voi%20thanh%20nien.jpg?dpi=150&quality=100&w=870"
    }
  ];

  const regionTradition = [
    {
      title: "🎖️ Truyền thống vẻ vang",
      desc: "Tuyệt đối trung thành với Đảng, với Tổ quốc và Nhân dân, sẵn sàng chiến đấu hy sinh vì nhiệm vụ cách mạng của dân tộc. Ý chí quyết chiến, quyết thắng, biết đánh và biết thắng trong mọi hoàn cảnh. Gắn bó máu thịt với nhân dân, quân-dân một ý chí. Hậu phương - tiền tuyến đồng lòng, vì cả nước, với cả nước. Tinh thần đoàn kết quốc tế trong sáng, đặc biệt là tình đoàn kết hữu nghị quân - dân với cách mạng Lào.",
      img: "https://file3.qdnd.vn/data/images/0/2022/10/12/tranhoai/bac%20ho%20voi%20thanh%20nien.jpg?dpi=150&quality=100&w=8700"
    },
    {
      title: "🚀 Định hướng phát triển",
      desc: "Nâng cao chất lượng huấn luyện, sẵn sàng chiến đấu và xây dựng lực lượng chính quy, tinh nhuệ, từng bước hiện đại, đáp ứng yêu cầu bảo vệ chủ quyền quốc gia trong tình hình mới. Đẩy mạnh công tác dân vận, hỗ trợ nhân dân phòng chống thiên tai, cứu nạn cứu hộ và tham gia phát triển kinh tế - xã hội tại địa bàn. Hoàn thiện tổ chức lực lượng, củng cố thế trận quốc phòng toàn dân và an ninh nhân dân vững chắc, gắn với nhiệm vụ đối ngoại quốc phòng.",
      img: "https://80namquankhu4.baoquankhu4.com.vn/wp-content/uploads/2025/05/z6615844709888_d606a1faafc75a7f455b61a23851dd52.jpg"
    }
  ];

  const regionAchievements = [
    {
      title: "🏆 Huân chương và Danh hiệu",
      desc: "Huân chương Hồ Chí Minh (3 lần): Quân khu đã vinh dự đón nhận Huân chương Hồ Chí Minh lần thứ ba vào ngày 12/10/2025 nhân dịp kỷ niệm 80 năm Ngày truyền thống (15/10/1945 - 15/10/2025). Huân chương Sao vàng: Đây là huân chương cao quý nhất của Nhà nước đã được trao tặng cho Quân khu 4 để ghi nhận những đóng góp đặc biệt xuất sắc cho sự nghiệp cách mạng của dân tộc. Huân chương của Nhà nước Lào: Ghi nhận tình đoàn kết hữu nghị và những đóng góp của Quân khu 4 đối với cách mạng Lào (được trao tặng vào tháng 10/2025).",
      img: "https://bna.1cdn.vn/2025/10/12/bna_img_2526.jpg"
    }
  ];

  const divisionHistory = [
    {
      title: "📜 Lịch sử thành lập Sư đoàn 324",
      desc: "Ngày 01/07/1955 được lấy là Ngày truyền thống của Sư đoàn 324, kể từ khi sư đoàn được thành lập tại xã Triệu Dương, huyện Tĩnh Gia, tỉnh Thanh Hóa.",
      img: "https://baoquankhu4.com.vn/upload/18269/fck/ngocthangqk4/DB%283%29.jpg"
    },
    {
      year: "1979",
      title: "⚔️ Chiến tranh biên giới Tây Nam",
      desc: "Sư đoàn 324 tham gia chiến tranh bảo vệ biên giới Tây Nam (1979), góp phần bảo vệ vững chắc chủ quyền biên giới của Tổ quốc.",
      img: "https://picsum.photos/seed/sd5/600/400"
    }
  ];

  const divisionTradition = [
    {
      title: "🎖️ Truyền thống vẻ vang",
      desc: "Anh dũng kiên cường, trung thành và sáng tạo trong chiến đấu – tham gia nhiều chiến dịch lớn trong kháng chiến chống Mỹ và bảo vệ Tổ quốc. Phát huy tinh thần 'Đoàn Ngự Bình Anh hùng' – biểu tượng tinh thần quyết thắng và ý chí thi đua sáng tạo trong cán bộ, chiến sĩ. Tinh thần đoàn kết, tự lực tự cường, luôn nỗ lực vừa huấn luyện giỏi, vừa hoàn thành tốt nhiệm vụ chính trị.",
      img: "https://picsum.photos/seed/sd2/600/400"
    },
    {
      title: "🚀 Định hướng phát triển",
      desc: "Đẩy mạnh phong trào thi đua Quyết thắng, nâng cao chất lượng huấn luyện và sẵn sàng chiến đấu, lan tỏa khí thế thi đua trong toàn đơn vị. Xây dựng cảnh quan doanh trại chính quy, hiện đại thông qua các hoạt động kỷ niệm ngày truyền thống và phong trào thi đua trong toàn sư đoàn. Chăm lo đời sống cán bộ, chiến sĩ và thực hiện công tác 'Đền ơn đáp nghĩa', thăm hỏi gia đình thương binh liệt sĩ, cựu chiến binh. Giáo dục truyền thống và bồi đắp tinh thần trách nhiệm, thông qua các hoạt động tuyên truyền, giáo dục lịch sử và truyền thống chiến đấu cho chiến sĩ mới.",
      img: "https://file3.qdnd.vn/data/images/0/2024/06/30/upload_1021/a%204%20f324%201.jpg?dpi=150&quality=100&w=870"
    }
  ];

  const divisionAchievements = [
    {
      title: "🏆 Huân chương và Danh hiệu",
      desc: "Nhận 2 lần danh hiệu anh hùng LLVT nhân dân, cùng nhiều huân chương khác",
      img: "https://picsum.photos/seed/sd4/600/400"
    },
    {
      year: "Nay",
      title: "💪 Xây dựng lực lượng chính quy",
      desc: "Hiện nay, Sư đoàn 324 tiếp tục phát huy truyền thống 'Bộ đội Cụ Hồ', luôn sẵn sàng chiến đấu, xây dựng đơn vị vững mạnh toàn diện.",
      img: "https://picsum.photos/seed/sd6/600/400"
    }
  ];

  const battalionHistory = [
    {
      title: "📜 Lịch sử thành lập Tiểu đoàn 15",
      desc: "Tiểu đoàn 15 được thành lập năm 1993, là đơn vị bộ binh thuộc Sư đoàn 324, với truyền thống chiến đấu kiên cường.",
      img: "https://picsum.photos/seed/td1/600/400"
    },
    {
      year: "1972-1975",
      title: "⚔️ Chiến đấu bảo vệ biên giới",
      desc: "Trong những năm cuối kháng chiến chống Mỹ, Tiểu đoàn 15 đã tham gia nhiều trận đánh quan trọng, bảo vệ vững chắc biên giới phía Bắc và chuẩn bị cho tổng tiến công.",
      img: "https://picsum.photos/seed/td2/600/400"
    },
    {
      year: "1975",
      title: "🌟 Giải phóng hoàn toàn miền Nam",
      desc: "Tiểu đoàn 15 tham gia chiến dịch Hồ Chí Minh lịch sử, phối hợp với các đơn vị bạn tiến công và góp phần giải phóng hoàn toàn miền Nam.",
      img: "https://picsum.photos/seed/td3/600/400"
    }
  ];

  const battalionTradition = [
    {
      title: "🎖️ Truyền thống 'Quyết Thắng'",
      desc: "Tiểu đoàn 15 luôn phát huy truyền thống 'Quyết Thắng', kế thừa tinh thần anh dũng, kiên cường của các thế hệ đi trước. Đơn vị luôn dẫn đầu phong trào thi đua, xây dựng đơn vị vững mạnh toàn diện, sẵn sàng bảo vệ vững chắc chủ quyền biên giới và lãnh thổ thiêng liêng của Tổ quốc.",
      img: "https://picsum.photos/seed/td5/600/400"
    }
  ];

  const battalionAchievements = [
    {
      title: "🏆 Thành tích và Vinh quang",
      desc: "Tiểu đoàn 15 vinh dự được Đảng, Nhà nước và Quân đội tặng nhiều huân chương, danh hiệu cao quý. Đơn vị luôn hoàn thành xuất sắc nhiệm vụ, góp phần xây dựng và bảo vệ vững chắc biên giới phía Bắc trong thời bình.",
      img: "https://picsum.photos/seed/td4/600/400"
    },
    {
      year: "1980-nay",
      title: "💪 Xây dựng đơn vị hiện đại",
      desc: "Sau chiến tranh, Tiểu đoàn 15 tiếp tục phát huy truyền thống 'Quyết Thắng', luôn dẫn đầu phong trào thi đua, xây dựng đơn vị vững mạnh toàn diện, sẵn sàng bảo vệ Tổ quốc trong tình hình mới.",
      img: "https://picsum.photos/seed/td6/600/400"
    }
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

        {/* Quân khu 4 */}
        <Section title="🏰 Quân khu 4 - Lịch sử" data={regionHistory} icon="📜" />
        <Section title="🏰 Quân khu 4 - Truyền thống" data={regionTradition} icon="🎖️" />
        <Section title="🏰 Quân khu 4 - Danh hiệu" data={regionAchievements} icon="🏆" />

        {/* Sư đoàn 324 */}
        <Section title="⚔️ Sư đoàn 324 - Lịch sử" data={divisionHistory} icon="📜" />
        <Section title="⚔️ Sư đoàn 324 - Truyền thống" data={divisionTradition} icon="🎖️" />
        <Section title="⚔️ Sư đoàn 324 - Danh hiệu" data={divisionAchievements} icon="🏆" />

        {/* Tiểu đoàn 15 */}
        <Section title="🎖️ Tiểu đoàn 15 - Lịch sử" data={battalionHistory} icon="📜" />
        <Section title="🎖️ Tiểu đoàn 15 - Truyền thống" data={battalionTradition} icon="🎖️" />
        <Section title="🎖️ Tiểu đoàn 15 - Danh hiệu" data={battalionAchievements} icon="🏆" />
      </div>
    </div>
  );
};

export default Tradition;

