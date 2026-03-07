## ADDED Requirements

### Requirement: Display meal preference question with 8 category options

The system SHALL render the first onboarding question asking "What kind of meals do you prefer?" with 8 food category choice cards.

#### Scenario: Display all 8 meal categories
- **WHEN** user views meal preference question
- **THEN** system displays cards for: Mushroom, Fish, Ham, Meat, Spaghetti, Shrimp, Pizza, Chicken

#### Scenario: Each category has appropriate icon
- **WHEN** meal preference question renders
- **THEN** each category displays a distinct icon representing that food type

#### Scenario: Arrange cards in responsive grid
- **WHEN** question renders on desktop
- **THEN** 4 cards display per row

#### Scenario: Allow multiple selections
- **WHEN** user clicks multiple category cards
- **THEN** all clicked cards remain highlighted to show selection

#### Scenario: Display question title
- **WHEN** meal preference question loads
- **THEN** title "What kind of meals do you prefer?" displays above choice cards

### Requirement: Store and retrieve meal preference selections

The system SHALL persist user meal preferences in onboarding state.

#### Scenario: Save selected meal preferences
- **WHEN** user selects meal categories and continues
- **THEN** selections are stored in onboarding state

#### Scenario: Restore previous meal preferences
- **WHEN** user navigates back to meal preference question
- **THEN** previously selected categories remain highlighted
