# Onboarding Feature

Complete multi-step questionnaire system for gathering user preferences during account setup.

## Overview

The onboarding flow guides new users through 3 questions to collect preferences about:
1. **Meal Preferences** (Multiple selection) - Types of cuisine/meals they enjoy
2. **Platform Goals** (Multiple selection) - What they want to achieve with EasyMart
3. **Party Size** (Single selection) - How many people they typically cook for

## Architecture

### Components

- **`OnboardingFlow`** - Main container managing the complete questionnaire sequence
- **`OnboardingQuestion`** - Generic question renderer supporting any config
- **`OnboardingProgress`** - Progress bar showing completion percentage
- **`OnboardingNavigation`** - Previous/Next/Complete button controls
- **`ChoiceCard`** - Individual option card in a question
- **`ChoiceGrid`** - Responsive grid wrapper for choice cards
- **`MealIcon`** - SVG icons for meal categories (located in `src/assets/icons/` for reusability)

### State Management

Uses Zustand configuration-driven store (`useOnboardingStore`):

```typescript
// Get store hook
const { 
  currentStep, 
  totalSteps, 
  selections, 
  isComplete,
  selectOptions,
  nextStep,
  previousStep,
  completeOnboarding 
} = useOnboardingStore();
```

**State Shape:**
```typescript
interface OnboardingState {
  currentStep: number;              // Current question (1-3)
  totalSteps: number;               // Total questions
  selections: QuestionSelection[];  // User answers
  isComplete: boolean;              // Completion flag
  completedAt?: Date;              // When completed
}
```

### Configuration-Driven Questions

All questions are defined in `config/questions.ts`:

```typescript
export const ONBOARDING_QUESTIONS: OnboardingQuestion[] = [
  {
    id: 'meal-preferences',
    stepNumber: 1,
    title: 'What kind of meals do you prefer?',
    selectionMode: 'multiple',
    options: [
      { id: 'pizza', label: 'Pizza', icon: 'pizza' },
      // ... more options
    ],
  },
  // ... more questions
];
```

**Adding New Questions:**
1. Add to `ONBOARDING_QUESTIONS` array
2. Increment `totalSteps` if needed
3. Component automatically renders based on config

## Usage

### Basic Onboarding Page

```tsx
// app/onboarding/page.tsx
import { OnboardingFlow } from '@/features/onboarding';

export default function OnboardingPage() {
  return (
    <OnboardingFlow 
      onComplete={() => router.push('/')} 
    />
  );
}
```

### Individual Components

```tsx
// Use specific question
import { 
  OnboardingQuestion,
  ONBOARDING_QUESTIONS 
} from '@/features/onboarding';

const questionConfig = ONBOARDING_QUESTIONS[0];
<OnboardingQuestion question={questionConfig} />;

// Use choice card
import { ChoiceCard } from '@/components/ui';

<ChoiceCard 
  label="Option 1" 
  isSelected={true}
  onClick={handleSelect}
/>;
```

## Design Tokens

All styling uses design tokens (no hardcoded values):

| Element | Token |
|---------|-------|
| Primary Color | `COLORS.PRIMARY_600` |
| Neutral Background | `COLORS.NEUTRAL_50` |
| Text | `COLORS.TEXT_PRIMARY` |
| Spacing | `SPACING[3]`, `SPACING[4]`, etc. |
| Border Radius | `BORDER_RADIUS.LG` |
| Shadows | `SHADOWS.MD` |

## Routing

- **Route:** `/onboarding`
- **Page:** `src/app/onboarding/page.tsx`
- **Redirect:** After completion → `/` (home)

## Selection Modes

- **Single Select** (Party Size)
  - Only one option can be selected
  - Clicking another deselects previous

- **Multiple Select** (Meal Preferences, Goals)
  - Multiple options can be selected
  - Toggle by clicking cards

## Data Persistence

- Selections stored in Zustand store (in-memory)
- Persisted to localStorage via `persist` middleware
- Can be serialized for API submission

## Mock Data

For testing and development:

```typescript
import { 
  mockOnboardingData,
  generateRandomSelections,
  saveOnboardingResponses 
} from '@/features/onboarding';

// Generate test data
const selections = generateRandomSelections();

// Save responses (simulated)
await saveOnboardingResponses(state);
```

## Responsive Design

Grid responsive behavior:
- **Mobile** (375px): 2 columns
- **Tablet** (768px): 2 columns  
- **Desktop** (1440px): 4 columns

## Accessibility

- ARIA labels on buttons
- `aria-pressed` state on card selections
- Keyboard navigation support
- Semantic HTML structure

## File Structure

```
src/features/onboarding/
├── components/
│   ├── onboarding-flow.tsx
│   ├── onboarding-question.tsx
│   ├── onboarding-progress.tsx
│   ├── onboarding-navigation.tsx
│   ├── meal-icon.tsx
│   └── index.ts
├── types/
│   └── index.ts
├── store/
│   ├── use-onboarding-store.ts
│   └── index.ts
├── config/
│   ├── questions.ts
│   └── index.ts
├── __mocks__/
│   └── onboarding.ts
└── index.ts (barrel export)
```

## Testing

### Unit Tests
- ChoiceCard selection behavior
- Store actions (selectOptions, nextStep, etc.)
- Icon rendering

### Integration Tests
- Complete question rendering
- Store integration with components
- Selection persistence

### E2E Tests
- Full onboarding flow navigation
- Data capture and completion

## Future Enhancements

- [ ] Animated transitions between questions
- [ ] Progress saving with auto-resume
- [ ] Dynamic question ordering
- [ ] Conditional questions based on previous answers
- [ ] Analytics tracking
- [ ] A/B testing variants
- [ ] Multi-language support
