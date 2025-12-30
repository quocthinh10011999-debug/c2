<div align="center">
<img width="200" height="200" alt="Military Portal Logo" src="public/logo.jpg" />
</div>

<div align="center">

# 🎖️ HỆ THỐNG QUẢN LÝ THĂM QUÂN NHÂN

### CỔNG THÔNG TIN ĐIỆN TỬ - TIỂU ĐOÀN 15 SPG-9

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-blue.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.4.1-yellow.svg)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)

*Hệ thống quản lý đăng ký thăm quân nhân trực tuyến hiện đại và chuyên nghiệp*

</div>

---

## 📋 Mục lục

- [🎯 Tổng quan](#-tổng-quan)
- [✨ Tính năng](#-tính-năng)
- [🚀 Cài đặt & Chạy](#-cài-đặt--chạy)
- [🌐 Truy cập Online](#-truy-cập-online)
- [🔐 Tài khoản Admin](#-tài-khoản-admin)
- [📁 Cấu trúc dự án](#-cấu-trúc-dự-án)
- [🛠️ Công nghệ sử dụng](#️-công-nghệ-sử-dụng)
- [📞 Liên hệ](#-liên-hệ)

---

## 🎯 Tổng quan

Hệ thống quản lý thăm quân nhân trực tuyến của Tiểu đoàn 15 SPG-9 là giải pháp số hóa hoàn toàn cho việc quản lý và theo dõi các lượt thăm quân nhân. Hệ thống cung cấp giao diện thân thiện cho người dân đăng ký thăm và công cụ quản lý mạnh mẽ cho cán bộ hành chính.

### 🎯 Mục tiêu
- **Đơn giản hóa** quy trình đăng ký thăm quân nhân
- **Tăng cường** khả năng quản lý và theo dõi
- **Cải thiện** trải nghiệm người dùng
- **Đảm bảo** tính bảo mật và chính xác của dữ liệu

---

## ✨ Tính năng

### 👥 Cho Người Dân
- ✅ **Đăng ký trực tuyến** - Form đăng ký đơn giản, thân thiện
- ✅ **Xem quy định** - Thông tin quy định thăm quân nhân chi tiết
- ✅ **Tìm hiểu truyền thống** - Lịch sử và truyền thống đơn vị
- ✅ **Góp ý & Liên hệ** - Kênh phản hồi trực tiếp

### 👨‍💼 Cho Quản Trị Viên
- ✅ **Quản lý đăng ký** - Xem, duyệt, từ chối đăng ký
- ✅ **Quản trị tài khoản** - Thêm/xóa/sửa tài khoản nhân viên
- ✅ **Báo cáo thống kê** - Thống kê lượt thăm theo thời gian
- ✅ **Xuất dữ liệu** - Xuất báo cáo Excel/PDF

### 🔒 Bảo Mật & An Toàn
- ✅ **JWT Authentication** - Xác thực bảo mật
- ✅ **Role-based Access** - Phân quyền theo vai trò
- ✅ **Data Validation** - Kiểm tra dữ liệu đầu vào
- ✅ **HTTPS Encryption** - Mã hóa dữ liệu truyền tải

---

## 🚀 Cài đặt & Chạy

### 📋 Yêu cầu hệ thống
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Git**

### ⚡ Chạy Local

1. **Clone repository:**
   ```bash
   git clone <repository-url>
   cd hệ-thống-quản-lý-thăm-quân-nhân---đơn-vị-quyết-thắng
   ```

2. **Cài đặt dependencies:**
   ```bash
   # Frontend
   npm install

   # Backend API
   cd military-backend
   npm install
   cd ..
   ```

3. **Chạy ứng dụng:**
   ```bash
   # Terminal 1: Frontend (Port 3000)
   npm run dev

   # Terminal 2: Backend API (Port 3001)
   cd military-backend
   npm start
   ```

4. **Truy cập:**
   - **Frontend:** http://localhost:3000
   - **Backend API:** http://localhost:3001

**🚀 Quick Start (Automated):**
   ```bash
   # Run both servers automatically
   start_both_servers.bat
   ```

   # Terminal 2: Backend API
   cd military-backend
   npm start
   ```

4. **Truy cập:**
   - Frontend: http://localhost:3014
   - API: http://localhost:3001

### 🐳 Chạy với Docker (Tùy chọn)

```bash
# Build và chạy với Docker Compose
docker-compose up -d
```

---

## 🌐 Truy cập Online

### 🚀 Deploy với Ngrok

1. **Cài đặt ngrok:**
   ```bash
   # Windows (đã có trong project)
   # Hoặc tải từ: https://ngrok.com/download
   ```

2. **Cấu hình authtoken:**
   ```bash
   ngrok config add-authtoken YOUR_TOKEN
   ```

3. **Chạy servers:**
   ```bash
   # Sử dụng script có sẵn
   final_online_setup.bat
   ```

4. **URLs sẽ hiển thị:**
   - React App: `https://random-subdomain.ngrok.io`
   - API: `https://another-subdomain.ngrok.io`

### 📊 Monitoring

- **Ngrok Dashboard:** https://dashboard.ngrok.com
- **API Health Check:** `GET /api/health`
- **Real-time Logs:** Kiểm tra console của servers

---

## 🔐 Tài khoản Admin

### 👑 Super Admin
- **Username:** `admin`
- **Password:** `123456`
- **Quyền:** Toàn quyền quản lý hệ thống

### 👨‍💼 Staff
- **Username:** `staff1`
- **Password:** `123`
- **Quyền:** Quản lý đăng ký, không thể quản lý tài khoản

### 🔑 Thêm tài khoản mới
1. Đăng nhập với tài khoản Super Admin
2. Vào **"QUẢN TRỊ TÀI KHOẢN"**
3. Nhấn **"Thêm tài khoản mới"**

---

## 📁 Cấu trúc dự án

```
hệ-thống-quản-lý-thăm-quân-nhân---đơn-vị-quyết-thắng/
├── public/                          # Static assets
│   └── logo.jpg                     # Logo đơn vị
├── src/
│   ├── components/                  # React components
│   ├── controllers/                 # Business logic
│   ├── models/                      # Data models
│   ├── services/                    # API services
│   ├── types/                       # TypeScript types
│   ├── views/                       # Page components
│   │   ├── components/             # UI components
│   │   ├── layouts/                # Layout components
│   │   └── pages/                  # Page components
│   ├── App.tsx                     # Main app component
│   └── main.tsx                    # App entry point
├── military-backend/               # Node.js API server
│   ├── server.js                   # Express server
│   └── package.json                # Backend dependencies
├── node_modules/                   # Dependencies
├── package.json                    # Frontend dependencies
├── vite.config.ts                  # Vite configuration
└── README.md                       # Documentation
```

---

## 🛠️ Công nghệ sử dụng

### 🎨 Frontend
- **React 19** - Modern React với hooks và concurrent features
- **TypeScript** - Type safety và better DX
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool và dev server
- **React Router** - Client-side routing

### ⚙️ Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **JWT** - JSON Web Tokens cho authentication
- **CORS** - Cross-origin resource sharing
- **UUID** - Unique identifier generation

### 🗄️ Database
- **Local Storage** - Client-side storage (dev)
- **In-memory** - Server-side temporary storage
- **JSON Files** - Data persistence (có thể nâng cấp lên MongoDB/PostgreSQL)

### 🛠️ Dev Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vite Dev Server** - Hot reload development
- **Ngrok** - Local tunneling cho testing

---

## 📞 Liên hệ

### 🏛️ Tiểu đoàn 15 SPG-9
- **📧 Email:** info@td15-spg9.vn
- **📞 Điện thoại:** 0123.xxxx.456
- **🏢 Địa chỉ:** [Địa chỉ đơn vị]

### 👨‍💻 Hỗ trợ kỹ thuật
- **📧 Email:** support@td15-spg9.vn
- **💬 Issues:** [GitHub Issues](https://github.com/your-repo/issues)

### 📚 Tài liệu
- **API Docs:** `http://localhost:3001/api/docs`
- **User Guide:** [Link hướng dẫn sử dụng]
- **Admin Guide:** [Link hướng dẫn quản trị]

---

<div align="center">

### 🇻🇳 **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**

### **Độc lập - Tự do - Hạnh phúc**

---

**Tiểu đoàn 15 SPG-9** | **Bộ Quốc Phòng** | **Quân Đội Nhân Dân Việt Nam**

*© 2025 - Hệ thống quản lý thăm quân nhân trực tuyến*

</div>
