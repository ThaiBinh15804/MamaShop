'use client';

import React, { useEffect } from 'react';

import { SPACING } from '@/lib/design-tokens';

import { getQuestionByStep } from '../config';
import { useOnboardingStore } from '../store';

import { OnboardingNavigation } from './onboarding-navigation';
import { OnboardingProgress } from './onboarding-progress';
import { OnboardingQuestion } from './onboarding-question';

export interface OnboardingFlowProps {
  /** Callback when onboarding is completed */
  onComplete?: () => void;

  /** Optional classname for styling */
  className?: string;
}

/**
 * OnboardingFlow Container Component
 *
 * Orchestrates the complete onboarding flow:
 * - Displays current question based on step
 * - Manages navigation (previous/next/complete)
 * - Shows progress indicator
 * - Persists selections in store
 *
 * Hydration Guard:
 * - Calls setHydrated after component mounts to signal client-side readiness
 * - Prevents rendering on server to avoid SSR/hydration mismatches
 * - Ensures localStorage data is applied only after hydration
 *
 * @example
 * ```tsx
 * <OnboardingFlow onComplete={() => router.push('/home')} />
 * ```
 */
export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({
  onComplete,
  className,
}) => {
  const { currentStep, totalSteps, isComplete, isHydrated, setHydrated } =
    useOnboardingStore();

  // Hydration guard: Signal that component has mounted on client
  useEffect(() => {
    setHydrated();
  }, [setHydrated]);

  // Execute callback when onboarding is completed
  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  // Prevent rendering on server before hydration
  // Return null or loading state while !isHydrated on server
  if (!isHydrated) {
    return null;
  }

  // Get current question based on step
  const currentQuestion = getQuestionByStep(currentStep);

  if (!currentQuestion) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-neutral-600">Question not found</p>
      </div>
    );
  }

  return (
    <div
      className={`mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-8 ${className || ''}`}
      style={{
        gap: SPACING[8],
      }}
    >
      {/* Progress Indicator */}
      <OnboardingProgress currentStep={currentStep} totalSteps={totalSteps} />

      {/* Question Content */}
      <OnboardingQuestion question={currentQuestion} />

      {/* Navigation Controls */}
      <OnboardingNavigation currentStep={currentStep} totalSteps={totalSteps} />
    </div>
  );
};

OnboardingFlow.displayName = 'OnboardingFlow';
