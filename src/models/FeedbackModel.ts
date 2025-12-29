import { FeedbackMessage } from '../types';

export class FeedbackModel {
  private static readonly STORAGE_KEY = 'military_feedbacks';

  static getAllFeedbacks(): FeedbackMessage[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting feedbacks:', error);
      return [];
    }
  }

  static saveFeedbacks(feedbacks: FeedbackMessage[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(feedbacks));
    } catch (error) {
      console.error('Error saving feedbacks:', error);
    }
  }

  static addFeedback(feedbackData: Omit<FeedbackMessage, 'id' | 'createdAt'>): FeedbackMessage {
    const feedbacks = this.getAllFeedbacks();
    const newFeedback: FeedbackMessage = {
      ...feedbackData,
      id: this.generateId(),
      createdAt: new Date().toISOString()
    };
    feedbacks.unshift(newFeedback); // Add to beginning
    this.saveFeedbacks(feedbacks);
    return newFeedback;
  }

  static removeFeedback(id: string): boolean {
    const feedbacks = this.getAllFeedbacks();
    const filteredFeedbacks = feedbacks.filter(fb => fb.id !== id);

    if (filteredFeedbacks.length === feedbacks.length) return false;

    this.saveFeedbacks(filteredFeedbacks);
    return true;
  }

  static getFeedbackById(id: string): FeedbackMessage | undefined {
    const feedbacks = this.getAllFeedbacks();
    return feedbacks.find(fb => fb.id === id);
  }

  static searchFeedbacks(query: string): FeedbackMessage[] {
    const feedbacks = this.getAllFeedbacks();
    const lowercaseQuery = query.toLowerCase();

    return feedbacks.filter(fb =>
      fb.title.toLowerCase().includes(lowercaseQuery) ||
      fb.content.toLowerCase().includes(lowercaseQuery) ||
      fb.phoneNumber.includes(query)
    );
  }

  static getRecentFeedbacks(limit: number = 10): FeedbackMessage[] {
    const feedbacks = this.getAllFeedbacks();
    return feedbacks.slice(0, limit);
  }

  static getFeedbackStats(): { total: number; recent: number } {
    const feedbacks = this.getAllFeedbacks();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    return {
      total: feedbacks.length,
      recent: feedbacks.filter(fb => new Date(fb.createdAt) > oneWeekAgo).length
    };
  }

  private static generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
