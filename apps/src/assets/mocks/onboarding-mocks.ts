/**
 * Shared Onboarding Mock Data
 *
 * This file contains common mock data structures and utilities for onboarding tests.
 * It's shared across different parts of the application that need onboarding test data.
 *
 * Feature-specific mocks should remain in src/features/onboarding/__mocks__/
 */

import type {
  OnboardingState,
  QuestionSelection,
} from '../../features/onboarding/types';

/**
 * Default empty onboarding state for tests
 */
export const defaultOnboardingState: OnboardingState = {
  currentStep: 1,
  totalSteps: 3,
  selections: [] as QuestionSelection[],
  isComplete: false,
  isHydrated: true,
};

/**
 * Completed onboarding state with all questions answered
 * Useful for testing post-onboarding flows
 */
export const completedOnboardingState: OnboardingState = {
  currentStep: 3,
  totalSteps: 3,
  selections: [
    {
      questionId: 'meal-preferences',
      selectedOptionIds: ['pizza', 'spaghetti', 'chicken'],
    },
    {
      questionId: 'goals',
      selectedOptionIds: ['browse-recipes', 'plan-meals'],
    },
    {
      questionId: 'party-size',
      selectedOptionIds: ['two-people'],
    },
  ],
  isComplete: true,
  completedAt: new Date('2024-01-15'),
  isHydrated: true,
};

/**
 * Partial onboarding state with only first question answered
 * Useful for testing mid-flow scenarios
 */
export const partialOnboardingState: OnboardingState = {
  currentStep: 2,
  totalSteps: 3,
  selections: [
    {
      questionId: 'meal-preferences',
      selectedOptionIds: ['pizza'],
    },
  ],
  isComplete: false,
  isHydrated: true,
};
