import React from 'react';

const Regulations: React.FC = () => {
  const rules = [
    { title: "Thời gian thăm quân nhân", items: ["Sáng: Từ 07:30 đến 11:00", "Chiều: Từ 13:30 đến 16:30", "Các ngày nghỉ Thứ 7, Chủ nhật và Lễ Tết."], icon: "⏰" },
    { title: "Hồ sơ và Thủ tục", items: ["Thẻ Căn cước công dân bản chính.", "Trình báo lý do thăm hỏi cụ thể.", "Đăng ký trực tuyến trước thời điểm thăm ít nhất 24h."], icon: "🪪" },
    { title: "Trang phục và Tác phong", items: ["Trang phục lịch sự, chỉnh tề.", "Tuyệt đối tuân thủ chỉ dẫn của cán bộ trực ban.", "Không sử dụng chất kích thích, thuốc lá trong khuôn viên."], icon: "👔" },
    { title: "Hành lý và Vật phẩm cấm", items: ["Nghiêm cấm mang vũ khí, vật liệu nổ.", "Không mang các loại ấn phẩm đồi trụy, phản động.", "Hạn chế mang theo trang thiết bị ghi hình chuyên dụng."], icon: "🚫" }
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-white p-8 content-card">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
           <div className="w-1 h-8 bg-mod-red"></div>
           <h1 className="text-2xl font-bold text-mod-red uppercase">Quy định thăm hỏi quân nhân</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rules.map((rule, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-2 rounded text-mod-red">{rule.icon}</div>
                <h3 className="text-lg font-bold text-slate-800">{rule.title}</h3>
              </div>
              <ul className="space-y-3 pl-11">
                {rule.items.map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 flex gap-2">
                    <span className="text-mod-red font-bold">»</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 bg-yellow-50 border border-yellow-200 text-sm text-yellow-900 rounded">
          <p className="font-bold flex items-center gap-2 mb-1 uppercase"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg> Lưu ý đặc biệt:</p>
          Thân nhân phải xuất trình giấy tờ khi đến cổng đơn vị. Mọi trường hợp không đúng quy định hoặc thiếu giấy tờ sẽ không được chấp thuận vào thăm.
        </div>
      </div>
    </div>
  );
};

export default Regulations;

