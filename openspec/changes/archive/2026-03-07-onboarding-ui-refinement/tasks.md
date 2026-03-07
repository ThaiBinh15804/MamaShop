## 1. Design Tokens: Responsive Values and Gap Tokens

- [x] 1.1 Create src/lib/design-tokens/responsive.ts with screen-specific spacing constants
- [x] 1.2 Define mobile spacing tokens (< 640px breakpoint values)
- [x] 1.3 Define tablet spacing tokens (640px - 1024px breakpoint values)
- [x] 1.4 Define desktop spacing tokens (> 1024px breakpoint values)
- [x] 1.5 Verify all Figma gap values (XS, SM, MD, LG, XL, XXL) map to SPACING tokens
- [x] 1.6 Add any missing gap tokens to SPACING if Figma specifies unmapped values
- [x] 1.7 Export responsive tokens from src/lib/design-tokens/index.ts
- [x] 1.8 Update src/lib/design-tokens/README.md with responsive token documentation

## 2. Asset Organization: Icons

- [x] 2.1 Create `src/assets/` directory structure with `icons/` and `mocks/` subdirectories
- [x] 2.2 Create `src/assets/icons/meal-icons.tsx` and move all 8 meal icon components from src/features/onboarding/components/meal-icon.tsx
- [x] 2.3 Create `src/assets/icons/index.ts` barrel export with all meal icon exports
- [x] 2.4 Update src/features/onboarding/components/onboarding-question.tsx import paths to use src/assets/icons
- [x] 2.5 Verify all icon imports resolve correctly (no broken imports)
- [x] 2.6 Delete old meal-icon.tsx from feature folder after verifying no other references exist
- [x] 2.7 Add JSDoc comments in icons/index.ts explaining icon categories and usage

## 3. Asset Organization: Mock Data

- [x] 3.1 Create `src/assets/mocks/` directory and `onboarding-mocks.ts` for shared test data
- [x] 3.2 Move shared mock question data (not feature-specific) to src/assets/mocks/onboarding-mocks.ts
- [x] 3.3 Keep feature-specific test mocks in src/features/onboarding/__mocks__/ for isolation
- [x] 3.4 Update src/assets/index.ts with mocks barrel export
- [x] 3.5 Verify test files importing mocks still resolve correctly

## 4. Asset Organization: Centralized Exports

- [x] 4.1 Create `src/assets/index.ts` barrel export file
- [x] 4.2 Re-export icons from src/assets/icons with `export * from './icons'`
- [x] 4.3 Re-export mocks from src/assets/mocks with `export * as mocks from './mocks'`
- [x] 4.4 Export any utility functions if needed with clear organization
- [x] 4.5 Test importing from @/assets works as expected in components

## 5. Grid Layout Refinement: ChoiceGrid Component

- [x] 5.1 Refactor src/components/ui/choice-grid.tsx to remove dynamic Tailwind class names
- [x] 5.2 Replace grid layout with inline CSS Grid using gridTemplateColumns: repeat(N, 1fr) where N is responsive
- [x] 5.3 Remove tabletColumns and desktopColumns props (determine from breakpoints internally or accept media query approach)
- [x] 5.4 Calculate column count based on screen size: 2 cols < 640px, 2 cols 640-1024px, 4 cols > 1024px
- [x] 5.5 Use responsive design tokens for gap value (default to MD, allow override)
- [x] 5.6 Update ChoiceGrid to use useMemo for grid style calculation for performance
- [x] 5.7 Ensure TypeScript types remain strict and correct for all props

## 6. Grid Layout Refinement: ChoiceCard Component

- [x] 6.1 Verify ChoiceCard uses flexbox to center icon and label (already implemented)
- [x] 6.2 Ensure ChoiceCard height and width use design tokens or document magic numbers per Figma
- [x] 6.3 Update ChoiceCard padding to use semantic spacing tokens (currently SPACING[4])
- [x] 6.4 Update ChoiceCard gap to use semantic spacing tokens (currently SPACING[3])
- [ ] 6.5 Run visual regression: compare ChoiceCard rendering before/after against Figma
- [ ] 6.6 Test ChoiceCard at multiple viewport sizes (mobile, tablet, desktop)

## 7. State Initialization: Zustand Hydration Guard

- [x] 7.1 Add `isHydrated` boolean to onboarding store initial state (false)
- [x] 7.2 Create `setHydrated` action in store to set flag to true
- [x] 7.3 Configure Zustand persist middleware to skip loading on server (use conditional middleware or skipHydration option)
- [x] 7.4 Ensure persist middleware only applies localStorage on client after hydration
- [ ] 7.5 Test persist middleware: verify no hydration errors in console
- [ ] 7.6 Test SSR scenario: visit /onboarding with cache disabled (should render cleanly)

## 8. State Initialization: OnboardingFlow Component

- [x] 8.1 Add useEffect in OnboardingFlow to call store's setHydrated after mount
- [x] 8.2 Add conditional render guard: return null or loading state while !isHydrated on server
- [ ] 8.3 Test fresh browser first visit: /onboarding should load without errors
- [ ] 8.4 Test returning visit: localStorage data should restore correctly
- [ ] 8.5 Test cleared storage: should show fresh state, no errors
- [ ] 8.6 Verify hydration mismatch warnings do NOT appear in console

## 9. Onboarding Question Component Updates

- [x] 9.1 Verify OnboardingQuestion component still renders ChoiceGrid with updated props
- [x] 9.2 Update any hardcoded gap values to use responsive design tokens
- [ ] 9.3 Test question rendering across breakpoints (mobile, tablet, desktop)
- [ ] 9.4 Visual check: buttons should center in grid cells per Figma design
- [x] 9.5 Verify imports use src/assets/icons for meal icons (post-refactor)

## 10. TypeScript and Type Safety

- [x] 10.1 Run npm run check-types and verify no TypeScript errors
- [x] 10.2 Update ChoiceGridProps type if breaking changes to column props
- [x] 10.3 Ensure responsive token types are exported correctly
- [x] 10.4 Add JSDoc type hints for new design token constants

## 11. Testing and Validation

- [ ] 11.1 Create visual regression tests comparing grid layouts before/after
- [ ] 11.2 Test grid responsiveness at sm (640px), md (1024px), lg breakpoints
- [ ] 11.3 Test button selection state: verify selected state doesn't break alignment
- [ ] 11.4 Test on actual devices or emulator (Chrome DevTools) for real-world validation
- [ ] 11.5 E2E test: complete onboarding flow on mobile, tablet, desktop viewports
- [ ] 11.6 Verify localStorage persistence works: complete flow, hard refresh, revisit
- [x] 11.7 Run npm run build and verify no build errors

## 12. Documentation and Cleanup

- [x] 12.1 Update src/assets/README.md with asset organization structure and import guidelines
- [x] 12.2 Add comments in ChoiceGrid explaining responsive column calculation
- [x] 12.3 Document hydration guard pattern in OnboardingFlow JSDoc
- [x] 12.4 Update src/features/onboarding/README.md to reference src/assets/icons location
- [x] 12.5 Run prettier and linters to ensure code style consistency
- [ ] 12.6 Final visual check: all components match Figma design specifications
