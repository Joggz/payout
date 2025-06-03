
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../test/test-utils';
import ProtectedRoute from '../ProtectedRoute';
import { useAuthStore } from '../../store/authStore';

// Mock the auth store
vi.mock('../../store/authStore');
const mockUseAuthStore = useAuthStore as any;

// Mock react-router-dom Navigate component
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    Navigate: ({ to }: { to: string }) => <div data-testid="navigate" data-to={to} />,
  };
});

describe('ProtectedRoute', () => {
  it('renders children when authenticated', () => {
    mockUseAuthStore.mockReturnValue({
      isAuthenticated: true,
    });

    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByText('Protected Content')).toBeInTheDocument();
  });

  it('redirects to login when not authenticated', () => {
    mockUseAuthStore.mockReturnValue({
      isAuthenticated: false,
    });

    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
    const navigate = screen.getByTestId('navigate');
    expect(navigate).toHaveAttribute('data-to', '/login');
  });
});
