## ADDED Requirements

### Requirement: Display goals question with multiple options

The system SHALL render the second onboarding question asking "What are your goals with EasyMart?" with choice cards for different goal options.

#### Scenario: Display goal options
- **WHEN** user views second onboarding question
- **THEN** system displays cards for user goals with EasyMart

#### Scenario: Support text-based goal options
- **WHEN** goal question renders
- **THEN** goal options display as selectable cards with text labels instead of icons (e.g., "Browse recipes", "Plan meals", "Find ingredients")

#### Scenario: Allow multiple goal selections
- **WHEN** user clicks multiple goal cards
- **THEN** all clicked goals remain highlighted

#### Scenario: Display question title
- **WHEN** goals question loads
- **THEN** title "What are your goals with EasyMart?" displays above choice cards

#### Scenario: Arrange goal cards responsively
- **WHEN** question renders on different screen sizes
- **THEN** cards adapt to mobile or desktop layout while maintaining usability

### Requirement: Store and retrieve goal selections

The system SHALL persist user goal selections in onboarding state.

#### Scenario: Save selected goals
- **WHEN** user selects goals and continues
- **THEN** selections are stored in onboarding state

#### Scenario: Restore previous goal selections
- **WHEN** user navigates back to goals question
- **THEN** previously selected goals remain highlighted
