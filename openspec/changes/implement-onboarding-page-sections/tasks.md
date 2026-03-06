## 1. Setup & TypeScript Interfaces

- [x] 1.1 Create `src/features/onboarding/` directory structure with subdirectories: components, types, hooks
- [x] 1.2 Create `src/features/onboarding/types/index.ts` with interfaces: `QuestionnaireOption`, `QuestionnaireQuestion`, `OnboardingState`
- [x] 1.3 Define type interfaces for component props: `QuestionnaireOptionBadgeProps`, `QuestionnaireHeaderSectionProps`, `QuestionnaireContentSectionProps`, `QuestionnaireActionSectionProps`
- [x] 1.4 Create `src/features/onboarding/index.ts` barrel export for public API

## 2. UI Primitives - ProgressBar Component

- [x] 2.1 Create `src/features/onboarding/components/ui/ProgressBar.tsx` component
- [x] 2.2 Implement progress bar with two layers: background track and filled portion
- [x] 2.3 Add support for `progress` prop (0-100) and design token styling
- [x] 2.4 Add accessibility attributes (aria-valuenow, aria-valuemin, aria-valuemax)

## 3. UI Primitives - OptionBadge Component

- [x] 3.1 Create `src/features/onboarding/components/ui/OptionBadge.tsx` component
- [x] 3.2 Implement icon variant: render icon + label vertically stacked
- [x] 3.3 Implement text variant: render label only, horizontally centered
- [x] 3.4 Add selected state styling using design tokens (background, border, shadow)
- [x] 3.5 Add hover and disabled states with CSS
- [x] 3.6 Implement onClick handler that fires with option ID
- [x] 3.7 Add aria-selected, role="button" accessibility attributes

## 4. Section Components - HeaderSection

- [x] 4.1 Create `src/features/onboarding/components/sections/HeaderSection.tsx` component
- [x] 4.2 Add back button icon button with onBack callback
- [x] 4.3 Add ProgressBar child component displaying progress (0-100)
- [x] 4.4 Add showBackButton conditional rendering prop
- [x] 4.5 Apply design token spacing and alignment between elements

## 5. Section Components - ContentSection

- [x] 5.1 Create `src/features/onboarding/components/sections/ContentSection.tsx` component
- [x] 5.2 Render title as H2 heading using design tokens
- [x] 5.3 Add optional description text below title
- [x] 5.4 Implement options grid/flex layout that renders OptionBadge children
- [x] 5.5 Add onOptionSelect callback fired when option badge is clicked
- [x] 5.6 Manage selected state(s) with props for single/multi-select mode

## 6. Section Components - ActionSection

- [x] 6.1 Create `src/features/onboarding/components/sections/ActionSection.tsx` component
- [x] 6.2 Render primary action button with text label
- [x] 6.3 Add optional secondary action button rendering
- [x] 6.4 Implement disabled, loading state props with visual feedback
- [x] 6.5 Fire onAction and onSecondaryAction callbacks appropriately

## 7. Container Component - OnboardingQuestionnaire

- [x] 7.1 Create `src/features/onboarding/components/OnboardingQuestionnaire.tsx` container
- [x] 7.2 Compose HeaderSection, ContentSection, ActionSection into single component
- [x] 7.3 Implement state management: selectedOptions, currentStep tracking
- [x] 7.4 Add back navigation handler (decrement step)
- [x] 7.5 Add continue navigation handler (increment step)
- [x] 7.6 Pass through callbacks and state to child sections

## 8. Mock Data & Integration

- [x] 8.1 Create `src/features/onboarding/mocks/questionnaire-data.ts` with mock questions and options
- [x] 8.2 Add mock data for meal preference question (Q1)
- [x] 8.3 Add mock data for goals question (Q2)
- [x] 8.4 Define option item shapes: id, label, icon (when applicable)

## 9. Stories & Storybook Examples

- [x] 9.1 Create `src/features/onboarding/components/ui/ProgressBar.stories.tsx` with variants
- [x] 9.2 Create `src/features/onboarding/components/ui/OptionBadge.stories.tsx` with icon and text variants
- [x] 9.3 Create `src/features/onboarding/components/sections/HeaderSection.stories.tsx` showing with/without back button
- [x] 9.4 Create `src/features/onboarding/components/sections/ContentSection.stories.tsx` with different option types
- [x] 9.5 Create `src/features/onboarding/components/sections/ActionSection.stories.tsx` showing enabled/disabled/loading states
- [x] 9.6 Create `src/features/onboarding/components/OnboardingQuestionnaire.stories.tsx` showing full flow

## 10. Component Testing

- [x] 10.1 Create `src/features/onboarding/components/ui/ProgressBar.test.tsx` with render and interaction tests
- [x] 10.2 Create `src/features/onboarding/components/ui/OptionBadge.test.tsx` testing selection and callbacks
- [x] 10.3 Create `src/features/onboarding/components/sections/HeaderSection.test.tsx` testing back button
- [x] 10.4 Create `src/features/onboarding/components/sections/ContentSection.test.tsx` testing option selection
- [x] 10.5 Create `src/features/onboarding/components/sections/ActionSection.test.tsx` testing button states
- [x] 10.6 Create `src/features/onboarding/components/OnboardingQuestionnaire.test.tsx` testing navigation flow

## 11. Documentation & README

- [x] 11.1 Create `src/features/onboarding/README.md` documenting the feature module
- [x] 11.2 Document component API and prop interfaces
- [x] 11.3 Add usage examples for integrating questionnaire into pages
- [x] 11.4 Document mock data structure and how to extend with new questions
