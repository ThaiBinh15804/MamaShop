## Context

The bulletproof-react project currently provides a demo application with full authentication, team management, discussions, and comments. For developers wanting to start a **completely blank** project with only the infrastructure and no business logic, a second scaffold is valuable. This design removes every domain-specific module (including auth) and leaves only a welcome home page.

The app uses **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **TanStack Query**, **Zustand**, **MSW**, and **Vitest**.

## Goals / Non-Goals

**Goals:**
- Provide a truly minimal starting point with zero feature code  
- Retain all shared infrastructure and tooling so developers can add features cleanly
- Enable `npm run build`, `npm run test`, and dev server with zero errors
- Keep the project structure in place (even if empty) for consistency

**Non-Goals:**
- Support migrating from the full demo app to this minimal scaffold (separate projects)
- Adding authentication or any feature beyond the welcome page
- Changing tech stack or dependencies

## Decisions

### 1. Delete all features, not stub them

**Decision:** Hard-delete all `features` directories; don't leave empty folders.

**Rationale:** An empty `features/` directory invites confusion. If the folder doesn't exist, it's clear that feature modules are built on demand. Dead code is worse than missing code.

**Alternative considered:** Leave empty feature directories with README files → rejected because it defeats the purpose of "minimal."

---

### 2. Single home page as the app entry point

**Decision:** Replace `/` with a simple Welcome page; delete `/app`, `/auth` routes completely.

**Rationale:** A truly minimal app has one route. The welcome page welcomes new developers and demonstrates the Tailwind + React setup.

**Alternative considered:** Keep a blank `/app` route as a placeholder → rejected because it implies an authenticated app, which this is not.

---

### 3. Remove MSW entirely, but keep testing infrastructure

**Decision:** Delete all MSW handlers and db models. Retain `setup-tests.ts`, test utilities, Vitest config.

**Rationale:** Without API endpoints, MSW handlers are dead code. But the testing infrastructure (fixtures, render helpers) is valuable for any future feature tests.

---

### 4. Simplify `paths.ts` to only home

**Decision:** Keep `paths.ts` but remove all app/auth/feature routes; only export `home`.

**Rationale:** Consistency. The patterns file structure remains, just with less content. New features can add routes here.

## Risks / Trade-offs

- **Risk:** Future developers expect more scaffolding (e.g., an example API route or page component).  
  → **Mitigation:** Add a brief README documenting how to create the first feature from scratch.

- **Risk:** Unused shared UI/lib code might confuse developers about what's available.  
  → **Mitigation:** Shared modules are documented in project standards; they're there as a foundation.

- **Risk:** Running tests after deletion might fail if any shared tests reference removed code.  
  → **Mitigation:** Unit tests target only shared/ modules (components, hooks, utils). No tests reference deleted features.

## Migration Plan

1. Delete all demo feature directories
2. Delete app routes (`/app`, `/auth`, and nested sub-routes)
3. Replace home page with welcome content
4. Delete MSW handlers and db models
5. Simplify `config/paths.ts`
6. Run `npm run build` — fix any remaining errors
7. Run `npm test` — verify all tests pass
8. Verify dev server starts and home page renders
