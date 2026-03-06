import type { Meta, StoryObj } from '@storybook/react';
import { ActionSection } from './ActionSection';

const meta = {
  title: 'Features/Onboarding/Sections/ActionSection',
  component: ActionSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ActionSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryOnly: Story = {
  args: {
    actionLabel: 'Continue',
    disabled: false,
    onAction: () => console.log('Continue clicked'),
  },
};

export const PrimaryWithSecondary: Story = {
  args: {
    actionLabel: 'Continue',
    secondaryLabel: 'Skip',
    disabled: false,
    onAction: () => console.log('Continue clicked'),
    onSecondaryAction: () => console.log('Skip clicked'),
  },
};

export const Disabled: Story = {
  args: {
    actionLabel: 'Continue',
    disabled: true,
    onAction: () => console.log('Continue clicked'),
  },
};

export const Loading: Story = {
  args: {
    actionLabel: 'Continue',
    isLoading: true,
    onAction: () => console.log('Continue clicked'),
  },
};

export const Complete: Story = {
  args: {
    actionLabel: 'Complete',
    secondaryLabel: undefined,
    disabled: false,
    onAction: () => console.log('Complete clicked'),
  },
};
