import React, { useState, useCallback } from 'react';
import { QuestionnaireQuestion, OnboardingState } from '@/features/onboarding/types';
import { HeaderSection } from './sections/HeaderSection';
import { ContentSection } from './sections/ContentSection';
import { ActionSection } from './sections/ActionSection';
import { cn } from '@/utils/cn';

interface OnboardingQuestionnaireProps {
  questions: QuestionnaireQuestion[];
  onComplete?: (answers: Record<string, string | string[]>) => void;
  onSkip?: () => void;
  className?: string;
}

/**
 * OnboardingQuestionnaire container component
 * Composes HeaderSection, ContentSection, and ActionSection to create a complete flow
 */
export const OnboardingQuestionnaire = React.forwardRef<
  HTMLDivElement,
  OnboardingQuestionnaireProps
>(({ questions = [], onComplete, onSkip, className }, ref) => {
  const [state, setState] = useState<OnboardingState>({
    currentStep: 0,
    totalSteps: questions.length,
    selectedAnswers: {},
    isComplete: false,
  });

  const currentQuestion = questions[state.currentStep];
  const progress = ((state.currentStep + 1) / questions.length) * 100;

  // Handle back navigation
  const handleBack = useCallback(() => {
    setState((prev) => {
      if (prev.currentStep > 0) {
        return {
          ...prev,
          currentStep: prev.currentStep - 1,
        };
      }
      return prev;
    });
  }, []);

  // Handle option selection
  const handleOptionSelect = useCallback(
    (optionId: string) => {
      if (!currentQuestion) return;

      setState((prev) => {
        const currentAnswers = prev.selectedAnswers[currentQuestion.id];
        let newAnswers: string | string[];

        if (currentQuestion.type === 'single-select') {
          // Single select: toggle current selection
          newAnswers = currentAnswers === optionId ? '' : optionId;
        } else {
          // Multi-select: add/remove from array
          const answerArray = Array.isArray(currentAnswers) ? currentAnswers : [];
          if (answerArray.includes(optionId)) {
            newAnswers = answerArray.filter((id) => id !== optionId);
          } else {
            newAnswers = [...answerArray, optionId];
          }
        }

        return {
          ...prev,
          selectedAnswers: {
            ...prev.selectedAnswers,
            [currentQuestion.id]: newAnswers,
          },
        };
      });
    },
    [currentQuestion]
  );

  // Handle continue to next step
  const handleContinue = useCallback(() => {
    setState((prev) => {
      if (prev.currentStep < questions.length - 1) {
        return {
          ...prev,
          currentStep: prev.currentStep + 1,
        };
      } else {
        // Final step completed
        if (onComplete) {
          onComplete(prev.selectedAnswers);
        }
        return {
          ...prev,
          isComplete: true,
        };
      }
    });
  }, [questions.length, onComplete]);

  // Handle skip
  const handleSkip = useCallback(() => {
    if (onSkip) {
      onSkip();
    }
  }, [onSkip]);

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center p-8">
        <p>No questions available</p>
      </div>
    );
  }

  const currentAnswer = state.selectedAnswers[currentQuestion.id] || [];
  const isAnswered = currentAnswer.length > 0;

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-12 p-8',
        className
      )}
    >
      {/* Header with back button and progress */}
      <HeaderSection
        showBackButton={state.currentStep > 0}
        progress={progress}
        onBack={handleBack}
      />

      {/* Content with question and options */}
      <ContentSection
        title={currentQuestion.title}
        description={currentQuestion.description}
        options={currentQuestion.options}
        selectedOptions={currentAnswer}
        variant={currentQuestion.options.some((opt) => opt.icon) ? 'icon' : 'text'}
        mode={currentQuestion.type}
        onOptionSelect={handleOptionSelect}
      />

      {/* Footer with action buttons */}
      <ActionSection
        actionLabel={
          state.currentStep === questions.length - 1 ? 'Complete' : 'Continue'
        }
        secondaryLabel={state.currentStep === 0 ? 'Skip' : undefined}
        disabled={!isAnswered}
        onAction={handleContinue}
        onSecondaryAction={handleSkip}
      />
    </div>
  );
});

OnboardingQuestionnaire.displayName = 'OnboardingQuestionnaire';
