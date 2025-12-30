@echo off
echo ========================================
echo    KHOI DONG CA FRONTEND & BACKEND
echo ========================================
echo.
echo Dang khoi dong servers...
echo.
echo [1/2] Starting Frontend (React App - Port 3000)
start "Frontend Server" cmd /k "npm run dev"
echo.
echo [2/2] Starting Backend (API Server - Port 3001)
start "Backend API" cmd /k "cd military-backend && npm start"
echo.
echo ========================================
echo    SERVERS DA DUOC KHOI DONG!
echo ========================================
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:3001
echo.
echo Cho servers khoi dong xong (khoang 10-15 giay)
echo Sau do mo trinh duyet truy cap: http://localhost:3000
echo.
echo Nhan Enter de dong cua so nay...
pause >nul
