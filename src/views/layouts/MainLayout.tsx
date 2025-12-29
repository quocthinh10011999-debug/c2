import React from 'react';
import { Page, AdminUser } from '../../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  currentPage: Page;
  currentUser: AdminUser | null;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  currentPage,
  currentUser,
  onNavigate,
  onLogout,
  children
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f2f5] selection:bg-mod-red selection:text-white">
      <Header
        currentPage={currentPage}
        onNavigate={onNavigate}
        isLoggedIn={!!currentUser}
        onLogout={onLogout}
        userRole={currentUser?.role}
      />
      <main className="flex-grow pb-12">
        {children}
      </main>
      <Footer onAdminClick={() => onNavigate(Page.ADMIN_LOGIN)} />
    </div>
  );
};

export default MainLayout;
