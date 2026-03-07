## ADDED Requirements

### Requirement: Safe hydration with localStorage persistence
The onboarding state SHALL initialize safely on both server and client, preventing hydration mismatches when localStorage contains persisted state. The store SHALL NOT apply persisted state until after React hydration completes.

#### Scenario: First visit (no localStorage)
- **WHEN** user visits `/onboarding` for the first time
- **THEN** store initializes with fresh state (step 1, no selections)
- **AND** no errors occur during server/client hydration

#### Scenario: Returning visit (localStorage exists)
- **WHEN** user visits `/onboarding` after completing onboarding (localStorage has persisted data)
- **THEN** store loads persisted state from localStorage
- **AND** hydration matches between server render and client

#### Scenario: Fresh browser after completion (localStorage cleared)
- **WHEN** user clears browser storage and visits `/onboarding`
- **THEN** store initializes with fresh state
- **AND** no console errors or warnings appear

### Requirement: Hydration flag in store
The onboarding store SHALL include an `isHydrated` boolean flag that tracks whether the client has hydrated. The flag SHALL be `false` during SSR and `true` after component mounts.

#### Scenario: Hydration flag during SSR
- **WHEN** server renders OnboardingFlow component
- **THEN** `isHydrated` flag is `false`
- **AND** no localStorage is accessed

#### Scenario: Hydration flag after client mount
- **WHEN** component mounts on client after hydration
- **THEN** `isHydrated` flag transitions to `true`
- **AND** localStorage persistence activates

### Requirement: Zustand persist middleware with hydration guard
The Zustand store persist middleware SHALL skip initialization until `isHydrated` becomes `true`. The middleware SHALL use a custom `onRehydrate` hook or conditional logic to prevent state mismatch.

#### Scenario: Middleware deferred load
- **WHEN** store initializes before hydration completes
- **THEN** persist middleware does not load localStorage
- **AND** initial state from reducer is used

#### Scenario: Middleware deferred restore
- **WHEN** hydration completes and `isHydrated` flag is set
- **THEN** persist middleware loads and applies persisted state
- **AND** store state reflects localStorage data
