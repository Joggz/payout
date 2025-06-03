
import { describe, it, expect } from 'vitest';
import { render, screen } from '../../test/test-utils';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  it('renders dashboard title and description', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Overview of your account activity')).toBeInTheDocument();
  });

  it('renders stats cards', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('Total Inward')).toBeInTheDocument();
    expect(screen.getByText('Total Outward')).toBeInTheDocument();
    expect(screen.getByText('Net Balance')).toBeInTheDocument();
    expect(screen.getByText('Growth')).toBeInTheDocument();
  });

  it('displays correct stat values', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('$124,580')).toBeInTheDocument();
    expect(screen.getByText('$89,420')).toBeInTheDocument();
    expect(screen.getByText('$35,160')).toBeInTheDocument();
    expect(screen.getByText('23.5%')).toBeInTheDocument();
  });

  it('renders recent transactions section', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('Recent Transactions')).toBeInTheDocument();
  });

  it('displays recent transaction items', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('$5,200')).toBeInTheDocument();
    expect(screen.getByText('$3,800')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });
});
