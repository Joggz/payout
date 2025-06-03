
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../../test/test-utils';
import LoginForm from '../LoginForm';
import { useAuthStore } from '../../store/authStore';

// Mock the auth store
vi.mock('../../store/authStore');
const mockLogin = vi.fn();
const mockUseAuthStore = useAuthStore as any;

// Mock react-router-dom
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseAuthStore.mockReturnValue({
      login: mockLogin,
    });
  });

  it('renders login form with email and password fields', () => {
    render(<LoginForm />);
    
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('shows demo credentials', () => {
    render(<LoginForm />);
    
    expect(screen.getByText(/demo credentials/i)).toBeInTheDocument();
  });

  it('calls login function on form submission', async () => {
    mockLogin.mockResolvedValue(true);
    
    render(<LoginForm />);
    
    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });

  it('navigates to dashboard on successful login', async () => {
    mockLogin.mockResolvedValue(true);
    
    render(<LoginForm />);
    
    const submitButton = screen.getByRole('button', { name: /sign in/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });
});
