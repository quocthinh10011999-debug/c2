import React, { useState, useEffect } from 'react';
import { VisitorInfo, FeedbackMessage, RegistrationStatus } from '../../types';
import { RegistrationController } from '../../controllers/RegistrationController';
import { FeedbackController } from '../../controllers/FeedbackController';
import AdminDashboard from '../components/AdminDashboard';

const AdminDashboardPage: React.FC = () => {
  const [registrations, setRegistrations] = useState<VisitorInfo[]>([]);
  const [feedbacks, setFeedbacks] = useState<FeedbackMessage[]>([]);
  const [activeTab, setActiveTab] = useState<'reg' | 'feedback'>('reg');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setRegistrations(RegistrationController.getAllRegistrations());
    setFeedbacks(FeedbackController.getAllFeedbacks());
  };

  const handleUpdateRegistrationStatus = async (id: string, status: RegistrationStatus) => {
    const result = await RegistrationController.updateRegistrationStatus(id, status);
    if (result.success) {
      loadData(); // Reload data
    } else {
      alert(result.error || 'Cập nhật thất bại');
    }
  };

  const handleRemoveFeedback = async (id: string) => {
    const result = await FeedbackController.removeFeedback(id);
    if (result.success) {
      loadData(); // Reload data
    } else {
      alert(result.error || 'Xóa thất bại');
    }
  };

  return (
    <AdminDashboard
      registrations={registrations}
      feedbacks={feedbacks}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onUpdateRegistrationStatus={handleUpdateRegistrationStatus}
      onRemoveFeedback={handleRemoveFeedback}
    />
  );
};

export default AdminDashboardPage;
