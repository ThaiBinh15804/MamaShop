## 1. Delete All Feature Modules

- [x] 1.1 Delete `apps/src/features/` directory and all contents (auth, discussions, comments, teams)
- [x] 1.2 Verify features directory is empty or gone

## 2. Delete All App Routes

- [x] 2.1 Delete `apps/src/app/app/` route directory and all contents
- [x] 2.2 Delete `apps/src/app/auth/` route directory and all contents
- [x] 2.3 Delete `apps/src/app/public/` route directory and all contents
- [x] 2.4 Replace `apps/src/app/page.tsx` with a simple Welcome page
- [x] 2.5 Update `apps/src/app/layout.tsx` (root layout) to be minimal if needed

## 3. Strip MSW Mock Layer

- [x] 3.1 Delete all MSW handler files in `apps/src/testing/mocks/handlers/` (auth, users, discussions, comments, teams)
- [x] 3.2 Update `apps/src/testing/mocks/handlers/index.ts` to export empty handlers array
- [x] 3.3 Remove all factory/model definitions from `apps/src/testing/mocks/db.ts`
- [x] 3.4 Remove all generator functions from `apps/src/testing/data-generators.ts`
- [x] 3.5 Update `apps/mocked-db.json` to be empty or minimal

## 4. Clean Configuration

- [x] 4.1 Simplify `apps/src/config/paths.ts` to only export home route constant
- [x] 4.2 Verify `apps/src/lib/auth.tsx` is not imported anywhere (delete if unused)
- [x] 4.3 Update `apps/src/app/provider.tsx` if it contains auth-specific setup

## 5. Fix TypeScript and Build Errors

- [x] 5.1 Run `npm run build` and capture all errors
- [x] 5.2 Fix any remaining imports or type errors
- [x] 5.3 Run `npm run build` again to confirm zero errors

## 6. Fix Tests

- [x] 6.1 Run `npm test` and capture failures
- [x] 6.2 Fix or remove tests that reference deleted code
- [x] 6.3 Run `npm test` again to confirm all tests pass

## 7. Verify Minimal Scaffold

- [x] 7.1 Verify `apps/src/features/` is empty
- [x] 7.2 Verify only `/` route exists (verify with `ls apps/src/app/app/` returns nothing)
- [x] 7.3 Verify shared infrastructure intact: `components/`, `hooks/`, `lib/`, `utils/`, `types/`, `config/`, `testing/`
- [x] 7.4 Run `npm run dev` and confirm it starts and welcome page renders
