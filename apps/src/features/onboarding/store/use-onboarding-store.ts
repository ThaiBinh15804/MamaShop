'use client';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type {
  OnboardingState,
  OnboardingStore,
  QuestionSelection,
} from '../types';

const TOTAL_STEPS = 3;

const initialState: OnboardingState = {
  currentStep: 1,
  totalSteps: TOTAL_STEPS,
  selections: [],
  isComplete: false,
  // Hydration check: prevents loading persisted state during SSR
  isHydrated: false,
};

/**
 * Onboarding Store
 *
 * Manages onboarding flow state including:
 * - Current step tracking
 * - User selections for each question
 * - Navigation between steps
 * - Completion state
 * - Hydration guard to prevent SSR mismatches
 *
 * The `isHydrated` flag prevents loading localStorage data on the server,
 * which would cause hydration mismatches. Only after the component mounts
 * on the client does hydration resume.
 */
export const useOnboardingStore = create<OnboardingStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        // Hydration guard
        setHydrated: () => {
          set({ isHydrated: true });
        },

        // Navigation actions
        setStep: (step: number) => {
          const { totalSteps } = get();
          if (step >= 1 && step <= totalSteps) {
            set({ currentStep: step });
          }
        },

        nextStep: () => {
          const { currentStep, totalSteps } = get();
          if (currentStep < totalSteps) {
            set({ currentStep: currentStep + 1 });
          } else if (currentStep === totalSteps) {
            // Last step - complete onboarding
            get().completeOnboarding();
          }
        },

        previousStep: () => {
          const { currentStep } = get();
          if (currentStep > 1) {
            set({ currentStep: currentStep - 1 });
          }
        },

        // Selection management
        selectOptions: (questionId: string, optionIds: string[]) => {
          set((state) => {
            const selections = [...state.selections];
            const existingIndex = selections.findIndex(
              (s) => s.questionId === questionId,
            );

            const newSelection: QuestionSelection = {
              questionId,
              selectedOptionIds: optionIds,
            };

            if (existingIndex >= 0) {
              selections[existingIndex] = newSelection;
            } else {
              selections.push(newSelection);
            }

            return { selections };
          });
        },

        // Completion
        completeOnboarding: () => {
          set({
            isComplete: true,
            completedAt: new Date(),
          });
        },

        // Reset
        resetOnboarding: () => {
          set(initialState);
        },

        // Selectors
        getSelectionForQuestion: (questionId: string) => {
          const { selections } = get();
          const selection = selections.find((s) => s.questionId === questionId);
          return selection?.selectedOptionIds ?? [];
        },
      }),
      {
        name: 'onboarding-store', // Name in localStorage
        version: 1,
        // Skip hydration on server to prevent SSR/client mismatches
        // Only apply persistence after client-side hydration
        skipHydration: typeof window === 'undefined',
      },
    ),
    { name: 'OnboardingStore' },
  ),
);

// Re-export the type for convenience
export type { OnboardingStore };
