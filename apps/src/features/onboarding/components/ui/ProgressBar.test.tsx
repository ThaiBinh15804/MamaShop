import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('renders with 0 progress', () => {
    const { container } = render(<ProgressBar progress={0} />);
    const progressDiv = container.querySelector('[role="progressbar"]');
    expect(progressDiv).toBeInTheDocument();
    expect(progressDiv).toHaveAttribute('aria-valuenow', '0');
  });

  it('renders with 50 progress', () => {
    const { container } = render(<ProgressBar progress={50} />);
    const progressDiv = container.querySelector('[role="progressbar"]');
    expect(progressDiv).toHaveAttribute('aria-valuenow', '50');
  });

  it('renders with 100 progress', () => {
    const { container } = render(<ProgressBar progress={100} />);
    const progressDiv = container.querySelector('[role="progressbar"]');
    expect(progressDiv).toHaveAttribute('aria-valuenow', '100');
  });

  it('clamps progress to 0-100 range', () => {
    const { container: containerUnder } = render(<ProgressBar progress={-10} />);
    expect(containerUnder.querySelector('[role="progressbar"]')).toHaveAttribute('aria-valuenow', '0');

    const { container: containerOver } = render(<ProgressBar progress={150} />);
    expect(containerOver.querySelector('[role="progressbar"]')).toHaveAttribute('aria-valuenow', '100');
  });

  it('applies custom className', () => {
    const { container } = render(<ProgressBar progress={50} className="custom-class" />);
    const progressDiv = container.querySelector('[role="progressbar"]');
    expect(progressDiv).toHaveClass('custom-class');
  });

  it('has proper accessibility attributes', () => {
    const { container } = render(<ProgressBar progress={50} />);
    const progressDiv = container.querySelector('[role="progressbar"]');
    expect(progressDiv).toHaveAttribute('aria-valuemin', '0');
    expect(progressDiv).toHaveAttribute('aria-valuemax', '100');
    expect(progressDiv).toHaveAttribute('aria-valuenow', '50');
  });
});
