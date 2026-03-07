## ADDED Requirements

### Requirement: Display party size or dietary question

The system SHALL render the third onboarding question asking "How many people will be eating at the table?" with multiple choice options.

#### Scenario: Display party size options
- **WHEN** user views third onboarding question
- **THEN** system displays choice cards for different party sizes (e.g., "Just me", "2 people", "3-4 people", "5+ people")

#### Scenario: Support single selection for party size
- **WHEN** user clicks a party size card
- **THEN** only one party size remains selected (radio-button style behavior)

#### Scenario: Display question title
- **WHEN** party size question loads
- **THEN** title "How many people will be eating at the table?" displays above choice cards

#### Scenario: Allow option modification
- **WHEN** user selects one party size and then clicks another
- **THEN** new selection replaces previous selection

### Requirement: Store and retrieve party size selection

The system SHALL persist user party size selection in onboarding state.

#### Scenario: Save party size selection
- **WHEN** user selects party size and continues
- **THEN** selection is stored in onboarding state

#### Scenario: Restore previous party size selection
- **WHEN** user navigates back to party size question
- **THEN** previously selected party size remains highlighted

### Requirement: Final question completion triggers onboarding end

The system SHALL recognize when user completes the final question.

#### Scenario: Detect last question completion
- **WHEN** user is on party size question (question 3 of 3)
- **THEN** Continue button triggers onboarding completion flow

#### Scenario: Trigger post-onboarding actions
- **WHEN** user completes final question
- **THEN** system stores all selections and navigates to main application home screen
