import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ActionSection } from './ActionSection';

describe('ActionSection', () => {
  it('renders primary button with label', () => {
    render(
      <ActionSection actionLabel="Continue" />
    );
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('fires onAction callback when primary button is clicked', () => {
    const onAction = vi.fn();
    render(
      <ActionSection actionLabel="Continue" onAction={onAction} />
    );
    fireEvent.click(screen.getByText('Continue'));
    expect(onAction).toHaveBeenCalled();
  });

  it('renders secondary button when secondaryLabel is provided', () => {
    render(
      <ActionSection
        actionLabel="Continue"
        secondaryLabel="Skip"
      />
    );
    expect(screen.getByText('Skip')).toBeInTheDocument();
  });

  it('fires onSecondaryAction callback when secondary button is clicked', () => {
    const onSecondaryAction = vi.fn();
    render(
      <ActionSection
        actionLabel="Continue"
        secondaryLabel="Skip"
        onSecondaryAction={onSecondaryAction}
      />
    );
    fireEvent.click(screen.getByText('Skip'));
    expect(onSecondaryAction).toHaveBeenCalled();
  });

  it('does not fire callbacks when disabled', () => {
    const onAction = vi.fn();
    const onSecondaryAction = vi.fn();
    render(
      <ActionSection
        actionLabel="Continue"
        secondaryLabel="Skip"
        disabled={true}
        onAction={onAction}
        onSecondaryAction={onSecondaryAction}
      />
    );
    fireEvent.click(screen.getByText('Continue'));
    fireEvent.click(screen.getByText('Skip'));
    expect(onAction).not.toHaveBeenCalled();
    expect(onSecondaryAction).not.toHaveBeenCalled();
  });

  it('disables buttons when loading', () => {
    const { container } = render(
      <ActionSection
        actionLabel="Continue"
        isLoading={true}
      />
    );
    const buttons = container.querySelectorAll('button');
    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  it('shows loading indicator when isLoading is true', () => {
    render(
      <ActionSection
        actionLabel="Continue"
        isLoading={true}
      />
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ActionSection
        actionLabel="Continue"
        className="custom-class"
      />
    );
    const actionDiv = container.firstChild;
    expect(actionDiv).toHaveClass('custom-class');
  });
});
