import React from 'react';

const quankhu4Data = [
  {
    title: "Lịch sử thành lập",
    desc: "Thành lập 15/10/1945. Tên gọi ban đầu là Chiến khu 4, theo sắc lệnh của Chủ tịch Hồ Chí Minh, bao gồm các tỉnh Thanh Hóa, Nghệ An, Hà Tĩnh, Quảng Bình, Quảng Trị, Thừa Thiên Huế.",
    img: "https://file3.qdnd.vn/data/images/0/2022/10/12/tranhoai/bac%20ho%20voi%20thanh%20nien.jpg?dpi=150&quality=100&w=870",
    type: "history",
  },
  {
    title: "Truyền thống vẻ vang",
    desc: "Tuyệt đối trung thành với Đảng, Tổ quốc và Nhân dân, sẵn sàng chiến đấu hy sinh vì nhiệm vụ cách mạng của dân tộc. Ý chí quyết chiến, quyết thắng, biết đánh và biết thắng trong mọi hoàn cảnh. Gắn bó máu thịt với nhân dân, quân-dân một ý chí. Hậu phương - tiền tuyến đồng lòng, vì cả nước, với cả nước. Tinh thần đoàn kết quốc tế trong sáng, đặc biệt là tình đoàn kết hữu nghị quân - dân với cách mạng Lào.",
    img: "https://baoquankhu4.com.vn/upload/18269/fck/ngocthangqk4/DB%283%29.jpg",
    type: "tradition",
  },
  {
    title: "Định hướng phát triển",
    desc: "Nâng cao chất lượng huấn luyện, sẵn sàng chiến đấu và xây dựng lực lượng chính quy, tinh nhuệ, từng bước hiện đại, đáp ứng yêu cầu bảo vệ chủ quyền quốc gia trong tình hình mới. Đẩy mạnh công tác dân vận, hỗ trợ nhân dân phòng chống thiên tai, cứu nạn cứu hộ và tham gia phát triển kinh tế - xã hội tại địa bàn. Hoàn thiện tổ chức lực lượng, củng cố thế trận quốc phòng toàn dân và an ninh nhân dân vững chắc, gắn với nhiệm vụ đối ngoại quốc phòng.",
    img: "https://80namquankhu4.baoquankhu4.com.vn/wp-content/uploads/2025/05/z6615844709888_d606a1faafc75a7f455b61a23851dd52.jpg",
    type: "development",
  },
  {
    title: "Huân chương và Danh hiệu",
    desc: "Huân chương Hồ Chí Minh (3 lần): Quân khu đã vinh dự đón nhận Huân chương Hồ Chí Minh lần thứ ba vào ngày 12/10/2025 nhân dịp kỷ niệm 80 năm Ngày truyền thống (15/10/1945 - 15/10/2025). Huân chương Sao vàng: Đây là huân chương cao quý nhất của Nhà nước đã được trao tặng cho Quân khu 4 để ghi nhận những đóng góp đặc biệt xuất sắc cho sự nghiệp cách mạng của dân tộc. Huân chương của Nhà nước Lào: Ghi nhận tình đoàn kết hữu nghị và những đóng góp của Quân khu 4 đối với cách mạng Lào (được trao tặng vào tháng 10/2025).",
    img: "https://bna.1cdn.vn/2025/10/12/bna_img_2526.jpg",
    type: "achievements",
  },
];

const sudoan324Data = [
  {
    title: "Lịch sử thành lập",
    desc: "Ngày 01/07/1955 được lấy là Ngày truyền thống của Sư đoàn 324, kể từ khi sư đoàn được thành lập tại xã Triệu Dương, huyện Tĩnh Gia, tỉnh Thanh Hóa.",
    img: "https://file3.qdnd.vn/data/images/0/2024/06/30/upload_1021/a%204%20f324%201.jpg?dpi=150&quality=100&w=870",
    type: "history"
  },
  {
    title: "Tham gia chiến tranh biên giới Tây Nam (1979)",
    desc: "Sư đoàn 324 tham gia chiến tranh bảo vệ biên giới Tây Nam (1979), góp phần bảo vệ vững chắc chủ quyền biên giới của Tổ quốc.",
    img: "https://baoquankhu4.com.vn/upload/18269/fck/ngocthangqk4/DB%283%29.jpg",
    type: "combat"
  },
  {
    title: "Truyền thống vẻ vang",
    desc: "Anh dũng kiên cường, trung thành và sáng tạo trong chiến đấu – tham gia nhiều chiến dịch lớn trong kháng chiến chống Mỹ và bảo vệ Tổ quốc. Phát huy tinh thần 'Đoàn Ngự Bình Anh hùng' – biểu tượng tinh thần quyết thắng và ý chí thi đua sáng tạo trong cán bộ, chiến sĩ. Tinh thần đoàn kết, tự lực tự cường, luôn nỗ lực vừa huấn luyện giỏi, vừa hoàn thành tốt nhiệm vụ chính trị.",
    img: "https://bna.1cdn.vn/2025/10/12/bna_img_2526.jpg",
    type: "tradition",
  },
  {
    title: "Định hướng phát triển",
    desc: "Đẩy mạnh phong trào thi đua Quyết thắng, nâng cao chất lượng huấn luyện và sẵn sàng chiến đấu, lan tỏa khí thế thi đua trong toàn đơn vị. Xây dựng cảnh quan doanh trại chính quy, hiện đại thông qua các hoạt động kỷ niệm ngày truyền thống và phong trào thi đua trong toàn sư đoàn. Chăm lo đời sống cán bộ, chiến sĩ và thực hiện công tác 'Đền ơn đáp nghĩa', thăm hỏi gia đình thương binh liệt sĩ, cựu chiến binh. Giáo dục truyền thống và bồi đắp tinh thần trách nhiệm, thông qua các hoạt động tuyên truyền, giáo dục lịch sử và truyền thống chiến đấu cho chiến sĩ mới.",
    img: "https://80namquankhu4.baoquankhu4.com.vn/wp-content/uploads/2025/05/z6615844709888_d606a1faafc75a7f455b61a23851dd52.jpg",
    type: "development",
  },
  {
    title: "Thành tích",
    desc: "Nhận 2 lần danh hiệu anh hùng LLVT nhân dân, cùng nhiều huân chương khác",
    img: "https://file3.qdnd.vn/data/images/0/2022/10/12/tranhoai/bac%20ho%20voi%20thanh%20nien.jpg?dpi=150&quality=100&w=870",
    type: "achievements"
  }
];

