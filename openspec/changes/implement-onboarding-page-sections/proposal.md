## Why

The EasyMart onboarding experience requires multiple questionnaire screens to collect user preferences (meal preferences, dietary goals, etc.). Currently, there are no reusable sections for displaying multi-step questionnaires with selectable options. Building reusable questionnaire components following Bulletproof React's feature-based architecture will enable fast iteration on the onboarding flow and allow similar patterns to be reused in preference settings or survey features.

## What Changes

- Create reusable questionnaire UI sections that can be composed into multi-step flows
- Add interactive option badge components for collecting single and multi-select preferences
- Implement questionnaire header section with progress indicators and navigation
- Build feature module structure for onboarding within `src/features/onboarding/`
- Establish patterns for state management and validation within questionnaire flows

## Capabilities

### New Capabilities

- `onboarding-questionnaire-section`: Reusable container section for displaying a single questionnaire step with title, description, selectable options grid, and navigation controls. Supports both icon-based and text-based option collections.
- `questionnaire-option-badge`: Interactive badge component for selecting from predefined options. Supports single/multi-select modes with visual feedback for selected state.
- `questionnaire-header-section`: Header component with back navigation button and progress bar indicator for multi-step questionnaire flows.
- `questionnaire-action-section`: Footer section with primary action buttons (Continue, Skip) for questionnaire navigation.

### Modified Capabilities

<!-- No existing capabilities are being modified -->

## Impact

- New feature module: `src/features/onboarding/components/`
- New UI sections will use existing design tokens and primitive components from `src/components/ui/`
- No breaking changes to existing architecture or APIs
- Questionnaire sections will follow the established feature-based module structure
