'use client';

import React, { useCallback } from 'react';

import { MealIcon, type MealIconProps } from '@/assets/icons';
import { ChoiceCard, ChoiceGrid } from '@/components/ui';
import { SPACING } from '@/lib/design-tokens';

import { useOnboardingStore } from '../store';
import type { OnboardingQuestion as OnboardingQuestionType } from '../types';

export interface OnboardingQuestionProps {
  /** Question configuration */
  question: OnboardingQuestionType;

  /** Callback when selections change */
  onChange?: (selectedIds: string[]) => void;
}

/**
 * Render meal icon if it's a meal-related question
 */
const renderIcon = (questionId: string, optionId: string): React.ReactNode => {
  if (questionId === 'meal-preferences') {
    return (
      <MealIcon
        name={optionId as MealIconProps['name']}
        size={44}
        color="#d63ba8"
      />
    );
  }
  return null;
};

/**
 * Generic OnboardingQuestion Component
 *
 * Renders any question based on configuration.
 * Supports both single and multiple selection modes.
 * Automatically wires selections to the onboarding store.
 *
 * @example
 * ```tsx
 * <OnboardingQuestion
 *   question={mealPreferencesQuestion}
 *   onChange={(selected) => console.log(selected)}
 * />
 * ```
 */
const OnboardingQuestionComponent: React.FC<OnboardingQuestionProps> = ({
  question,
  onChange,
}) => {
  const { getSelectionForQuestion, selectOptions } = useOnboardingStore();

  // Get current selections for this question
  const currentSelections = getSelectionForQuestion(question.id);

  // Handle option click
  const handleOptionClick = useCallback(
    (optionId: string) => {
      let newSelections: string[];

      if (question.selectionMode === 'single') {
        // Single select: only one option can be selected
        newSelections = currentSelections.includes(optionId)
          ? [] // Deselect if already selected
          : [optionId]; // Select this option
      } else {
        // Multiple select: toggle the option
        newSelections = currentSelections.includes(optionId)
          ? currentSelections.filter((id) => id !== optionId)
          : [...currentSelections, optionId];
      }

      // Update store
      selectOptions(question.id, newSelections);

      // Call optional callback
      onChange?.(newSelections);
    },
    [
      question.id,
      question.selectionMode,
      currentSelections,
      selectOptions,
      onChange,
    ],
  );

  return (
    <div className="flex w-full flex-col" style={{ gap: SPACING[6] }}>
      {/* Question Header */}
      <div className="flex flex-col" style={{ gap: SPACING[2] }}>
        <h2
          className="text-2xl font-bold text-neutral-900"
          style={{
            fontSize: '28px',
            fontWeight: 700,
            lineHeight: '34px',
          }}
        >
          {question.title}
        </h2>
        {question.description && (
          <p
            className="text-sm text-neutral-600"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
            }}
          >
            {question.description}
          </p>
        )}
      </div>

      {/* Options Grid */}
      <ChoiceGrid gap="MD">
        {question.options.map((option) => (
          <ChoiceCard
            key={option.id}
            label={option.label}
            icon={renderIcon(question.id, option.id)}
            isSelected={currentSelections.includes(option.id)}
            onClick={() => handleOptionClick(option.id)}
            aria-pressed={currentSelections.includes(option.id)}
            data-testid={`option-${option.id}`}
          />
        ))}
      </ChoiceGrid>

      {/* Help text for selection mode */}
      <div
        className="text-xs text-neutral-500"
        style={{
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '16px',
        }}
      >
        {question.selectionMode === 'single'
          ? 'Select one option'
          : `Select ${currentSelections.length > 0 ? `${currentSelections.length} selected` : 'one or more options'}`}
      </div>
    </div>
  );
};

OnboardingQuestionComponent.displayName = 'OnboardingQuestion';

// Export with display name for backwards compatibility
export const OnboardingQuestion = OnboardingQuestionComponent;
