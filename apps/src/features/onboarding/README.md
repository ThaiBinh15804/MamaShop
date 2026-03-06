# Onboarding Feature Module

The onboarding feature module provides reusable UI sections for multi-step questionnaire flows. It includes components for displaying questions, collecting user preferences through selectable options, and managing navigation through the questionnaire.

## Architecture

The module follows the Bulletproof React feature-based architecture with clear separation of concerns:

- **UI Primitives** (`components/ui/`): Low-level reusable components
  - `ProgressBar`: Visual progress indicator supporting 0-100 percentage
  - `OptionBadge`: Selectable option badge with icon or text variants

- **Section Components** (`components/sections/`): Layout-level sections
  - `HeaderSection`: Navigation and progress tracking
  - `ContentSection`: Question title, description, and options
  - `ActionSection`: Primary and secondary action buttons

- **Container** (`components/`): Orchestrates sections and manages state
  - `OnboardingQuestionnaire`: Composes all sections for a complete flow

## Component API

### ProgressBar

Displays a visual progress indicator with background track and filled portion.

```tsx
import { ProgressBar } from '@/features/onboarding';

<ProgressBar progress={50} />
```

**Props:**
- `progress: number` - Progress value (0-100)
- `className?: string` - Additional CSS classes

### OptionBadge

Selectable option badge with icon or text variant.

```tsx
import { OptionBadge } from '@/features/onboarding';

<OptionBadge
  id="mushroom"
  label="Mushroom"
  icon="/mushroom.svg"
  variant="icon"
  selected={false}
  onClick={(id) => console.log(id)}
/>
```

**Props:**
- `id: string` - Unique identifier for the option
- `label: string` - Display text
- `icon?: string` - URL to icon image (for icon variant)
- `variant?: 'icon' | 'text'` - Render style (default: 'text')
- `selected?: boolean` - Selection state (default: false)
- `disabled?: boolean` - Disabled state (default: false)
- `onClick?: (id: string) => void` - Click handler
- `className?: string` - Additional CSS classes

### HeaderSection

Navigation header with back button and progress bar.

```tsx
import { HeaderSection } from '@/features/onboarding';

<HeaderSection
  showBackButton={true}
  progress={33}
  onBack={() => console.log('Back')}
/>
```

**Props:**
- `showBackButton?: boolean` - Show/hide back button (default: true)
- `progress: number` - Progress value (0-100)
- `onBack?: () => void` - Back button click handler
- `className?: string` - Additional CSS classes

### ContentSection

Question title, description, and selectable options.

```tsx
import { ContentSection } from '@/features/onboarding';

<ContentSection
  title="What are your goals?"
  description="Select the goals that matter to you"
  options={[
    { id: 'goal1', label: 'Save time' },
    { id: 'goal2', label: 'Eat healthier' },
  ]}
  selectedOptions={['goal1']}
  mode="multi-select"
  variant="text"
  onOptionSelect={(id) => console.log(id)}
/>
```

**Props:**
- `title: string` - Question heading
- `description?: string` - Optional description text
- `options: QuestionnaireOption[]` - Available options
- `selectedOptions?: string | string[]` - Currently selected option(s)
- `variant?: 'icon' | 'text'` - Layout style for options (default: 'text')
- `mode?: 'single-select' | 'multi-select'` - Selection mode (default: 'single-select')
- `onOptionSelect?: (optionId: string) => void` - Option selection handler
- `className?: string` - Additional CSS classes

### ActionSection

Primary and optional secondary action buttons.

```tsx
import { ActionSection } from '@/features/onboarding';

<ActionSection
  actionLabel="Continue"
  secondaryLabel="Skip"
  disabled={false}
  isLoading={false}
  onAction={() => console.log('Continue')}
  onSecondaryAction={() => console.log('Skip')}
/>
```

**Props:**
- `actionLabel?: string` - Primary button label (default: 'Continue')
- `secondaryLabel?: string` - Secondary button label (optional)
- `disabled?: boolean` - Disable both buttons (default: false)
- `isLoading?: boolean` - Show loading state (default: false)
- `onAction?: () => void` - Primary button click handler
- `onSecondaryAction?: () => void` - Secondary button click handler
- `className?: string` - Additional CSS classes

### OnboardingQuestionnaire

Complete questionnaire flow orchestrating all sections.

```tsx
import { OnboardingQuestionnaire, onboardingQuestionnaire } from '@/features/onboarding';

<OnboardingQuestionnaire
  questions={onboardingQuestionnaire}
  onComplete={(answers) => console.log(answers)}
  onSkip={() => console.log('Skipped')}
/>
```

**Props:**
- `questions: QuestionnaireQuestion[]` - Array of questions to display
- `onComplete?: (answers: Record<string, string | string[]>) => void` - Completion handler
- `onSkip?: () => void` - Skip handler
- `className?: string` - Additional CSS classes

## Mock Data

Mock questionnaire data is available in `src/features/onboarding/mocks/questionnaire-data.ts`:

```tsx
import { onboardingQuestionnaire } from '@/features/onboarding';

// Contains 2 default questions:
// 1. Meal preference (single-select with icons)
// 2. User goals (multi-select with text options)
```

## Usage Example

```tsx
import { OnboardingQuestionnaire } from '@/features/onboarding';
import { onboardingQuestionnaire } from '@/features/onboarding/mocks/questionnaire-data';

export default function OnboardingPage() {
  const handleComplete = (answers: Record<string, string | string[]>) => {
    console.log('Questionnaire completed:', answers);
    // Save answers to state or API
  };

  return (
    <OnboardingQuestionnaire
      questions={onboardingQuestionnaire}
      onComplete={handleComplete}
    />
  );
}
```

## Creating New Questions

To add new questions to the questionnaire flow, extend the mock data:

```tsx
import { onboardingQuestionnaire } from '@/features/onboarding/mocks/questionnaire-data';

const customQuestions = [
  ...onboardingQuestionnaire,
  {
    id: 'dietary-restrictions',
    title: 'Any dietary restrictions?',
    type: 'multi-select',
    options: [
      { id: 'vegan', label: 'Vegan' },
      { id: 'gluten-free', label: 'Gluten-free' },
      { id: 'dairy-free', label: 'Dairy-free' },
    ],
  },
];
```

## Design Tokens

All components use design tokens for consistent styling:

- **Colors**: Primary (`#b6349a`), backgrounds, text colors
- **Spacing**: Gaps, padding, margins (CSS custom properties)
- **Typography**: Font family, weights, sizes per design system
- **Borders**: Rounded corners, border colors
- **Shadows**: Elevation effects for selected states

Tokens are defined in `src/lib/design-tokens/` and applied via CSS variables.

## Accessibility

All components include:

- `role="button"` and `role="progressbar"` landmarks
- `aria-selected`, `aria-disabled`, `aria-valuenow` attributes
- Keyboard navigation support (Enter, Space keys)
- Semantic HTML structure
- Focus management and visual indicators

## Testing

Run tests with:

```bash
yarn test --dir src/features/onboarding
```

Unit tests cover:
- Component rendering
- Interaction handling
- Callback firing
- State management
- Accessibility attributes
