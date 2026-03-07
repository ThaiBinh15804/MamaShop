/**
 * Onboarding Questions Configuration
 *
 * All questions for the onboarding flow are defined here.
 * Questions can be extended or reordered without modifying component logic.
 */

import type { OnboardingQuestion } from '../types';

export const ONBOARDING_QUESTIONS: OnboardingQuestion[] = [
  {
    id: 'meal-preferences',
    stepNumber: 1,
    title: 'What kind of meals do you prefer?',
    description: 'Select all that apply',
    selectionMode: 'multiple',
    options: [
      {
        id: 'mushroom',
        label: 'Mushroom',
        icon: 'mushroom',
      },
      {
        id: 'fish',
        label: 'Fish',
        icon: 'fish',
      },
      {
        id: 'ham',
        label: 'Ham',
        icon: 'ham',
      },
      {
        id: 'meat',
        label: 'Meat',
        icon: 'meat',
      },
      {
        id: 'spaghetti',
        label: 'Spaghetti',
        icon: 'spaghetti',
      },
      {
        id: 'shrimp',
        label: 'Shrimp',
        icon: 'shrimp',
      },
      {
        id: 'pizza',
        label: 'Pizza',
        icon: 'pizza',
      },
      {
        id: 'chicken',
        label: 'Chicken',
        icon: 'chicken',
      },
    ],
  },
  {
    id: 'goals',
    stepNumber: 2,
    title: 'What are your goals with EasyMart?',
    description: 'Select what you want to achieve',
    selectionMode: 'multiple',
    options: [
      {
        id: 'browse-recipes',
        label: 'Browse recipes',
      },
      {
        id: 'plan-meals',
        label: 'Plan meals',
      },
      {
        id: 'find-ingredients',
        label: 'Find ingredients',
      },
      {
        id: 'save-favorites',
        label: 'Save favorites',
      },
      {
        id: 'meal-prep',
        label: 'Meal prep',
      },
      {
        id: 'dietary-needs',
        label: 'Handle dietary needs',
      },
    ],
  },
  {
    id: 'party-size',
    stepNumber: 3,
    title: 'How many people will be eating at the table?',
    description: 'This helps us personalize portions',
    selectionMode: 'single',
    options: [
      {
        id: 'just-me',
        label: 'Just me',
      },
      {
        id: 'two-people',
        label: '2 people',
      },
      {
        id: 'three-four',
        label: '3-4 people',
      },
      {
        id: 'five-plus',
        label: '5+ people',
      },
    ],
  },
];

/**
 * Get a question by ID
 */
export const getQuestionById = (id: string): OnboardingQuestion | undefined => {
  return ONBOARDING_QUESTIONS.find((q) => q.id === id);
};

/**
 * Get question by step number
 */
export const getQuestionByStep = (
  step: number,
): OnboardingQuestion | undefined => {
  return ONBOARDING_QUESTIONS.find((q) => q.stepNumber === step);
};

/**
 * Get total number of questions
 */
export const getTotalQuestions = (): number => {
  return ONBOARDING_QUESTIONS.length;
};
