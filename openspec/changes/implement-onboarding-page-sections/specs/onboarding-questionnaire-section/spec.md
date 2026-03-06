## ADDED Requirements

### Requirement: Questionnaire Section renders question with title and description

The questionnaire section SHALL display a question with a heading, optional description, and a list of selectable options. The component SHALL be composable and reusable across different questionnaire flows.

#### Scenario: Display simple question with icon-based options
- **WHEN** QuestionnaireSection is rendered with type="question" and options containing icons
- **THEN** system displays the title as a heading, renders each option as an icon badge in a grid layout

#### Scenario: Display goal-selection question with text options
- **WHEN** QuestionnaireSection is rendered with type="question" and options as text badges
- **THEN** system displays the title as a heading, renders each option as a text badge in a flex-wrap layout

### Requirement: Questionnaire Section manages option selection state

The questionnaire section SHALL handle user interactions with options. It SHALL emit selection events and update visual state for selected options.

#### Scenario: Single option selected
- **WHEN** user clicks on an option in single-select mode
- **THEN** system highlights the selected option and fires an onSelect callback with the selected option ID

#### Scenario: Multiple options selected
- **WHEN** user clicks multiple options in multi-select mode
- **THEN** system highlights each selected option and fires an onSelect callback with an array of selected IDs

#### Scenario: Deselect previously selected option
- **WHEN** user clicks an already-selected option
- **THEN** system removes the selection highlight and updates the selection state

### Requirement: Questionnaire Section provides composition API

The questionnaire section SHALL be decomposable into independent header, content, and footer sections that can be used standalone or composed together.

#### Scenario: Header section used independently
- **WHEN** HeaderSection component is rendered with a back button and progress bar
- **THEN** system displays the header with back button callback and progress percentage without requiring the full questionnaire container

#### Scenario: Content section used independently  
- **WHEN** ContentSection component is rendered with a title and options array
- **THEN** system displays the content area with title and selectable options without header or footer

#### Scenario: Full questionnaire composed from sections
- **WHEN** OnboardingQuestionnaire wraps HeaderSection, ContentSection, and ActionSection
- **THEN** system renders a complete questionnaire screen with all sections coordinating state and events
