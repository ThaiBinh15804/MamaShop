## Context

The onboarding flow is a critical entry point for new users, designed to gather personalizable information before accessing the main application. The Figma design provides a 3-question interview flow: (1) meal preferences with 8 category options, (2) goals with the platform, and (3) party size or dietary requirements. Each screen displays a title, multiple-choice cards, progress indicator, and navigation button.

The application uses a design token system as the single source of truth for styling—no raw values from Figma are used directly in components.

## Goals / Non-Goals

**Goals:**
- Implement a reusable multi-step questionnaire component following the feature-based architecture
- Create individual step components as isolated, composable units
- Ensure all styling uses design tokens (no hardcoded values)
- Support both mobile and desktop layouts via responsive design tokens
- Build components that can be extended for future onboarding questions
- Provide clear visual feedback through progress indication and state management

**Non-Goals:**
- Backend API integration (use static mock data only)
- Persistent storage of onboarding responses (phase for later)
- Analytics or tracking integration
- A/B testing variants or dynamic question ordering

## Decisions

### 1. Component Architecture
**Decision:** Use a shared `OnboardingFlow` container component + isolated question step components.

**Rationale:** 
- Container manages state and progression logic
- Individual question components (Question1, Question2, Question3) remain simple and reusable
- Separates concerns: flow logic vs. UI rendering
- Enables future questions to be added without modifying flow logic

**Alternatives Considered:**
- Single monolithic component: Too coupled, harder to test and reuse
- Independent screens without shared logic: Would duplicate progression code

### 2. Reusable UI Primitives
**Decision:** Create `ChoiceCard` and `ChoiceGrid` primitives in `src/components/ui/` for multi-select interactions.

**Rationale:**
- Interview-style UI is common in onboarding flows
- Primitives enable reuse across future flows
- Follows feature-based architecture: primitives in `ui/`, feature composition in `features/onboarding/`
- Single source of truth for choice card styling and interaction

### 3. State Management
**Decision:** Use Zustand store for onboarding state (preferences, current step).

**Rationale:**
- Existing pattern in project (used in testing setup)
- Lightweight for simple state management
- Enables persistence across navigation if needed later
- Avoids prop drilling through nested components

### 4. Progress Indication
**Decision:** Reuse existing `Progress` component from Figma with step-based calculation.

**Rationale:**
- Component already exists in design system
- Clear visual feedback on progress through questions
- Easier UX pattern recognition for users

### 5. Schema-Driven Question Architecture
**Decision:** Use a configuration-driven question system instead of hardcoded question components.

**Rationale:**
- Generic `OnboardingQuestion` component accepts question config (title, options, selectionMode)
- Questions defined in mock configuration file (`onboardingQuestions.ts`)
- Single reusable component renders all questions (meal, goals, party size)
- Easy to add new questions without modifying component logic
- Enables dynamic question ordering or conditional questions in future
- Configuration separates concerns: data structure vs. UI rendering

**Alternatives Considered:**
- Separate Question1, Question2, Question3 components: More boilerplate, harder to extend
- Server-side question configuration: Out of scope for current phase

**Question Schema:**
```typescript
interface OnboardingQuestion {
  id: string;              // unique question identifier
  title: string;           // question text
  selectionMode: 'single' | 'multiple';  // single or multi-select
  options: OnboardingOption[];  // available choices
  stepNumber?: number;     // calculated, not configured
}

interface OnboardingOption {
  id: string;              // option identifier
  label: string;           // display text
  icon?: string;           // icon name or SVG path for meal preferences
}
```

### 6. Design Tokens vs. Hardcoded Values
**Decision:** All color, spacing, typography, and radius values must map to design tokens.

**Rationale:**
- Project architectural requirement
- Ensures consistency with design system
- Enables future theme updates without code changes
- Any missing tokens will be added to token system before component implementation

## Risks / Trade-offs

**[Risk] Complex multi-step state management → [Mitigation]** Keep state simple (current step + selections). Avoid complex derived state. Use selectors for UI-specific calculations.

**[Risk] Configuration-driven approach may be over-engineered for 3 questions → [Mitigation]** Schema-based design enables easy extension (adding questions requires only config, not component code). Future-proofs architecture for additional onboarding content.

**[Risk] Design tokens may have gaps → [Mitigation]** Perform comprehensive token audit during design phase. Add missing tokens to design system before implementation.

**Trade-off:** Generic `OnboardingQuestion` component vs. multiple specialized components. Chose generic for maintainability and extensibility, accepts slight complexity in option rendering logic.

## Migration Plan

1. **Phase 1**: Create design token audit and update tokens if needed
2. **Phase 2**: Implement UI primitives (`ChoiceCard`, `ChoiceGrid`)
3. **Phase 3**: Define OnboardingQuestion schema and create mock configuration
4. **Phase 4**: Implement generic `OnboardingQuestion` component and option selection logic
5. **Phase 5**: Implement Zustand store for state management
6. **Phase 6**: Render all 3 questions using configuration (meal, goals, party size)
7. **Phase 7**: Create container component and wire navigation/storage
8. **Phase 8**: Add routing and mock data handlers

**Rollback:** Remove route from navigation; components remain in codebase until cleanup phase.