const tieudoan15Data = [
  {
    title: "Lịch sử thành lập",
    desc: "Năm 1993, thuộc Sư đoàn 324, với truyền thống chiến đấu kiên cường.",
    img: "https://file3.qdnd.vn/data/images/0/2024/06/30/upload_1021/a%204%20f324%201.jpg?dpi=150&quality=100&w=870",
    type: "history"
  },
  {
    title: "Chân đồng, vai sắt, đánh giỏi, bắn trúng",
    desc: "Chân đồng, vai sắt, đánh giỏi, bắn trúng - phương châm huấn luyện của bộ đội Quân khu 4, biểu tượng cho tinh thần kỷ luật nghiêm minh, kỹ thuật chiến đấu cao siêu và ý chí quyết thắng.",
    img: "https://baoquankhu4.com.vn/upload/18269/fck/ngocthangqk4/DB%283%29.jpg",
    type: "combat"
  },
  {
    title: "Truyền thống \"Quyết Thắng\"",
    desc: "Phát huy truyền thống anh dũng, kiên cường. Dẫn đầu phong trào thi đua, xây dựng đơn vị vững mạnh toàn diện, sẵn sàng bảo vệ vững chắc chủ quyền biên giới và lãnh thổ thiêng liêng của Tổ quốc.",
    img: "https://80namquankhu4.baoquankhu4.com.vn/wp-content/uploads/2025/05/z6615844709888_d606a1faafc75a7f455b61a23851dd52.jpg",
    type: "tradition"
  },
  {
    title: "Thành tích",
    desc: "Nhiều huân chương danh hiệu cao quý, hoàn thành xuất sắc nhiệm vụ được giao",
    img: "https://bna.1cdn.vn/2025/10/12/bna_img_2526.jpg",
    type: "achievements"
  }
];

const UnitSection = ({
  title,
  data,
  icon,
}: {
  title: string;
  data: any[];
  icon: string;
}) => (
  <div className="mb-16">
    <div className="flex items-center gap-4 mb-8">
      <div className="text-2xl">{icon}</div>
      <h2 className="text-xl font-bold text-mod-red uppercase tracking-wide">{title}</h2>
    </div>
    <div className="space-y-8">
      {data.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row gap-6 items-center ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-5/12">
            <img
              src={item.img}
              alt={item.title}
              className="rounded shadow-lg border border-slate-200 w-full h-auto"
            />
          </div>
          <div className="w-full md:w-7/12">
            <h3 className="text-lg font-bold text-slate-800 mb-3 border-l-4 border-mod-red pl-4">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Tradition: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-white p-8 content-card">
        <div className="flex flex-col items-center mb-12">
          <p className="font-bold text-mod-red text-xl tracking-[0.2em]">Kế thừa - Phát huy - Tỏa sáng</p>
        </div>

        {/* Anchor Nav */}
        <div className="flex justify-center gap-4 mb-16 overflow-x-auto no-scrollbar pb-2">
          {["QUÂN KHU 4", "SƯ ĐOÀN 324", "TIỂU ĐOÀN 15"].map((lbl, i) => (
            <button
              key={i}
              className="whitespace-nowrap px-6 py-2 bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-bold rounded-full hover:bg-mod-red hover:text-white hover:border-mod-red transition-all shadow-sm"
            >
              {lbl}
            </button>
          ))}
        </div>

        <UnitSection title="Quân khu 4" data={quankhu4Data} icon="🏰" />
        <UnitSection title="Sư đoàn 324" data={sudoan324Data} icon="⚔️" />
        <UnitSection title="Tiểu đoàn 15" data={tieudoan15Data} icon="🎖️" />
      </div>
    </div>
  );
};

export default Tradition;

