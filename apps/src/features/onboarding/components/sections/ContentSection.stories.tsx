import type { Meta, StoryObj } from '@storybook/react';
import { ContentSection } from './ContentSection';

const meta = {
  title: 'Features/Onboarding/Sections/ContentSection',
  component: ContentSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContentSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const textOptions = [
  { id: 'save-time', label: 'Save time on shopping' },
  { id: 'eat-healthier', label: 'Eat healthier' },
  { id: 'try-recipes', label: 'Try new recipes' },
  { id: 'save-money', label: 'Save money' },
];

const iconOptions = [
  { id: 'mushroom', label: 'Mushroom', icon: 'http://localhost:3845/assets/meal-mushroom.svg' },
  { id: 'fish', label: 'Fish', icon: 'http://localhost:3845/assets/meal-fish.svg' },
  { id: 'ham', label: 'Ham', icon: 'http://localhost:3845/assets/meal-ham.svg' },
  { id: 'meat', label: 'Meat', icon: 'http://localhost:3845/assets/meal-meat.svg' },
];

export const TextOptions: Story = {
  args: {
    title: 'What are your goals with EasyMart?',
    options: textOptions,
    variant: 'text',
    mode: 'multi-select',
    selectedOptions: [],
    onOptionSelect: (id: string) => console.log('Selected:', id),
  },
};

export const TextOptionsWithSelection: Story = {
  args: {
    title: 'What are your goals with EasyMart?',
    options: textOptions,
    variant: 'text',
    mode: 'multi-select',
    selectedOptions: ['save-time', 'eat-healthier'],
    onOptionSelect: (id: string) => console.log('Selected:', id),
  },
};

export const IconOptions: Story = {
  args: {
    title: 'What kind of meals do you prefer?',
    options: iconOptions,
    variant: 'icon',
    mode: 'single-select',
    selectedOptions: [],
    onOptionSelect: (id: string) => console.log('Selected:', id),
  },
};

export const IconOptionsWithSelection: Story = {
  args: {
    title: 'What kind of meals do you prefer?',
    options: iconOptions,
    variant: 'icon',
    mode: 'single-select',
    selectedOptions: 'mushroom',
    onOptionSelect: (id: string) => console.log('Selected:', id),
  },
};

export const WithDescription: Story = {
  args: {
    title: 'What are your goals with EasyMart?',
    description: 'Select the goals that matter most to you. You can always change these later.',
    options: textOptions,
    variant: 'text',
    mode: 'multi-select',
    selectedOptions: [],
    onOptionSelect: (id: string) => console.log('Selected:', id),
  },
};
