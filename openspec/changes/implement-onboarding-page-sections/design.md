## Context

The Figma design for the onboarding flow presents three questionnaire screens with similar layouts but different option presentations. Each screen follows a consistent structure: header with navigation and progress indicator, centered title, selectable options area, and continuation button. The design uses a 2-column layout with content on the left and an illustration on the right.

Currently, there are no reusable patterns for multi-step questionnaire flows in the codebase. Building structured components will establish a foundation for the onboarding feature module while allowing similar patterns to be reused in settings or survey contexts.

## Goals / Non-Goals

**Goals:**
- Define reusable component hierarchy that maps Figma layout sections to React components
- Establish clear separation between layout sections (header, content, footer) for independent reusability
- Create components that work with both icon-based options (meal preferences) and text-based badges (goals)
- Support single and multi-select modes for option collections
- Follow Bulletproof React feature-based architecture by placing components in `src/features/onboarding/components/`
- Use existing design tokens and UI primitives from `src/components/ui/`
- Enable progress tracking and navigation state management within questionnaire flows

**Non-Goals:**
- Backend API integration (using mock data only)
- Form-level validation (handled separately)
- Animations or micro-interactions beyond CSS hover states
- Full page layout (only questionnaire sections)
- Mobile-specific responsive design (desktop-focused for now)

## Decisions

**1. Component Composition Structure**
- **Decision**: Create three independent section components (Header, Content, Footer) that can be composed into a QuestionnaireSection container, rather than a single monolithic component.
- **Rationale**: Section-level components are reusable across different questionnaire types and can be independently styled. Header can appear in other flows, action buttons are reusable in forms, etc.
- **Alternative Considered**: Single OnboardingQuestion component with props for each section → Less flexible, harder to reuse parts independently.

**2. Option Badge Component with Variants**
- **Decision**: Implement QuestionnaireOptionBadge as a single component with two layout variants: `icon-grid` (for meal preferences) and `text-badge` (for goal options). Use component props to switch behaviors (`variant`, `icon`, `selected` state).
- **Rationale**: Both option types share selection logic, active states, and hover effects. Using variants avoids code duplication while keeping similar options grouped.
- **Alternative Considered**: Separate MealOptionCard and GoalOptionBadge components → More verbose, duplicates selection logic.

**3. Data Structure for Options**
- **Decision**: Define options as simple objects: `{ id: string; label: string; icon?: string; count?: number }`. Pass to component via props, with selection state managed at the questionnaire level.
- **Rationale**: Simple shape is easy to mock, compose, and test. Parent component controls multi/single-select logic, badge only handles interaction events.
- **Alternative Considered**: Complex nested option structures → Overly flexible, harder to validate.

**4. Progress Bar Visualization**
- **Decision**: Use two layered divs: background progress track + foreground filled portion. Controlled via a `progress` prop (0-100 percentage).
- **Rationale**: Simple CSS-based approach using design tokens for colors. No external dependency. Matches Figma design exactly.
- **Alternative Considered**: SVG progress circle → Doesn't match design, adds unnecessary complexity.

**5. Placement in Feature Module**
- **Decision**: Place components in `src/features/onboarding/components/` directory with sub-folders by section type:
  - `sections/HeaderSection.tsx`
  - `sections/ContentSection.tsx`
  - `sections/ActionSection.tsx`
  - `ui/OptionBadge.tsx`
  - `ui/ProgressBar.tsx`
  - `OnboardingQuestionnaire.tsx` (container)
- **Rationale**: Clear separation between section-level containers and UI primitives. Sections are reusable across the onboarding flow, UI components are fine-grained. Matches Bulletproof React's feature-module structure.
- **Alternative Considered**: Place all in `src/components/ui/` → Loses context that these are onboarding-specific patterns.

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| Option badge component might not handle edge cases (many options, long labels). | Design system specifies max labels; content review process will validate. |
| Section components could become tightly coupled if not carefully designed. | Each section component receives data only as props; no direct inter-section dependencies. |
| Progress bar needs to support variable step counts. | Progress prop supports 0-100; scales to any number of steps. |
| Variant-based option badge might grow complex with more option types. | Monitor and refactor into separate components if complexity exceeds 3 distinct variants. |

## Implementation Approach

1. **Build UI primitives first**: ProgressBar, OptionBadge (focused on visual structure)
2. **Build section containers**: HeaderSection, ContentSection, ActionSection with required props
3. **Create OnboardingQuestionnaire container** that composes sections and manages state
4. **Connect to mock data source** for initial test questionnaire flow
5. **Add TypeScript interfaces** for all component props and option shapes

Each component exports its interface for external reusability. Example:
```
export interface QuestionnaireOptionBadgeProps { ... }
export interface QuestionnaireContentSectionProps { ... }
```

## Open Questions

- Should questionnaire state (selected options, current step) live in a Zustand store or React context?
- How should multi-select option limits be enforced (max 3 selections)?
- Should progress bar show step numbers (e.g., "1/3") or just visual progress?
