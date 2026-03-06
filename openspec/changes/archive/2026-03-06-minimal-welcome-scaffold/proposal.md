## Why

The project currently contains demo features (auth, discussions, comments, teams) that add complexity and are irrelevant for a starter project. This change provides an even cleaner starting point—a truly minimal Next.js scaffold with only a welcome home page, all dependencies intact, and zero feature-specific code. New projects can use this to start completely blank.

## What Changes

- **Remove** all feature modules: `features/auth`, `features/discussions`, `features/comments`, `features/teams`
- **Remove** all API routes and handlers: auth, users, discussions, comments, teams
- **Remove** app-level routes: `/auth`, `/app` (and all sub-routes)
- **Remove** MSW mock handlers, db models, data generators for all domain models
- **Replace** the home page (`/`) with a simple "Welcome to Project" message
- **Retain** all shared infrastructure: `components/ui`, `hooks`, `lib`, `utils`, `types`, `config`, `testing` setup
- **Retain** all tooling and build configuration

## Capabilities

### New Capabilities
- `welcome-home`: A minimal home page displaying a welcome message — the only public route in the app

### Modified Capabilities
<!-- No existing capability modifications — this is a net removal of features -->

## Impact

- `apps/src/features/` — completely empty (all feature modules deleted)
- `apps/src/app/` — only root layout and a Welcome home page remain
- `apps/src/testing/mocks/` — all handlers and data models removed
- `apps/src/config/paths.ts` — stripped down to only home route
- `apps/src/components/`, `hooks/`, `lib/`, `utils/`, `types/` — no changes (fully retained)
- No external API or dependency changes
