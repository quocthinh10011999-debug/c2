============================================
     HUONG DAN KHOI DONG SERVER
============================================

CAC BUOC DE CHAY UNG DUNG:

1. KHOI DONG FRONTEND (React App)
   -------------------------------
   - Mo Command Prompt/Terminal
   - Chay lenh sau:
     npm run dev

   => Server se chay tren: http://localhost:3000

2. KHOI DONG BACKEND (API Server)
   -------------------------------
   - Mo Command Prompt/Terminal moi
   - Chay lenh sau:
     cd military-backend
     npm start

   => API se chay tren: http://localhost:3001

3. TRUY CAP UNG DUNG
   -------------------
   - Mo trinh duyet
   - Vao dia chi: http://localhost:3000
   - Dang ky tham quan hoac xem thong tin

4. DANG NHAP ADMIN (neu can quan ly)
   -----------------------------------
   Username: admin
   Password: 123456

============================================
     CAC LENH PHU
============================================

- Test local:          test_local.bat
- Setup online:        final_online_setup.bat
- Restart servers:     restart_ngrok.bat
- Xem URLs online:     ngrok_urls.bat

============================================
     KHI CO VAN DE
============================================

Neu gap loi:
- Port da duoc su dung: taskkill /f /im node.exe
- Chay lai: npm install (neu thieu dependencies)
- Kiem tra ports: netstat -ano | findstr :3000

============================================
