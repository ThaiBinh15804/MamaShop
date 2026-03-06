import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeaderSection } from './HeaderSection';

describe('HeaderSection', () => {
  it('renders with progress bar', () => {
    const { container } = render(
      <HeaderSection progress={50} />
    );
    const progressbar = container.querySelector('[role="progressbar"]');
    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveAttribute('aria-valuenow', '50');
  });

  it('renders back button when showBackButton is true', () => {
    render(
      <HeaderSection progress={50} showBackButton={true} />
    );
    const backButton = screen.getByLabelText('Go back');
    expect(backButton).toBeInTheDocument();
  });

  it('does not render back button when showBackButton is false', () => {
    render(
      <HeaderSection progress={50} showBackButton={false} />
    );
    const backButton = screen.queryByLabelText('Go back');
    expect(backButton).not.toBeInTheDocument();
  });

  it('calls onBack callback when back button is clicked', () => {
    const onBack = vi.fn();
    render(
      <HeaderSection progress={50} showBackButton={true} onBack={onBack} />
    );
    const backButton = screen.getByLabelText('Go back');
    fireEvent.click(backButton);
    expect(onBack).toHaveBeenCalled();
  });

  it('updates progress bar when progress prop changes', () => {
    const { container, rerender } = render(
      <HeaderSection progress={25} />
    );
    let progressbar = container.querySelector('[role="progressbar"]');
    expect(progressbar).toHaveAttribute('aria-valuenow', '25');

    rerender(<HeaderSection progress={75} />);
    progressbar = container.querySelector('[role="progressbar"]');
    expect(progressbar).toHaveAttribute('aria-valuenow', '75');
  });

  it('applies custom className', () => {
    const { container } = render(
      <HeaderSection progress={50} className="custom-class" />
    );
    const header = container.firstChild;
    expect(header).toHaveClass('custom-class');
  });
});
