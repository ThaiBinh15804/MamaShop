## Context

The bulletproof-react repository ships as a demo application that showcases a working product (team-based discussions platform). New projects that want to adopt this architecture must manually strip out all domain-specific code before writing their own features. The goal is to automate that stripping, resulting in a clean but fully-functional scaffold — auth works, routing works, shared UI works, tests pass — with zero demo-domain artifacts.

The app uses **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **TanStack Query**, **Zustand**, **Zod**, **MSW**, and **Vitest**.

## Goals / Non-Goals

**Goals:**
- Delete all demo feature modules (discussions, comments, teams) and their sub-files
- Simplify `features/users` to only what is required by auth (user type + API)
- Replace demo app routes with minimal placeholder pages that compile and render
- Strip MSW handlers, db fixtures, and data generators down to auth + user only
- Ensure `pnpm dev`, `pnpm build`, `pnpm test`, and `pnpm test:e2e` all pass on the clean scaffold
- Retain 100% of shared infrastructure: `components/ui`, `hooks`, `lib`, `utils`, `types`, `config`, `testing` harness

**Non-Goals:**
- Changing the tech stack, build tooling, or CI configuration
- Rewriting or redesigning any retained code (no refactors)
- Adding new features or pages beyond minimal placeholders
- Changing the auth flow in any functional way

## Decisions

### 1. Delete feature modules entirely rather than stubbing them

**Decision**: Hard-delete `features/discussions`, `features/comments`, `features/teams` directories.

**Rationale**: Stubs or empty index files create dead imports and confuse future developers. A clean deletion is unambiguous — if the folder is missing, it was intentionally removed. New features get new folders.

**Alternative considered**: Leave empty `index.ts` barrel files as placeholders → rejected because they add noise without value.

---

### 2. Keep `features/auth` untouched

**Decision**: Preserve the full auth feature (login, register, forms, API, tests).

**Rationale**: Every real app needs authentication. Keeping it working validates the entire data-flow stack (API client → React Query → MSW → Zod) with zero effort for the user. It also provides a working example of the feature module pattern.

---

### 3. Replace demo pages with minimal `<ComingSoon>` or blank placeholder

**Decision**: App routes that were demo-specific (`/app/discussions`, `/app/users`) are replaced by a single blank dashboard route and 404 behavior for removed routes.

**Rationale**: The Next.js App Router requires valid files in route folders. Replacing with minimal placeholder components avoids broken builds while clearly signaling "this is where your feature goes".

---

### 4. Simplify MSW/mock layer to auth + user only

**Decision**: Remove all MSW handlers for discussions, comments, teams. Keep user and auth handlers. Remove `factory` entries in `db.ts` for those models. Trim `data-generators.ts` accordingly.

**Rationale**: MSW is wired in both dev (browser) and test (node) environments. Leaving handler files that reference deleted types causes TypeScript and test failures. A clean mock layer matches the clean feature layer.

---

### 5. Retain `features/users` API types but remove user-management UI/components

**Decision**: Keep `types/api.ts` `User` type and the `getUser` / `getUsers` API calls (auth depends on them), but delete the `/app/users` admin page and its `_components`.

**Rationale**: The `User` type is referenced throughout auth and the base layout (current user display). The admin user management page is demo-specific and can be removed without breaking auth.

## Risks / Trade-offs

- **Risk**: Missed import references cause TypeScript build errors after deletion.
  → **Mitigation**: After deletion, run `pnpm build` and fix any residual imports found by the compiler.

- **Risk**: E2E tests (`e2e/tests/smoke.spec.ts`, `profile.spec.ts`) assert on demo-specific routes.
  → **Mitigation**: Update e2e tests to only visit auth and dashboard routes that still exist.

- **Risk**: `mocked-db.json` (Mirage/json-server seed file) still has demo data.
  → **Mitigation**: Replace `mocked-db.json` with an empty-collections structure matching the stripped models.

## Migration Plan

1. Delete demo feature directories
2. Delete / update associated app routes and layout nav links
3. Strip MSW handlers, db factories, and data generators
4. Update e2e tests to match new routes
5. Run `pnpm build` — fix TypeScript errors
6. Run `pnpm test` — fix unit test failures
7. Run `pnpm test:e2e` — fix e2e failures
8. Verify `pnpm dev` starts cleanly with auth and blank dashboard working
