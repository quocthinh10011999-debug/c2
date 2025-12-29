import { AdminUser, StoredAdminUser } from '../types';

export class UserModel {
  private static readonly STORAGE_KEY = 'military_admins';
  private static readonly SESSION_KEY = 'military_admin_session';

  static getAllUsers(): StoredAdminUser[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting users:', error);
      return [];
    }
  }

  static saveUsers(users: AdminUser[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    } catch (error) {
      console.error('Error saving users:', error);
    }
  }

  static addUser(user: StoredAdminUser): void {
    const users = this.getAllUsers();
    const newUser = { ...user, id: this.generateId() };
    users.push(newUser);
    this.saveUsers(users);
  }

  static removeUser(userId: string): void {
    const users = this.getAllUsers();
    const filteredUsers = users.filter(user => user.id !== userId);
    this.saveUsers(filteredUsers);
  }

  static findUserById(userId: string): AdminUser | undefined {
    const users = this.getAllUsers();
    return users.find(user => user.id === userId);
  }

  static authenticateUser(username: string, password: string): AdminUser | null {
    const users = this.getAllUsers();

    // Default admin account
    if (username === 'admin' && password === '123456') {
      return { id: '1', username: 'admin', role: 'superadmin', fullName: 'Quản trị viên' };
    }

    // Check stored users
    const user = users.find(u => u.username === username && (u.password === password || (!u.password && password === '123456')));
    if (user) {
      // Return AdminUser without password
      const { password, ...adminUser } = user;
      return adminUser;
    }
    return null;
  }

  static getCurrentSession(): AdminUser | null {
    try {
      const session = localStorage.getItem(this.SESSION_KEY);
      return session ? JSON.parse(session) : null;
    } catch (error) {
      console.error('Error getting session:', error);
      return null;
    }
  }

  static setCurrentSession(user: AdminUser): void {
    try {
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
    } catch (error) {
      console.error('Error setting session:', error);
    }
  }

  static clearCurrentSession(): void {
    try {
      localStorage.removeItem(this.SESSION_KEY);
    } catch (error) {
      console.error('Error clearing session:', error);
    }
  }

  private static generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
