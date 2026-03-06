import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'Features/Onboarding/UI/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    progress: 0,
  },
};

export const Quarter: Story = {
  args: {
    progress: 25,
  },
};

export const Half: Story = {
  args: {
    progress: 50,
  },
};

export const ThreeQuarters: Story = {
  args: {
    progress: 75,
  },
};

export const Complete: Story = {
  args: {
    progress: 100,
  },
};

export const Custom: Story = {
  args: {
    progress: 33,
  },
};
