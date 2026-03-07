## Why

User onboarding is critical for engagement and preference discovery. EasyMart needs to gather key information about user preferences, goals, and dietary requirements upfront to personalize their experience and food recommendations. This multi-step onboarding flow enables new users to set up their profile preferences efficiently.

## What Changes

- Implement a multi-screen onboarding questionnaire covering meal preferences, goals, and dietary information
- Add interactive selection UI for multiple-choice questions
- Create a progress indicator showing onboarding completion status
- Build supporting UI components: choice cards, buttons, progress bar
- Integrate design tokens for consistent styling across all onboarding screens

## Capabilities

### New Capabilities
- `onboarding-flow`: Multi-screen questionnaire component managing the entire onboarding sequence
- `onboarding-question-card`: Reusable card component for displaying multiple-choice questions
- `onboarding-progress`: Progress indicator tracking user progress through onboarding steps
- `meal-preference-selection`: Meal type selection UI with icon cards (Mushroom, Fish, Ham, Meat, Spaghetti, Shrimp, Pizza, Chicken)
- `goal-selection`: Goal selection UI for EasyMart usage (Browse recipes, Plan meals, etc.)
- `party-size-selection`: Party size or dietary selection UI for personalization

### Modified Capabilities
<!-- No existing capabilities have requirement changes -->

## Impact

- **New Files**: UI components in `src/components/ui/` and feature components in `src/features/onboarding/`
- **Design Tokens**: May require new tokens if design values don't match existing system
- **State Management**: Onboarding state managed in app-level or feature-level store (Zustand)
- **Routing**: New route `/onboarding` for the questionnaire flow
- **Mock Data**: Use mock service worker for simulated onboarding responses
