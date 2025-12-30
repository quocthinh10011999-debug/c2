# PowerShell script to show public URLs and tunnel password
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "    MILITARY PORTAL - PUBLIC ACCESS" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Get tunnel password
Write-Host "🔑 Getting tunnel password..." -ForegroundColor Yellow
try {
    $tunnelPassword = Invoke-WebRequest -Uri "https://loca.lt/mytunnelpassword" -UseBasicParsing | Select-Object -ExpandProperty Content
    Write-Host "✅ Tunnel Password: $tunnelPassword" -ForegroundColor Green
} catch {
    $tunnelPassword = "27.70.186.23 (fallback)"
    Write-Host "⚠️  Could not get password automatically: $tunnelPassword" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🌐 PUBLIC URLs (Access from anywhere):" -ForegroundColor White
Write-Host "└─ Frontend: https://tired-kiwis-nail.loca.lt" -ForegroundColor Green
Write-Host "└─ Backend:  https://green-frog-84.loca.lt" -ForegroundColor Green
Write-Host ""
Write-Host "🏠 LOCAL URLs (Local machine only):" -ForegroundColor White
Write-Host "└─ Frontend: http://localhost:3014" -ForegroundColor Cyan
Write-Host "└─ Backend:  http://localhost:3001" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 HOW TO ACCESS:" -ForegroundColor Yellow
Write-Host "1. Open any web browser" -ForegroundColor White
Write-Host "2. Go to: https://tired-kiwis-nail.loca.lt" -ForegroundColor White
Write-Host "3. Enter password: $tunnelPassword" -ForegroundColor White
Write-Host "4. Enjoy your Military Portal! 🎖️" -ForegroundColor Green
Write-Host ""
Write-Host "🧪 TEST ENDPOINTS:" -ForegroundColor Yellow
Write-Host "└─ API Health: https://green-frog-84.loca.lt/api/health" -ForegroundColor White
Write-Host "└─ Frontend:  https://tired-kiwis-nail.loca.lt/" -ForegroundColor White
Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "Press Enter to exit..." -ForegroundColor Gray
Read-Host
