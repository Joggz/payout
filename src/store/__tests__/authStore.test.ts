
import { describe, it, expect, beforeEach } from 'vitest';
import { useAuthStore } from '../authStore';

describe('authStore', () => {
  beforeEach(() => {
    // Reset store state before each test
    useAuthStore.setState({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  });

  it('initializes with correct default state', () => {
    const state = useAuthStore.getState();
    
    expect(state.user).toBe(null);
    expect(state.token).toBe(null);
    expect(state.isAuthenticated).toBe(false);
  });

  it('successfully logs in with correct credentials', async () => {
    const state = useAuthStore.getState();
    const result = await state.login('admin@example.com', 'password');
    
    expect(result).toBe(true);
    
    const newState = useAuthStore.getState();
    expect(newState.isAuthenticated).toBe(true);
    expect(newState.user).toEqual({
      id: '1',
      email: 'admin@example.com',
      name: 'Admin User',
    });
    expect(newState.token).toBe('mock-jwt-token');
  });

  it('fails login with incorrect credentials', async () => {
    const state = useAuthStore.getState();
    const result = await state.login('wrong@email.com', 'wrongpassword');
    
    expect(result).toBe(false);
    
    const newState = useAuthStore.getState();
    expect(newState.isAuthenticated).toBe(false);
    expect(newState.user).toBe(null);
    expect(newState.token).toBe(null);
  });

  it('logs out user correctly', () => {
    // First login
    useAuthStore.setState({
      user: { id: '1', email: 'test@example.com', name: 'Test User' },
      token: 'test-token',
      isAuthenticated: true,
    });
    
    const state = useAuthStore.getState();
    state.logout();
    
    const newState = useAuthStore.getState();
    expect(newState.user).toBe(null);
    expect(newState.token).toBe(null);
    expect(newState.isAuthenticated).toBe(false);
  });

  it('sets user correctly', () => {
    const state = useAuthStore.getState();
    const testUser = { id: '2', email: 'new@example.com', name: 'New User' };
    const testToken = 'new-token';
    
    state.setUser(testUser, testToken);
    
    const newState = useAuthStore.getState();
    expect(newState.user).toEqual(testUser);
    expect(newState.token).toBe(testToken);
    expect(newState.isAuthenticated).toBe(true);
  });
});
