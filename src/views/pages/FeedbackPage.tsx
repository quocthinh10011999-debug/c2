import React, { useState } from 'react';
import { FeedbackController } from '../../controllers/FeedbackController';
import Feedback from '../components/Feedback';

const FeedbackPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeedbackSubmit = async (feedbackData: {
    title: string;
    content: string;
    phoneNumber: string;
  }) => {
    setIsSubmitting(true);
    try {
      const result = await FeedbackController.submitFeedback(feedbackData);
      if (result.success) {
        alert('Gửi góp ý thành công! Cảm ơn bạn đã đóng góp ý kiến.');
      } else {
        alert(result.error || 'Có lỗi xảy ra khi gửi góp ý');
      }
    } catch (error) {
      alert('Có lỗi xảy ra khi gửi góp ý');
    } finally {
      setIsSubmitting(false);
    }
  };

  return <Feedback />;
};

export default FeedbackPage;
