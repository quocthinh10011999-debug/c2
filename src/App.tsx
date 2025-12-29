import React, { useState, useEffect } from 'react';
import { Page, AdminUser } from './types';
import { UserController } from './controllers/UserController';

// Import Pages
import HomePage from './views/pages/HomePage';
import RegulationsPage from './views/pages/RegulationsPage';
import TraditionPage from './views/pages/TraditionPage';
import RegistrationPage from './views/pages/RegistrationPage';
import FeedbackPage from './views/pages/FeedbackPage';
import AdminLoginPage from './views/pages/AdminLoginPage';
import AdminDashboardPage from './views/pages/AdminDashboardPage';
import UserManagementPage from './views/pages/UserManagementPage';

// Import Layout
import MainLayout from './views/layouts/MainLayout';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    // Load current user session on app start
    const user = UserController.getCurrentUser();
    setCurrentUser(user);
  }, []);

  const handleLogin = (user: AdminUser) => {
    setCurrentUser(user);
    setCurrentPage(Page.ADMIN_DASHBOARD);
  };

  const handleLogout = async () => {
    await UserController.logout();
    setCurrentUser(null);
    setCurrentPage(Page.HOME);
  };

  const renderPage = () => {
    // Public pages
    if (currentPage === Page.HOME) return <HomePage onNavigate={setCurrentPage} />;
    if (currentPage === Page.REGULATIONS) return <RegulationsPage />;
    if (currentPage === Page.TRADITION) return <TraditionPage />;
    if (currentPage === Page.REGISTRATION) return <RegistrationPage />;
    if (currentPage === Page.FEEDBACK) return <FeedbackPage />;
    if (currentPage === Page.ADMIN_LOGIN) return <AdminLoginPage onLogin={handleLogin} />;

    // Auth-protected pages
    if (currentPage === Page.ADMIN_DASHBOARD) {
      return currentUser ? <AdminDashboardPage /> : <AdminLoginPage onLogin={handleLogin} />;
    }
    if (currentPage === Page.USER_MANAGEMENT) {
      return (currentUser?.role === 'superadmin') ? <UserManagementPage /> : <AdminLoginPage onLogin={handleLogin} />;
    }

    // Default to home page
    return <HomePage onNavigate={setCurrentPage} />;
  };

  return (
    <MainLayout
      currentPage={currentPage}
      currentUser={currentUser}
      onNavigate={setCurrentPage}
      onLogout={handleLogout}
    >
      {renderPage()}
    </MainLayout>
  );
};

export default App;

