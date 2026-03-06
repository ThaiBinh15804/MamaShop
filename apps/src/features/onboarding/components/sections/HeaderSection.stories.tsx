import type { Meta, StoryObj } from '@storybook/react';
import { HeaderSection } from './HeaderSection';

const meta = {
  title: 'Features/Onboarding/Sections/HeaderSection',
  component: HeaderSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithBackButton: Story = {
  args: {
    showBackButton: true,
    progress: 33,
    onBack: () => console.log('Back clicked'),
  },
};

export const WithoutBackButton: Story = {
  args: {
    showBackButton: false,
    progress: 0,
  },
};

export const HalfProgress: Story = {
  args: {
    showBackButton: true,
    progress: 50,
    onBack: () => console.log('Back clicked'),
  },
};

export const AlmostComplete: Story = {
  args: {
    showBackButton: true,
    progress: 80,
    onBack: () => console.log('Back clicked'),
  },
};
