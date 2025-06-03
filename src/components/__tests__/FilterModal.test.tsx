
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../test/test-utils';
import FilterModal from '../FilterModal';

describe('FilterModal', () => {
  const mockOnClose = vi.fn();
  const mockOnApplyFilters = vi.fn();

  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    onApplyFilters: mockOnApplyFilters,
    title: 'Test Filters',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders when open', () => {
    render(<FilterModal {...defaultProps} />);
    
    expect(screen.getByText('Test Filters')).toBeInTheDocument();
    expect(screen.getByText('Filters')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<FilterModal {...defaultProps} isOpen={false} />);
    
    expect(screen.queryByText('Test Filters')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(<FilterModal {...defaultProps} />);
    
    const closeButton = screen.getByLabelText(/close/i);
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onApplyFilters when apply button is clicked', () => {
    render(<FilterModal {...defaultProps} />);
    
    const applyButton = screen.getByText('Apply Filters');
    fireEvent.click(applyButton);
    
    expect(mockOnApplyFilters).toHaveBeenCalled();
  });

  it('allows date range selection', () => {
    render(<FilterModal {...defaultProps} />);
    
    expect(screen.getByLabelText(/start date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/end date/i)).toBeInTheDocument();
  });

  it('allows status selection', () => {
    render(<FilterModal {...defaultProps} />);
    
    expect(screen.getByLabelText(/status/i)).toBeInTheDocument();
  });
});
