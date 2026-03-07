## Context

The onboarding flow was initially implemented with:
- Zustand store with localStorage persistence middleware
- Fixed Tailwind grid classes (grid-cols-2, md:grid-cols-4) that don't adapt smoothly to all screen sizes
- Button sizing and alignment issues relative to Figma design
- Icons and mock data embedded in feature folder, hindering reusability
- Some Figma spacing metrics not covered by existing design tokens

Issues discovered:
1. On first visit to `/onboarding`, persisted state initializes before hydration is complete, causing mismatches
2. Grid layout doesn't center buttons or flex proportionally to container width like Figma
3. Asset reusability limited by scattering across feature modules
4. Design fidelity suffers from missing tokens for screen-specific spacing

## Goals / Non-Goals

**Goals:**
- Implement safe state initialization preventing SSR/client hydration mismatches
- Create responsive grid layout with dynamic flex-based columns exactly matching Figma design
- Centralize reusable assets (icons, mock data) in `src/assets/` with clean import paths
- Add design tokens for responsive spacing and sizing to achieve pixel-perfect Figma compliance
- Maintain backward compatibility with existing onboarding context and user experience

**Non-Goals:**
- Backend API integration (remain mock-only)
- Change question content, order, or flow logic
- Modify Zustand store API contract
- Add new question types or selection modes
- Analytics or tracking features

## Decisions

### 1. State Initialization: Client-Side Hydration Check
**Decision:** Use a client-side boolean flag (`isHydrated`) in Zustand to prevent loading persisted state during SSR. Only apply localStorage persistence after hydration.

**Rationale:**
- SSR renders without localStorage access; hydration then applies client state
- Without a guard, mismatched states cause React mismatches
- Flag is set in useEffect after component mounts, ensuring pure client-side execution
- Preserves localStorage benefits while preventing hydration errors

**Alternatives:**
- Remove localStorage entirely: Loses user data across navigations
- Fallback to server state: No localStorage in Next.js SSR by default
- Dynamic import: More complex, similar result

### 2. Responsive Grid Layout: CSS Grid with Flex-Based Columns
**Decision:** Replace Tailwind dynamic class names with inline CSS Grid using `gridTemplateColumns: repeat(columns, 1fr)`. Determine columns based on screen size via media queries or container queries.

**Rationale:**
- Tailwind's dynamic class names (grid-cols-${n}) don't work at runtime—only hardcoded classes compile
- CSS Grid's `repeat(n, 1fr)` scales columns dynamically without class name bloat
- Inline styles allow screen-aware calculation of column count per breakpoint
- Supports smooth centering and automatic button sizing within cells

**Alternatives:**
- CSS supergrid with subgrid: Good but needs wider browser support
- Flexbox wrap: Less precisely aligned, harder to center
- JavaScript layout: Adds runtime overhead

### 3. Button Centering: Container-Based Alignment
**Decision:** Use flexbox within ChoiceCard to center content, apply `justify-items: center` at grid level.

**Rationale:**
- Buttons naturally center icon + label vertically within cards
- Grid's justify-items centers all cards horizontally
- Simple, no additional wrapper needed
- Aligns with existing ChoiceCard structure

### 4. Asset Organization: Centralized src/assets/
**Decision:** Create `src/assets/` with subdirectories:
- `src/assets/icons/` — SVG icon components (meal icons, generic icons)
- `src/assets/mocks/` — Shared mock data (shared across features)
- Feature `__mocks__/` — Feature-specific test mocks only

**Rationale:**
- Clears feature folders of reusable assets
- Single source of truth for icons
- Distinguishes test mocks (in __mocks__/) from product mocks
- Easier to audit and maintain asset library

**Alternatives:**
- Keep in features: Mixed concerns, harder to reuse
- All in public/: Needs runtime loading, not tree-shakeable

### 5. Design Tokens: New Responsive Token Layer
**Decision:** Add `src/lib/design-tokens/responsive.ts` with screen-aware spacing and gap definitions. Token set includes responsive grid gaps and container spacing.

**Rationale:**
- Figma designs use screen-specific spacing that current tokens don't capture
- Central file enables audit and consistency
- Exported as named constants for type safety
- Integrates with existing token architecture

**Alternatives:**
- Hardcode values in components: Breaks design token contract
- Add to colors.ts: Mixing concerns, harder to find responsive values

## Risks / Trade-offs

**[Risk] Breaking localStorage persistence during transition → [Mitigation]** Plan cleanup: users on old version may see reset state on first load after upgrade. Document in release notes. Acceptable since onboarding is one-time flow.

**[Risk] CSS Grid in older browsers → [Mitigation]** CSS Grid supported in all modern browsers (IE11 EOL). Use graceful degradation if needed: fallback to flexbox for legacy.

**[Risk] Asset moving may break imports → [Mitigation]** Use automated find-replace after moving files. Create barrel exports in src/assets/index.ts to ease imports.

**[Risk] New responsive tokens add complexity → [Mitigation]** Document in token README with examples. Auto-generate CSS variables. Keep naming consistent with existing pattern.

**[Trade-off] Memoization vs. simplicity in ChoiceGrid → [Mitigation]** Use useMemo for grid styles to prevent recalculation, accept minor complexity increase for performance.

## Migration Plan

1. **Phase 1: Asset Migration**
   - Create `src/assets/icons/` and `src/assets/mocks/`
   - Move meal icons from `src/features/onboarding/components/meal-icon.tsx` to `src/assets/icons/meal-icons.tsx`
   - Create barrel export: `src/assets/icons/index.ts`
   - Update imports in onboarding components
   - Test: No visual or functional changes

2. **Phase 2: Design Tokens**
   - Create `src/lib/design-tokens/responsive.ts` with screen-specific spacing
   - Add tokens to `src/lib/design-tokens/index.ts` barrel export
   - Update existing spacing references to use new tokens where applicable

3. **Phase 3: Grid Layout Refactor**
   - Update `src/components/ui/choice-grid.tsx` to use CSS Grid with dynamic columns
   - Update gap calculation to use responsive tokens
   - Update `src/features/onboarding/components/onboarding-question.tsx` if needed
   - Test: Grid responsiveness at sm, md, lg breakpoints

4. **Phase 4: State Initialization**
   - Add `isHydrated` flag to Zustand store
   - Update persist middleware to skip on server
   - Add useEffect in `OnboardingFlow` to set hydrated flag
   - Test: Fresh browser load, localStorage load, SSR scenarios

5. **Phase 5: Testing & Verification**
   - E2E tests for grid layout across breakpoints
   - Test state persistence: fresh visit, returning visit, localStorage clear
   - Visual regression: Compare screenshots at key breakpoints against Figma
   - Performance: Measure re-render cycles

**Rollback:** If issues arise, revert file movements and restore original imports. Original implementation remains functional.

## Open Questions

1. Should responsive tokens live in design-tokens/ or in a separate responsive.ts module?
2. Do we need container queries, or are media queries sufficient for this use case?
3. How should we handle icon sizing responsively? Fixed px or relative sizing?
4. Should mock data be fully reorganized or kept partial in features for isolation?
