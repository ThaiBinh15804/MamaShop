## 1. Delete Demo Feature Modules

- [x] 1.1 Delete `apps/src/features/discussions/` directory and all contents
- [x] 1.2 Delete `apps/src/features/comments/` directory and all contents
- [x] 1.3 Delete `apps/src/features/teams/` directory and all contents
- [x] 1.4 Delete `apps/src/features/users/components/` directory (user management UI)
- [x] 1.5 Delete `apps/src/features/users/api/` files except what is needed by auth (keep `get-user.ts` if it exists, delete `delete-user.ts` and any admin-only calls)

## 2. Remove Demo App Routes

- [x] 2.1 Delete `apps/src/app/app/discussions/` route directory and all contents
- [x] 2.2 Delete `apps/src/app/app/users/` route directory and all contents
- [x] 2.3 Delete `apps/src/app/public/discussions/` route directory and all contents
- [x] 2.4 Replace `apps/src/app/app/page.tsx` with a minimal placeholder dashboard page (no demo content)
- [x] 2.5 Replace `apps/src/app/app/_components/dashboard-info.tsx` with a blank/empty component or delete it if not referenced by the layout
- [x] 2.6 Update `apps/src/app/app/_components/dashboard-layout.tsx` to remove any navigation links pointing to deleted routes

## 3. Strip MSW Mock Layer

- [x] 3.1 Delete MSW handler files for discussions, comments, and teams in `apps/src/testing/mocks/handlers/`
- [x] 3.2 Update `apps/src/testing/mocks/handlers/index.ts` to remove imports of deleted handler files
- [x] 3.3 Remove `discussion`, `comment`, and `team` factory/model definitions from `apps/src/testing/mocks/db.ts`
- [x] 3.4 Remove discussion, comment, and team generator functions from `apps/src/testing/data-generators.ts`
- [x] 3.5 Update `apps/mocked-db.json` to remove demo-domain collections, keeping only `users` (and `auth` if present)

## 4. Update Navigation and Layout

- [x] 4.1 Review `apps/src/app/app/layout.tsx` and remove sidebar/nav links for discussions and users admin
- [x] 4.2 Review `apps/src/config/paths.ts` and remove path constants for deleted routes
- [x] 4.3 Verify the root redirect from `/` or `/app` goes to the new blank dashboard

## 5. Fix TypeScript and Import Errors

- [x] 5.1 Run `pnpm build` and capture all TypeScript/module errors
- [x] 5.2 Fix any residual imports referencing deleted modules
- [x] 5.3 Fix any type errors in files that referenced removed models (Discussion, Comment, Team types)
- [x] 5.4 Run `pnpm build` again to confirm zero errors

## 6. Fix Unit Tests

- [x] 6.1 Delete test files inside deleted feature directories (already removed in step 1)
- [x] 6.2 Delete or update `apps/src/app/app/discussions/__tests__/` if still present after route deletion
- [x] 6.3 Run `pnpm test` and capture failures
- [x] 6.4 Fix any test failures caused by removed handlers or missing mock data
- [x] 6.5 Run `pnpm test` again to confirm all tests pass

## 7. Fix E2E Tests

- [x] 7.1 Review `apps/e2e/tests/smoke.spec.ts` and remove assertions on demo routes
- [x] 7.2 Review `apps/e2e/tests/profile.spec.ts` and simplify/remove if it depends on demo data
- [x] 7.3 Update e2e tests to cover: login, authenticated dashboard load, logout
- [ ] 7.4 Run `pnpm test:e2e` and confirm all e2e tests pass

## 8. Verify Clean Scaffold

- [x] 8.1 Run `pnpm dev` and confirm the app starts, auth pages render, and dashboard placeholder renders
- [x] 8.2 Confirm no console errors or 404s for retained routes
- [x] 8.3 Confirm `apps/src/features/` only contains `auth` and `users` (stripped)
- [x] 8.4 Confirm `apps/src/components/`, `hooks/`, `lib/`, `utils/`, `types/`, `config/` are all intact
