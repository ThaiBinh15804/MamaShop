## ADDED Requirements

### Requirement: Progress bar displays completion percentage

The system SHALL render a filled progress bar that indicates the percentage of questionnaire steps completed.

#### Scenario: Initial progress shows step 1 of 3
- **WHEN** user is on first question
- **THEN** progress bar fills approximately 33% (1/3 complete)

#### Scenario: Progress updates at each step
- **WHEN** user completes a question and advances
- **THEN** progress bar reflects new percentage (67% on question 2, 100% on question 3)

### Requirement: Progress bar uses design tokens for styling

The system SHALL apply design tokens for all color, spacing, and sizing properties.

#### Scenario: Use token colors for bars
- **WHEN** progress bar renders
- **THEN** background bar uses neutral color token and fill uses primary color token

#### Scenario: Use token spacing for padding
- **WHEN** progress bar is positioned on screen
- **THEN** spacing around bar uses design token scale
