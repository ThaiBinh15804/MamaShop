## Why

The current codebase is a fully-featured demo application with domain-specific features (discussions, comments, teams) that are not relevant to new projects built on this stack. Starting a new project requires manually removing all demo code, which is error-prone and time-consuming. A clean scaffold removes all demo-domain code while preserving the proven architectural patterns, shared infrastructure, and tooling.

## What Changes

- **Remove** all demo feature modules: `features/discussions`, `features/comments`, `features/teams`
- **Remove** `features/users` components and API calls tied to the demo domain
- **Remove** all demo-specific app routes: discussions, profile (demo), users admin pages
- **Remove** demo-related mock data, MSW handlers, and test fixtures tied to discussions/comments/teams
- **Simplify** the dashboard to a blank placeholder page
- **Retain** `features/auth` (login + registration flow) as the baseline feature
- **Retain** all shared infrastructure: `components/ui`, `hooks`, `lib`, `utils`, `types`, `config`, `testing` setup
- **Retain** all tooling: Vitest, Playwright, Storybook, MSW, Tailwind, ESLint, Prettier
- **Retain** the Next.js App Router layout structure with `provider.tsx` and error boundaries
- **Update** MSW mocks and data generators to only reflect the auth/user models
- **Update** navigation and layout to have no demo-specific links

## Capabilities

### New Capabilities
- `clean-scaffold`: A minimal working app with auth flow, blank dashboard, and all shared infrastructure intact — ready to add new features on top of

### Modified Capabilities
<!-- No existing spec-level requirements are changing — this is a net removal of demo content -->

## Impact

- `apps/src/app/app/` — all demo route pages removed or replaced with placeholders
- `apps/src/features/` — discussions, comments, teams modules deleted; users simplified
- `apps/src/testing/mocks/` — handlers, db, and data generators stripped of demo models
- `apps/src/app/provider.tsx` — no changes expected
- `apps/src/components/` — no changes (shared UI fully retained)
- `apps/src/lib/`, `hooks/`, `utils/`, `types/` — no changes (fully retained)
- No external API or dependency changes
