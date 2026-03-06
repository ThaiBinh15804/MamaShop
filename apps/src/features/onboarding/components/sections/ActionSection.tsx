import React from 'react';
import { QuestionnaireActionSectionProps } from '@/features/onboarding/types';
import { cn } from '@/utils/cn';

/**
 * ActionSection component displays primary and optional secondary action buttons
 * for questionnaire navigation (e.g., Continue, Skip)
 */
export const ActionSection = React.forwardRef<HTMLDivElement, QuestionnaireActionSectionProps>(
  (
    {
      actionLabel = 'Continue',
      secondaryLabel,
      disabled = false,
      isLoading = false,
      onAction,
      onSecondaryAction,
      className,
    },
    ref
  ) => {
    const handleAction = () => {
      if (!disabled && !isLoading && onAction) {
        onAction();
      }
    };

    const handleSecondaryAction = () => {
      if (!disabled && !isLoading && onSecondaryAction) {
        onSecondaryAction();
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-4',
          className
        )}
      >
        {/* Primary button */}
        <button
          onClick={handleAction}
          disabled={disabled || isLoading}
          className={cn(
            'flex items-center justify-center gap-2 px-8 py-4 rounded-full',
            'font-semibold text-base transition-all duration-200',
            'font-[family-name:var(--typography/font/family/button,sans-serif)]',
            disabled || isLoading
              ? 'bg-[var(--button/primary/bg/bg-primary-disable,#f0eef0)] text-[var(--text/grey-light,#9c939d)] cursor-not-allowed'
              : 'bg-[var(--button/primary/bg/bg-primary-default,#b6349a)] text-white hover:bg-[var(--button/primary/bg/bg-primary-hover,#9d2a7e)] active:bg-[var(--button/primary/bg/bg-primary-active,#8a2268)]',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary,#b6349a)]'
          )}
        >
          {isLoading ? (
            <>
              <span className="inline-block animate-spin">⟳</span>
              <span>Loading...</span>
            </>
          ) : (
            <>
              <span>{actionLabel}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 10h10M13 7l3 3-3 3" />
              </svg>
            </>
          )}
        </button>

        {/* Secondary button (optional) */}
        {secondaryLabel && (
          <button
            onClick={handleSecondaryAction}
            disabled={disabled || isLoading}
            className={cn(
              'px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200',
              'font-[family-name:var(--typography/font/family/button,sans-serif)]',
              disabled || isLoading
                ? 'text-[var(--text/grey-light,#9c939d)] cursor-not-allowed'
                : 'text-[var(--text/black,#0d0c0d)] hover:bg-[var(--surface/grey-light,#f8f8f8)]',
              'focus:outline-none focus:ring-2 focus:ring-[var(--primary,#b6349a)]'
            )}
          >
            {secondaryLabel}
          </button>
        )}
      </div>
    );
  }
);

ActionSection.displayName = 'ActionSection';
