import React from 'react';
import { cn } from '@/utils/cn';

interface ProgressBarProps {
  progress: number; // 0-100
  className?: string;
}

/**
 * ProgressBar component displays a visual progress indicator
 * Uses design tokens for colors and sizing
 */
export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ progress = 0, className }, ref) => {
    // Clamp progress between 0 and 100
    const normalizedProgress = Math.min(Math.max(progress, 0), 100);

    return (
      <div
        ref={ref}
        className={cn(
          'relative h-3 w-full overflow-hidden rounded-full bg-[var(--main-colors/black/black-50,#f8f7f8)]',
          className
        )}
        role="progressbar"
        aria-valuenow={normalizedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Filled portion */}
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-[var(--primary,#b6349a)] transition-all duration-300 ease-out"
          style={{ width: `${normalizedProgress}%` }}
          aria-hidden="true"
        />
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';
