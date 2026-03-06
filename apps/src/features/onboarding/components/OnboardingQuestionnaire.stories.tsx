import type { Meta, StoryObj } from '@storybook/react';
import { OnboardingQuestionnaire } from './OnboardingQuestionnaire';
import { onboardingQuestionnaire } from '../mocks/questionnaire-data';

const meta = {
  title: 'Features/Onboarding/OnboardingQuestionnaire',
  component: OnboardingQuestionnaire,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OnboardingQuestionnaire>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    questions: onboardingQuestionnaire,
    onComplete: (answers) => console.log('Onboarding completed with:', answers),
    onSkip: () => console.log('Onboarding skipped'),
  },
};

export const SingleQuestion: Story = {
  args: {
    questions: [onboardingQuestionnaire[0]],
    onComplete: (answers) => console.log('Onboarding completed with:', answers),
    onSkip: () => console.log('Onboarding skipped'),
  },
};
