import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { OptionBadge } from './OptionBadge';

describe('OptionBadge', () => {
  describe('text variant', () => {
    it('renders label text', () => {
      render(
        <OptionBadge id="test-1" label="Test Option" variant="text" />
      );
      expect(screen.getByText('Test Option')).toBeInTheDocument();
    });

    it('shows selected state when selected prop is true', () => {
      const { container } = render(
        <OptionBadge id="test-1" label="Test Option" variant="text" selected={true} />
      );
      const badge = container.querySelector('[role="button"]');
      expect(badge).toHaveAttribute('aria-selected', 'true');
    });

    it('fires onClick callback when clicked', () => {
      const onClick = vi.fn();
      render(
        <OptionBadge id="test-1" label="Test Option" variant="text" onClick={onClick} />
      );
      fireEvent.click(screen.getByText('Test Option'));
      expect(onClick).toHaveBeenCalledWith('test-1');
    });

    it('does not fire onClick when disabled', () => {
      const onClick = vi.fn();
      render(
        <OptionBadge id="test-1" label="Test Option" variant="text" disabled={true} onClick={onClick} />
      );
      fireEvent.click(screen.getByText('Test Option'));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('icon variant', () => {
    it('renders label and icon', () => {
      render(
        <OptionBadge
          id="test-1"
          label="Mushroom"
          icon="/test-icon.svg"
          variant="icon"
        />
      );
      expect(screen.getByText('Mushroom')).toBeInTheDocument();
      expect(screen.getByAltText('Mushroom')).toBeInTheDocument();
    });

    it('fires onClick callback when clicked', () => {
      const onClick = vi.fn();
      render(
        <OptionBadge
          id="mushroom"
          label="Mushroom"
          icon="/test-icon.svg"
          variant="icon"
          onClick={onClick}
        />
      );
      fireEvent.click(screen.getByText('Mushroom'));
      expect(onClick).toHaveBeenCalledWith('mushroom');
    });

    it('does not fire onClick when disabled', () => {
      const onClick = vi.fn();
      render(
        <OptionBadge
          id="mushroom"
          label="Mushroom"
          icon="/test-icon.svg"
          variant="icon"
          disabled={true}
          onClick={onClick}
        />
      );
      fireEvent.click(screen.getByText('Mushroom'));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('accessibility', () => {
    it('has proper accessibility attributes', () => {
      const { container } = render(
        <OptionBadge id="test-1" label="Test" variant="text" selected={true} />
      );
      const badge = container.querySelector('[role="button"]');
      expect(badge).toHaveAttribute('role', 'button');
      expect(badge).toHaveAttribute('aria-selected', 'true');
      expect(badge).toHaveAttribute('aria-disabled', 'false');
    });

    it('supports keyboard interaction (Enter key)', () => {
      const onClick = vi.fn();
      const { container } = render(
        <OptionBadge id="test-1" label="Test" variant="text" onClick={onClick} />
      );
      const badge = container.querySelector('[role="button"]');
      fireEvent.keyDown(badge!, { key: 'Enter' });
      expect(onClick).toHaveBeenCalled();
    });

    it('supports keyboard interaction (Space key)', () => {
      const onClick = vi.fn();
      const { container } = render(
        <OptionBadge id="test-1" label="Test" variant="text" onClick={onClick} />
      );
      const badge = container.querySelector('[role="button"]');
      fireEvent.keyDown(badge!, { key: ' ' });
      expect(onClick).toHaveBeenCalled();
    });
  });
});
