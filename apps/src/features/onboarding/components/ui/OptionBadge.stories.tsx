import type { Meta, StoryObj } from '@storybook/react';
import { OptionBadge } from './OptionBadge';

const meta = {
  title: 'Features/Onboarding/UI/OptionBadge',
  component: OptionBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OptionBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Text variant stories
export const TextUnselected: Story = {
  args: {
    id: 'option-1',
    label: 'Save time on shopping',
    variant: 'text',
    selected: false,
  },
};

export const TextSelected: Story = {
  args: {
    id: 'option-1',
    label: 'Save time on shopping',
    variant: 'text',
    selected: true,
  },
};

export const TextDisabled: Story = {
  args: {
    id: 'option-1',
    label: 'Save time on shopping',
    variant: 'text',
    selected: false,
    disabled: true,
  },
};

// Icon variant stories
export const IconUnselected: Story = {
  args: {
    id: 'mushroom',
    label: 'Mushroom',
    variant: 'icon',
    icon: 'http://localhost:3845/assets/meal-mushroom.svg',
    selected: false,
  },
};

export const IconSelected: Story = {
  args: {
    id: 'mushroom',
    label: 'Mushroom',
    variant: 'icon',
    icon: 'http://localhost:3845/assets/meal-mushroom.svg',
    selected: true,
  },
};

export const IconDisabled: Story = {
  args: {
    id: 'mushroom',
    label: 'Mushroom',
    variant: 'icon',
    icon: 'http://localhost:3845/assets/meal-mushroom.svg',
    selected: false,
    disabled: true,
  },
};
