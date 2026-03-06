import { QuestionnaireQuestion } from '../types';

/**
 * Mock questionnaire data for onboarding flow
 * Two questions: meal preferences (Q1) and user goals (Q2)
 */

export const mealPreferenceQuestion: QuestionnaireQuestion = {
  id: 'meal-preferences',
  title: 'What kind of meals do you prefer?',
  description: undefined,
  type: 'single-select',
  options: [
    {
      id: 'mushroom',
      label: 'Mushroom',
      icon: '',
    },
    {
      id: 'fish',
      label: 'Fish',
      icon: 'http://localhost:3845/assets/meal-fish.svg',
    },
    {
      id: 'ham',
      label: 'Ham',
      icon: 'http://localhost:3845/assets/meal-ham.svg',
    },
    {
      id: 'meat',
      label: 'Meat',
      icon: 'http://localhost:3845/assets/meal-meat.svg',
    },
    {
      id: 'spaghettis',
      label: 'Spaghettis',
      icon: 'http://localhost:3845/assets/meal-spaghetti.svg',
    },
    {
      id: 'shrimp',
      label: 'Shrimp',
      icon: 'http://localhost:3845/assets/meal-shrimp.svg',
    },
    {
      id: 'pizza',
      label: 'Pizza',
      icon: 'http://localhost:3845/assets/meal-pizza.svg',
    },
    {
      id: 'chicken',
      label: 'Chicken',
      icon: 'http://localhost:3845/assets/meal-chicken.svg',
    },
  ],
};

export const userGoalsQuestion: QuestionnaireQuestion = {
  id: 'user-goals',
  title: 'What are your goals with EasyMart?',
  description: undefined,
  type: 'multi-select',
  maxSelections: 3,
  options: [
    {
      id: 'save-time',
      label: 'Save time on shopping',
    },
    {
      id: 'eat-healthier',
      label: 'Eat healthier',
    },
    {
      id: 'try-recipes',
      label: 'Try new recipes',
    },
    {
      id: 'save-money',
      label: 'Save money',
    },
    {
      id: 'meal-planning',
      label: 'Simplify meal planning',
    },
    {
      id: 'reduce-waste',
      label: 'Reduce food waste',
    },
  ],
};

/**
 * Complete questionnaire flow with all questions
 */
export const onboardingQuestionnaire: QuestionnaireQuestion[] = [
  mealPreferenceQuestion,
  userGoalsQuestion,
];
