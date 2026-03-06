import React from 'react';
import { QuestionnaireHeaderSectionProps } from '@/features/onboarding/types';
import { ProgressBar } from '../ui/ProgressBar';
import { cn } from '@/utils/cn';

/**
 * HeaderSection component displays navigation controls and progress indicator
 * for multi-step questionnaire flows
 */
export const HeaderSection = React.forwardRef<HTMLDivElement, QuestionnaireHeaderSectionProps>(
  ({ showBackButton = true, progress = 0, onBack, className }, ref) => {
    const handleBackClick = () => {
      if (onBack) {
        onBack();
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col gap-6 items-start justify-center',
          className
        )}
      >
        {/* Back button and spacing */}
        {showBackButton && (
          <button
            onClick={handleBackClick}
            className={cn(
              'flex items-center justify-center h-12 w-12 rounded-full',
              'bg-white border border-[var(--button/tertiary/border/border-tertiary-default,#f0eef0)]',
              'text-[var(--text/black,#0d0c0d)] transition-all duration-200',
              'hover:bg-[var(--surface/grey-light,#f8f8f8)]',
              'focus:outline-none focus:ring-2 focus:ring-[var(--primary,#b6349a)]',
              'cursor-pointer'
            )}
            aria-label="Go back"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Progress bar */}
        <ProgressBar progress={progress} className="w-full" />
      </div>
    );
  }
);

HeaderSection.displayName = 'HeaderSection';
