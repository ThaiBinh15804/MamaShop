'use client';

import React from 'react';

import { COLORS, BORDER_RADIUS } from '@/lib/design-tokens';

export interface OnboardingProgressProps {
  /** Current step number (1-based) */
  currentStep: number;

  /** Total number of steps */
  totalSteps: number;
}

/**
 * OnboardingProgress Component
 *
 * Displays a visual progress bar showing completion through the onboarding flow.
 * Automatically calculates progress percentage based on current step.
 *
 * @example
 * ```tsx
 * <OnboardingProgress currentStep={2} totalSteps={3} />
 * ```
 */
export const OnboardingProgress: React.FC<OnboardingProgressProps> = ({
  currentStep,
  totalSteps,
}) => {
  // Calculate progress percentage
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="flex w-full flex-col gap-2">
      <div
        className="relative h-3 w-full overflow-hidden rounded-full"
        style={{
          backgroundColor: COLORS.NEUTRAL_200,
          height: '12px',
          borderRadius: BORDER_RADIUS.FULL,
          overflow: 'hidden',
        }}
      >
        {/* Progress fill */}
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{
            backgroundColor: COLORS.PRIMARY_600,
            width: `${progressPercentage}%`,
            borderRadius: BORDER_RADIUS.FULL,
            height: '12px',
          }}
        />
      </div>

      {/* Step indicator */}
      <div
        className="text-center text-xs text-neutral-600"
        style={{
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: '16px',
        }}
      >
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
};

OnboardingProgress.displayName = 'OnboardingProgress';
