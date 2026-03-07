'use client';

import React, { useCallback } from 'react';

import { COLORS, SPACING, BORDER_RADIUS } from '@/lib/design-tokens';

import { useOnboardingStore } from '../store';

export interface OnboardingNavigationProps {
  /** Current step number */
  currentStep: number;

  /** Total number of steps */
  totalSteps: number;

  /** Callback when all steps are complete */
  onComplete?: () => void;
}

/**
 * OnboardingNavigation Component
 *
 * Provides navigation controls for the onboarding flow:
 * - Back button (on steps 2+)
 * - Continue button (advances to next step or completes)
 *
 * @example
 * ```tsx
 * <OnboardingNavigation currentStep={1} totalSteps={3} />
 * ```
 */
export const OnboardingNavigation: React.FC<OnboardingNavigationProps> = ({
  currentStep,
  totalSteps,
  onComplete,
}) => {
  const {
    nextStep,
    previousStep,
    completeOnboarding,
    getSelectionForQuestion,
  } = useOnboardingStore();

  // Check if user has made at least one selection on current question
  const getCurrentQuestionId = useCallback((): string => {
    const questionIds = ['meal-preferences', 'goals', 'party-size'];
    return questionIds[currentStep - 1] ?? '';
  }, [currentStep]);

  const currentQuestionId = getCurrentQuestionId();
  const hasSelections = getSelectionForQuestion(currentQuestionId).length > 0;

  const handleContinue = useCallback(() => {
    if (currentStep === totalSteps) {
      completeOnboarding();
      onComplete?.();
    } else {
      nextStep();
    }
  }, [currentStep, totalSteps, completeOnboarding, nextStep, onComplete]);

  const handleBack = useCallback(() => {
    previousStep();
  }, [previousStep]);

  const isLastStep = currentStep === totalSteps;

  return (
    <div
      className="flex w-full items-center justify-between gap-4"
      style={{
        gap: SPACING[4],
      }}
    >
      {/* Back Button */}
      {currentStep > 1 && (
        <button
          onClick={handleBack}
          className="rounded-lg px-6 py-3 font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
          style={{
            backgroundColor: COLORS.NEUTRAL_100,
            color: COLORS.TEXT_PRIMARY,
            padding: `${SPACING['3']} ${SPACING['6']}`,
            borderRadius: BORDER_RADIUS.LG,
            fontSize: '14px',
            fontWeight: 600,
          }}
          aria-label="Go back to previous question"
        >
          Back
        </button>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Continue/Submit Button */}
      <button
        onClick={handleContinue}
        disabled={!hasSelections}
        className={`rounded-lg px-6 py-3 font-semibold transition-all ${
          hasSelections
            ? 'bg-primary-600 text-white hover:bg-primary-700 active:scale-95'
            : 'cursor-not-allowed bg-neutral-300 text-neutral-500'
        }`}
        style={{
          backgroundColor: hasSelections
            ? COLORS.PRIMARY_600
            : COLORS.NEUTRAL_300,
          color: hasSelections ? COLORS.TEXT_INVERSE : COLORS.TEXT_DISABLED,
          padding: `${SPACING['3']} ${SPACING['6']}`,
          borderRadius: BORDER_RADIUS.LG,
          fontSize: '14px',
          fontWeight: 600,
          cursor: hasSelections ? 'pointer' : 'not-allowed',
          opacity: hasSelections ? 1 : 0.6,
        }}
        aria-label={
          isLastStep ? 'Complete onboarding' : 'Continue to next question'
        }
      >
        {isLastStep ? 'Complete' : 'Continue'}
      </button>
    </div>
  );
};

OnboardingNavigation.displayName = 'OnboardingNavigation';
