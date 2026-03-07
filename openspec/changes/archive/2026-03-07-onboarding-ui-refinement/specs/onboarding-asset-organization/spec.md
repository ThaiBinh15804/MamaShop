## ADDED Requirements

### Requirement: Centralized icon assets in src/assets/icons
Reusable icon components (meal icons, generic UI icons) SHALL be stored in `src/assets/icons/` with a barrel export at `src/assets/icons/index.ts`. Icons used by onboarding SHALL be imported from this location, not from feature folders.

#### Scenario: Import meal icons
- **WHEN** onboarding components need meal category icons
- **THEN** they import from `src/assets/icons/meal-icons`
- **AND** meal icons are centralized in assets folder

#### Scenario: Icon TypeScript export
- **WHEN** `src/assets/icons/index.ts` barrel export is loaded
- **THEN** all icon components are available as named exports
- **AND** TypeScript provides autocomplete for all icons

### Requirement: Centralized mock data in src/assets/mocks
Shared mock data (not feature-specific test mocks) SHALL be stored in `src/assets/mocks/`. Feature-specific test mocks remain in feature `__mocks__/` folders.

#### Scenario: Shared mock onboarding data
- **WHEN** onboarding components need example question data
- **THEN** they import from `src/assets/mocks/onboarding-mocks`
- **AND** data is reusable across other features if needed

#### Scenario: Feature-specific test mocks
- **WHEN** testing onboarding store or components
- **THEN** test mocks remain in `src/features/onboarding/__mocks__/`
- **AND** test files import from feature __mocks__/ directly

### Requirement: Barrel export at src/assets/index.ts
The assets module SHALL provide a clean barrel export from `src/assets/index.ts` with submodule re-exports for icons and mocks. This enables concise imports like `import { MealIcon } from '@/assets'`.

#### Scenario: Direct assets import
- **WHEN** component imports from '@/assets'
- **THEN** icons, mocks, and utilities are available as organized sub-exports
- **AND** import statements remain readable and discoverable
