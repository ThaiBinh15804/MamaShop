/**
 * Onboarding Components - Barrel Export
 */

export { OnboardingFlow, type OnboardingFlowProps } from './onboarding-flow';
export {
  OnboardingQuestion,
  type OnboardingQuestionProps,
} from './onboarding-question';
export {
  OnboardingProgress,
  type OnboardingProgressProps,
} from './onboarding-progress';
export {
  OnboardingNavigation,
  type OnboardingNavigationProps,
} from './onboarding-navigation';

// MealIcon is now in @/assets/icons - re-export for backward compatibility
export { MealIcon, type MealIconProps } from '@/assets/icons';
