/**
 * Onboarding Feature-Specific Mock Data & Handlers
 * Used for development and testing without real API integration
 *
 * For shared mock data structures, see src/assets/mocks/onboarding-mocks.ts
 */

import {
  defaultOnboardingState,
  completedOnboardingState,
  partialOnboardingState,
} from '@/assets/mocks/onboarding-mocks';

import { ONBOARDING_QUESTIONS } from '../config';
import type {
  OnboardingQuestion,
  OnboardingState,
  QuestionSelection,
} from '../types';

/**
 * Re-export shared mock data for convenience
 */
export {
  defaultOnboardingState,
  completedOnboardingState,
  partialOnboardingState,
};

/**
 * Mock onboarding responses (combining shared and feature-specific states)
 */
export const mockOnboardingData = {
  defaultState: defaultOnboardingState,
  completedState: completedOnboardingState,
  partialState: partialOnboardingState,
};

/**
 * Simulates API call to save onboarding responses
 * In production, this would POST to /api/onboarding/complete
 * FEATURE-SPECIFIC: tailored to onboarding feature requirements
 */
export const saveOnboardingResponses = async (
  state: OnboardingState,
): Promise<{ success: boolean; message: string }> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Validate that all required questions have selections
  const requiredFields = ONBOARDING_QUESTIONS.map((q) => q.id);
  const selectedQuestions = state.selections.map((s) => s.questionId);

  const allQuestionsAnswered = requiredFields.every((field) =>
    selectedQuestions.includes(field),
  );

  if (!allQuestionsAnswered) {
    return {
      success: false,
      message: 'All questions must be answered',
    };
  }

  // In production, send to API: POST /api/onboarding/complete
  console.log('Onboarding responses saved:', state.selections);

  return {
    success: true,
    message: 'Onboarding completed successfully',
  };
};

/**
 * Get mock question by ID
 * FEATURE-SPECIFIC: uses onboarding feature questions
 */
export const getMockQuestion = (id: string): OnboardingQuestion | undefined => {
  return ONBOARDING_QUESTIONS.find((q) => q.id === id);
};

/**
 * Generate test data for all questions with random selections
 * FEATURE-SPECIFIC: uses onboarding feature question configuration
 */
export const generateRandomSelections = (): QuestionSelection[] => {
  return ONBOARDING_QUESTIONS.map((question) => {
    const optionIds = question.options.map((o) => o.id);

    let selectedIds: string[];
    if (question.selectionMode === 'single') {
      // Pick one random option
      selectedIds = [optionIds[Math.floor(Math.random() * optionIds.length)]];
    } else {
      // Pick 1-3 random options
      const count = Math.floor(Math.random() * 3) + 1;
      const shuffled = [...optionIds].sort(() => Math.random() - 0.5);
      selectedIds = shuffled.slice(0, count);
    }

    return {
      questionId: question.id,
      selectedOptionIds: selectedIds,
    };
  });
};
