import { FeedbackMessage } from '../types';
import { FeedbackModel } from '../models/FeedbackModel';

export class FeedbackController {
  static async submitFeedback(feedbackData: {
    title: string;
    content: string;
    phoneNumber: string;
  }): Promise<{ success: boolean; feedback?: FeedbackMessage; error?: string }> {
    try {
      // Validate input
      const validation = this.validateFeedbackData(feedbackData);
      if (!validation.valid) {
        return { success: false, error: validation.error };
      }

      // Create feedback
      const feedback = FeedbackModel.addFeedback(feedbackData);
      return { success: true, feedback };
    } catch (error) {
      console.error('Feedback submission error:', error);
      return { success: false, error: 'Có lỗi xảy ra khi gửi góp ý' };
    }
  }

  static async removeFeedback(feedbackId: string): Promise<{ success: boolean; error?: string }> {
    try {
      const success = FeedbackModel.removeFeedback(feedbackId);
      if (!success) {
        return { success: false, error: 'Không tìm thấy góp ý cần xóa' };
      }
      return { success: true };
    } catch (error) {
      console.error('Remove feedback error:', error);
      return { success: false, error: 'Có lỗi xảy ra khi xóa góp ý' };
    }
  }

  static getAllFeedbacks(): FeedbackMessage[] {
    return FeedbackModel.getAllFeedbacks();
  }

  static getRecentFeedbacks(limit: number = 10): FeedbackMessage[] {
    return FeedbackModel.getRecentFeedbacks(limit);
  }

  static searchFeedbacks(query: string): FeedbackMessage[] {
    return FeedbackModel.searchFeedbacks(query);
  }

  static getFeedbackStats(): { total: number; recent: number } {
    return FeedbackModel.getFeedbackStats();
  }

  private static validateFeedbackData(data: any): { valid: boolean; error?: string } {
    if (!data.title?.trim()) {
      return { valid: false, error: 'Vui lòng nhập tiêu đề' };
    }

    if (!data.content?.trim()) {
      return { valid: false, error: 'Vui lòng nhập nội dung góp ý' };
    }

    if (!data.phoneNumber?.trim()) {
      return { valid: false, error: 'Vui lòng nhập số điện thoại' };
    }

    // Validate phone number format (basic)
    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(data.phoneNumber)) {
      return { valid: false, error: 'Số điện thoại không hợp lệ' };
    }

    // Validate content length
    if (data.content.length < 10) {
      return { valid: false, error: 'Nội dung góp ý phải có ít nhất 10 ký tự' };
    }

    if (data.title.length < 5) {
      return { valid: false, error: 'Tiêu đề phải có ít nhất 5 ký tự' };
    }

    return { valid: true };
  }
}
