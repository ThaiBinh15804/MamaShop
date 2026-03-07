/**
 * Onboarding Feature Module - Barrel Export
 *
 * Complete exports for the onboarding feature including:
 * - Components (OnboardingFlow, OnboardingQuestion, Progress, Navigation)
 * - Types (OnboardingQuestion type, OnboardingOption, OnboardingState)
 * - Store (useOnboardingStore)
 * - Configuration (questions, helpers)
 * - Mocks (for testing)
 */

// Main Components
export {
  OnboardingFlow,
  OnboardingProgress,
  OnboardingNavigation,
  MealIcon,
  OnboardingQuestion,
  type OnboardingFlowProps,
  type OnboardingProgressProps,
  type OnboardingNavigationProps,
  type MealIconProps,
  type OnboardingQuestionProps,
} from './components';

// Store
export { useOnboardingStore, type OnboardingStore } from './store';

// Types
export type {
  OnboardingQuestion as OnboardingQuestionType,
  OnboardingOption,
  OnboardingState,
  QuestionSelection,
  OnboardingActions,
} from './types';

// Configuration
export {
  ONBOARDING_QUESTIONS,
  getQuestionById,
  getQuestionByStep,
  getTotalQuestions,
} from './config';

// Mocks
export {
  mockOnboardingData,
  saveOnboardingResponses,
  getMockQuestion,
  generateRandomSelections,
} from './__mocks__/onboarding';
