import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { OnboardingQuestionnaire } from './OnboardingQuestionnaire';
import { QuestionnaireQuestion } from '@/features/onboarding/types';

describe('OnboardingQuestionnaire', () => {
  const mockQuestions: QuestionnaireQuestion[] = [
    {
      id: 'q1',
      title: 'Question 1',
      type: 'single-select',
      options: [
        { id: 'opt1', label: 'Option 1' },
        { id: 'opt2', label: 'Option 2' },
      ],
    },
    {
      id: 'q2',
      title: 'Question 2',
      type: 'multi-select',
      options: [
        { id: 'opt3', label: 'Option 3' },
        { id: 'opt4', label: 'Option 4' },
      ],
    },
  ];

  it('renders first question on mount', () => {
    render(
      <OnboardingQuestionnaire questions={mockQuestions} />
    );
    expect(screen.getByText('Question 1')).toBeInTheDocument();
  });

  it('allows selecting an option', () => {
    render(
      <OnboardingQuestionnaire questions={mockQuestions} />
    );
    fireEvent.click(screen.getByText('Option 1'));
    const optionBadge = screen.getByText('Option 1').closest('[role="button"]');
    expect(optionBadge).toHaveAttribute('aria-selected', 'true');
  });

  it('enables continue button after selection', () => {
    render(
      <OnboardingQuestionnaire questions={mockQuestions} />
    );
    let continueButton = screen.getByText('Continue');
    expect(continueButton).toBeDisabled();

    fireEvent.click(screen.getByText('Option 1'));
    continueButton = screen.getByText('Continue');
    expect(continueButton).not.toBeDisabled();
  });

  it('advances to next question on continue', () => {
    render(
      <OnboardingQuestionnaire questions={mockQuestions} />
    );
    fireEvent.click(screen.getByText('Option 1'));
    fireEvent.click(screen.getByText('Continue'));
    expect(screen.getByText('Question 2')).toBeInTheDocument();
  });

  it('shows back button on second question and later', () => {
    render(
      <OnboardingQuestionnaire questions={mockQuestions} />
    );
    expect(screen.queryByLabelText('Go back')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Option 1'));
    fireEvent.click(screen.getByText('Continue'));
    expect(screen.getByLabelText('Go back')).toBeInTheDocument();
  });

  it('goes back to previous question', () => {
    render(
      <OnboardingQuestionnaire questions={mockQuestions} />
    );
    fireEvent.click(screen.getByText('Option 1'));
    fireEvent.click(screen.getByText('Continue'));
    expect(screen.getByText('Question 2')).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Go back'));
    expect(screen.getByText('Question 1')).toBeInTheDocument();
  });

  it('calls onComplete when final question is answered', () => {
    const onComplete = vi.fn();
    render(
      <OnboardingQuestionnaire
        questions={mockQuestions}
        onComplete={onComplete}
      />
    );
    // Answer Q1
    fireEvent.click(screen.getByText('Option 1'));
    fireEvent.click(screen.getByText('Continue'));
    // Answer Q2
    fireEvent.click(screen.getByText('Option 3'));
    fireEvent.click(screen.getByText('Complete'));
    expect(onComplete).toHaveBeenCalledWith({
      q1: 'opt1',
      q2: ['opt3'],
    });
  });

  it('calls onSkip when skip is clicked', () => {
    const onSkip = vi.fn();
    render(
      <OnboardingQuestionnaire
        questions={mockQuestions}
        onSkip={onSkip}
      />
    );
    fireEvent.click(screen.getByText('Skip'));
    expect(onSkip).toHaveBeenCalled();
  });

  it('updates progress bar as user advances', () => {
    const { container } = render(
      <OnboardingQuestionnaire questions={mockQuestions} />
    );
    let progressbar = container.querySelector('[role="progressbar"]');
    expect(progressbar).toHaveAttribute('aria-valuenow', '50'); // 1/2

    fireEvent.click(screen.getByText('Option 1'));
    fireEvent.click(screen.getByText('Continue'));
    progressbar = container.querySelector('[role="progressbar"]');
    expect(progressbar).toHaveAttribute('aria-valuenow', '100'); // 2/2
  });

  it('handles empty questions array', () => {
    render(
      <OnboardingQuestionnaire questions={[]} />
    );
    expect(screen.getByText('No questions available')).toBeInTheDocument();
  });
});
