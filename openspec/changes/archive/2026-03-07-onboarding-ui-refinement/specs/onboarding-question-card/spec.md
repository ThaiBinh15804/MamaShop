## MODIFIED Requirements

### Requirement: Question card with responsive grid
The OnboardingQuestion component (which renders question cards in a ChoiceGrid) SHALL use the refined grid layout with dynamic flex-based columns. ChoiceCard components within the grid SHALL be properly centered and sized.

#### Scenario: Card rendering in responsive grid
- **WHEN** OnboardingQuestion renders a question with multiple options
- **THEN** cards are arranged in a ChoiceGrid with dynamic columns
- **AND** cards center within their grid cells

#### Scenario: Card selection and alignment
- **WHEN** user selects a card and that card's visual state changes
- **THEN** selected card state does NOT disrupt grid alignment
- **AND** all cards remain centered

### Requirement: Design token compliance in question cards
The OnboardingQuestion and ChoiceCard components SHALL use design tokens for all spacing, sizing, colors, and typography. No hardcoded values SHALL appear except in comments or documentation.

#### Scenario: Token-based styling
- **WHEN** ChoiceCard renders
- **THEN** all style values (padding, gap, colors, borders) reference design tokens
- **AND** values match Figma specification exactly
