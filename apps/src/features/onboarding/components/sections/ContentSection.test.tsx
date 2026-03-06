import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContentSection } from './ContentSection';

describe('ContentSection', () => {
  const textOptions = [
    { id: 'opt1', label: 'Option 1' },
    { id: 'opt2', label: 'Option 2' },
    { id: 'opt3', label: 'Option 3' },
  ];

  it('renders title and description', () => {
    render(
      <ContentSection
        title="Test Question"
        description="Test description"
        options={textOptions}
      />
    );
    expect(screen.getByText('Test Question')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders all option badges', () => {
    render(
      <ContentSection
        title="Test Question"
        options={textOptions}
      />
    );
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('fires onOptionSelect callback when option is clicked', () => {
    const onOptionSelect = vi.fn();
    render(
      <ContentSection
        title="Test Question"
        options={textOptions}
        onOptionSelect={onOptionSelect}
      />
    );
    fireEvent.click(screen.getByText('Option 1'));
    expect(onOptionSelect).toHaveBeenCalledWith('opt1');
  });

  it('marks selected options as selected', () => {
    const { container } = render(
      <ContentSection
        title="Test Question"
        options={textOptions}
        selectedOptions={['opt1', 'opt2']}
      />
    );
    const buttons = container.querySelectorAll('[role="button"]');
    expect(buttons[0]).toHaveAttribute('aria-selected', 'true');
    expect(buttons[1]).toHaveAttribute('aria-selected', 'true');
    expect(buttons[2]).toHaveAttribute('aria-selected', 'false');
  });

  it('handles single-select mode', () => {
    const onOptionSelect = vi.fn();
    render(
      <ContentSection
        title="Test Question"
        options={textOptions}
        mode="single-select"
        selectedOptions="opt1"
        onOptionSelect={onOptionSelect}
      />
    );
    fireEvent.click(screen.getByText('Option 2'));
    expect(onOptionSelect).toHaveBeenCalledWith('opt2');
  });

  it('handles multi-select mode', () => {
    const onOptionSelect = vi.fn();
    render(
      <ContentSection
        title="Test Question"
        options={textOptions}
        mode="multi-select"
        selectedOptions={['opt1']}
        onOptionSelect={onOptionSelect}
      />
    );
    fireEvent.click(screen.getByText('Option 2'));
    expect(onOptionSelect).toHaveBeenCalledWith('opt2');
  });

  it('renders icon variant layout', () => {
    const iconOptions = [
      { id: 'opt1', label: 'Option 1', icon: '/icon.svg' },
      { id: 'opt2', label: 'Option 2', icon: '/icon.svg' },
    ];
    const { container } = render(
      <ContentSection
        title="Test Question"
        options={iconOptions}
        variant="icon"
      />
    );
    const optionsContainer = container.querySelector('[class*="grid"]');
    expect(optionsContainer).toBeInTheDocument();
  });
});
