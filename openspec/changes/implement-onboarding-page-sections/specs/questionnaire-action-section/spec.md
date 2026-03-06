## ADDED Requirements

### Requirement: Action Section displays primary action button

The questionnaire action section SHALL display a primary action button that typically advances the questionnaire to the next step. The button SHALL support different states (enabled, disabled, loading).

#### Scenario: Primary button renders with text
- **WHEN** ActionSection is rendered with actionLabel="Continue"
- **THEN** system displays a button with the specified label text and primary styling

#### Scenario: Primary button is clickable when enabled
- **WHEN** user clicks an enabled ActionSection button
- **THEN** system fires the onAction callback

#### Scenario: Button is disabled and non-clickable
- **WHEN** ActionSection is rendered with disabled={true}
- **THEN** system displays the button with disabled styling and does not fire onAction callback when clicked

#### Scenario: Button shows loading state
- **WHEN** ActionSection is rendered with isLoading={true}
- **THEN** system displays a loading indicator within the button and disables the click handler

### Requirement: Action Section optionally displays secondary action

The action section SHALL optionally display a secondary action button (e.g., "Skip" button) alongside the primary button.

#### Scenario: Secondary button renders when provided
- **WHEN** ActionSection is rendered with secondaryLabel="Skip"
- **THEN** system displays both primary and secondary buttons in the footer

#### Scenario: Secondary button is not rendered when not provided
- **WHEN** ActionSection is rendered without secondaryLabel prop
- **THEN** system displays only the primary button

#### Scenario: Secondary button fires separate callback
- **WHEN** user clicks the secondary button
- **THEN** system fires the onSecondaryAction callback instead of onAction

### Requirement: Action Section maintains proper spacing and alignment

The action section SHALL position buttons with consistent spacing and alignment per design specifications.

#### Scenario: Buttons are aligned left
- **WHEN** ActionSection is rendered in the questionnaire footer
- **THEN** system displays buttons aligned to the left with proper vertical spacing from content above
