import React from 'react';
import { QuestionnaireOptionBadgeProps } from '@/features/onboarding/types';
import { cn } from '@/utils/cn';

/**
 * OptionBadge component for displaying selectable options in a questionnaire
 * Supports both icon-based (meal preferences) and text-based (goal options) variants
 */
export const OptionBadge = React.forwardRef<HTMLDivElement, QuestionnaireOptionBadgeProps>(
  (
    {
      id,
      label,
      icon,
      variant = 'text',
      selected = false,
      disabled = false,
      onClick,
      className,
    },
    ref
  ) => {
    const handleClick = () => {
      if (!disabled && onClick) {
        onClick(id);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        handleClick();
      }
    };

    // Icon variant: icon + label vertically stacked
    if (variant === 'icon') {
      return (
        <div
          ref={ref}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-selected={selected}
          aria-disabled={disabled}
          className={cn(
            'group flex flex-col items-center justify-center gap-2 rounded-2xl p-4 transition-all duration-200',
            'cursor-pointer select-none overflow-hidden',
            selected
              ? 'border-2 border-[var(--primary,#b6349a)] bg-[var(--surface/primary-light,#f3e8f0)] shadow-md'
              : 'border border-transparent bg-[var(--surface/grey-light,#f8f8f8)] hover:bg-[var(--surface/grey,#efefef)]',
            disabled && 'cursor-not-allowed opacity-50',
            className
          )}
        >
          {icon && (
            <img
              src={icon}
              alt={label}
              className="h-12 w-12 object-contain transition-transform duration-200 group-hover:scale-105"
            />
          )}
          <span
            className={cn(
              'text-center text-sm font-semibold transition-colors duration-200',
              selected ? 'text-[var(--primary,#b6349a)]' : 'text-[var(--text/black,#0d0c0d)]'
            )}
          >
            {label}
          </span>
        </div>
      );
    }

    // Text variant: label only, horizontally centered
    return (
      <div
        ref={ref}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-selected={selected}
        aria-disabled={disabled}
        className={cn(
          'flex items-center justify-center rounded-full px-4 py-3 transition-all duration-200',
          'cursor-pointer select-none overflow-hidden whitespace-nowrap',
          selected
            ? 'border-2 border-[var(--primary,#b6349a)] bg-[var(--surface/primary-light,#f3e8f0)] shadow-md'
            : 'border border-transparent bg-[var(--surface/grey-light,#f8f8f8)] hover:bg-[var(--surface/grey,#efefef)]',
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
      >
        <span
          className={cn(
            'font-semibold transition-colors duration-200',
            'text-sm',
            selected ? 'text-[var(--primary,#b6349a)]' : 'text-[var(--text/black,#0d0c0d)]'
          )}
        >
          {label}
        </span>
      </div>
    );
  }
);

OptionBadge.displayName = 'OptionBadge';
