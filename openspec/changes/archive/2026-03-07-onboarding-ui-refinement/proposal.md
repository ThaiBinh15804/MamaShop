## Why

The initial onboarding implementation has foundational issues that need refinement before production:

1. **State Persistence Error**: The Zustand store persists to localStorage, but on first visit to `/onboarding`, loading non-existent persisted state causes hydration errors. Users need a clean state initialization strategy.
2. **UI Layout Mismatch**: Button alignment and grid layout don't match Figma specifications exactly. Grid columns need to be flex-based on available width with proper centering, not fixed Tailwind classes.
3. **Asset Organization**: Icons and mock data are scattered within the feature folder, complicating reusability and maintenance. Assets should be centralized in `src/assets/`.
4. **Design Token Gaps**: Some Figma metrics (spacing, sizing) don't map to existing design tokens, requiring new tokens for exact design compliance.

These issues prevent accurate visual fidelity to Figma and create runtime errors in production scenarios.

## What Changes

- Fix state persistence to prevent hydration errors on first visit by implementing a client-side initialization check
- Refactor grid layout to use dynamic flex-based columns matching Figma's responsive behavior instead of fixed Tailwind utilities
- Center buttons properly within responsive grid cells with consistent padding and alignment
- Reorganize icon assets to `src/assets/icons/` for centralized reusability
- Move mock data to `src/assets/mocks/` (keeping feature-specific mocks in `__mocks__/`)
- Add missing design tokens for screen-specific spacing and gap values
- Update component implementations to use corrected tokens and layout patterns

## Capabilities

### New Capabilities

- `onboarding-state-initialization`: Implement safe state initialization preventing hydration errors. Separate localStorage persistence from SSR rendering via client-side checks.
- `onboarding-responsive-grid-layout`: Dynamic flex-based grid layout matching Figma design with screen-aware column counts and proper button centering. Replace fixed Tailwind classes with CSS Grid inline styles.
- `onboarding-asset-organization`: Centralize reusable assets (icons, mock data) in `src/assets/` with proper import paths and barrel exports.
- `onboarding-design-tokens-refinement`: Add missing design tokens for responsive spacing, gap values, and component sizing to achieve exact Figma compliance.

### Modified Capabilities

- `onboarding-flow`: State initialization and hydration handling adjustments for safe persistence
- `onboarding-question-card`: Grid layout and button alignment refinements per Figma spec

## Impact

- **Files**: `src/features/onboarding/**`, `src/components/ui/choice-grid.tsx`, `src/components/ui/choice-card.tsx`, `src/assets/` (new), `src/lib/design-tokens/**`
- **State**: Zustand store initialization logic
- **Styling**: Redesigned grid layout from Tailwind classes to CSS Grid inline styles
- **Assets**: Migrated icons from `src/features/onboarding/components/` to `src/assets/icons/`
- **Design System**: New design tokens for responsive values
