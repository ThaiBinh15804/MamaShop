## ADDED Requirements

### Requirement: Onboarding flow manages multi-step questionnaire

The system SHALL render a multi-step questionnaire that guides users through preference discovery. The flow SHALL display one question at a time, track progress, and enable navigation between steps.

#### Scenario: Display first question on initial load
- **WHEN** user navigates to onboarding route
- **THEN** system displays the first question (meal preferences) with 8 choice options

#### Scenario: Progress to next question
- **WHEN** user selects at least one choice and clicks Continue
- **THEN** system advances to the next question and updates progress indicator

#### Scenario: Navigate back to previous question
- **WHEN** user clicks the back button on a non-first question
- **THEN** system returns to previous question with previous selections preserved

#### Scenario: Complete onboarding
- **WHEN** user completes the final question and clicks Continue
- **THEN** system stores selections and navigates user to main application

### Requirement: Onboarding state persists across navigation

The system SHALL maintain onboarding responses in application state during the session.

#### Scenario: Preserve selections when navigating
- **WHEN** user selects options and navigates back
- **THEN** previous selections remain selected when returning to that question

#### Scenario: State accessible to next phase
- **WHEN** onboarding completes
- **THEN** user preferences are available for personalization on home screen

### Requirement: Progress indicator reflects current step

The system SHALL display visual progress showing how far the user is through the onboarding flow.

#### Scenario: Show progress on first question
- **WHEN** user views first question of 3-question flow
- **THEN** progress bar shows 33% completion

#### Scenario: Update progress on step completion
- **WHEN** user advances to question 2
- **THEN** progress bar updates to show 66% completion
