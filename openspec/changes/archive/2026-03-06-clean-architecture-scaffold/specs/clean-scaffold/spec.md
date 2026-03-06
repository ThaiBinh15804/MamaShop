## ADDED Requirements

### Requirement: Demo feature modules removed
The scaffold SHALL NOT contain any code from the demo feature modules: `features/discussions`, `features/comments`, or `features/teams`. These directories and all their contents SHALL be deleted.

#### Scenario: Demo feature directories do not exist
- **WHEN** the developer inspects `apps/src/features/`
- **THEN** the directories `discussions`, `comments`, and `teams` SHALL NOT be present

### Requirement: Auth feature intact
The `features/auth` module SHALL be fully retained, including login form, register form, API calls, and unit tests.

#### Scenario: Login page renders
- **WHEN** an unauthenticated user navigates to `/auth/login`
- **THEN** the login form SHALL render and accept credentials

#### Scenario: Register page renders
- **WHEN** an unauthenticated user navigates to `/auth/register`
- **THEN** the registration form SHALL render and allow creation of a new account

### Requirement: Dashboard is a blank placeholder
The authenticated dashboard route (`/app`) SHALL render a minimal placeholder page with no demo-domain content.

#### Scenario: Authenticated user sees placeholder dashboard
- **WHEN** an authenticated user navigates to `/app`
- **THEN** a blank or placeholder page SHALL render without any discussions, comments, or teams UI

### Requirement: Demo app routes removed
The routes `/app/discussions`, `/app/users` (admin), and related sub-routes SHALL NOT exist in the routing tree.

#### Scenario: Removed routes return 404
- **WHEN** a user navigates to `/app/discussions`
- **THEN** the application SHALL respond with a 404 not-found page

### Requirement: Shared infrastructure fully retained
All shared modules SHALL be present and functional: `components/ui`, `hooks`, `lib`, `utils`, `types`, `config`, and the `testing` harness (Vitest setup, MSW browser/server, test utilities).

#### Scenario: UI components importable
- **WHEN** a developer imports any component from `components/ui`
- **THEN** the import SHALL resolve without errors

#### Scenario: MSW starts in test environment
- **WHEN** tests run with `pnpm test`
- **THEN** the MSW server SHALL start and handle auth-related requests without errors

### Requirement: MSW mock layer stripped to auth and user only
The MSW handlers, in-memory database (`db.ts`), and data generators (`data-generators.ts`) SHALL only define models and handlers for `User` and `Auth`. All demo-domain fixtures (discussions, comments, teams) SHALL be removed.

#### Scenario: No discussion/comment/team handlers registered
- **WHEN** the MSW server initializes
- **THEN** no handlers for `/api/discussions`, `/api/comments`, or `/api/teams` SHALL be registered

### Requirement: Application builds without errors
Running `pnpm build` on the scaffold SHALL produce a successful build with no TypeScript errors and no missing module errors.

#### Scenario: Clean build
- **WHEN** the developer runs `pnpm build`
- **THEN** the build SHALL complete successfully with exit code 0

### Requirement: Unit tests pass
Running `pnpm test` SHALL result in all unit and integration tests passing. Any tests that were specific to demo features SHALL be removed along with those features.

#### Scenario: Test suite passes
- **WHEN** the developer runs `pnpm test`
- **THEN** all tests SHALL pass with no failures

### Requirement: E2E tests pass
The Playwright e2e tests SHALL be updated to only exercise auth routes and the blank dashboard. Any e2e tests asserting demo-specific routes SHALL be removed or updated.

#### Scenario: Smoke test passes
- **WHEN** the developer runs `pnpm test:e2e`
- **THEN** the smoke test SHALL complete successfully covering login, dashboard load, and logout
