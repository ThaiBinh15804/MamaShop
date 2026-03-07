/**
 * Onboarding Feature Types
 * Type definitions for onboarding flow state and components
 */

/**
 * Represents a single answer option in a question
 */
export interface OnboardingOption {
  id: string;
  label: string;
  icon?: string; // Icon name or SVG path
}

/**
 * Represents a complete question in the onboarding flow
 */
export interface OnboardingQuestion {
  id: string;
  title: string;
  description?: string;
  selectionMode: 'single' | 'multiple';
  options: OnboardingOption[];
  stepNumber?: number;
}

/**
 * Represents user selections for a specific question
 */
export interface QuestionSelection {
  questionId: string;
  selectedOptionIds: string[];
}

/**
 * Complete onboarding state containing all user selections and hydration status
 */
export interface OnboardingState {
  currentStep: number;
  totalSteps: number;
  selections: QuestionSelection[];
  isComplete: boolean;
  completedAt?: Date;
  /**
   * Hydration guard: prevents loading persisted state during SSR
   * Set to true after client-side mount to signal ready to accept hydrated data
   */
  isHydrated: boolean;
}

/**
 * Actions for onboarding store
 */
export interface OnboardingActions {
  setStep: (step: number) => void;
  nextStep: () => void;
  previousStep: () => void;
  selectOptions: (questionId: string, optionIds: string[]) => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  getSelectionForQuestion: (questionId: string) => string[];
  /**
   * Mark store as hydrated after client-side mount.
   * This enables persistence to load from localStorage after SSR.
   */
  setHydrated: () => void;
}

/**
 * Complete onboarding store type
 */
export interface OnboardingStore extends OnboardingState, OnboardingActions {}
