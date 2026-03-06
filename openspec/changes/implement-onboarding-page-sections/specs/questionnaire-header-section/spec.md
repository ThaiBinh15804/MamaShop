## ADDED Requirements

### Requirement: Header Section displays navigation controls

The questionnaire header section SHALL display a back button and remain compact while providing navigation controls for multi-step flows.

#### Scenario: Back button is rendered and functional
- **WHEN** HeaderSection is rendered with onBack callback
- **THEN** system displays a back button icon that calls onBack when clicked

#### Scenario: Back button is hidden when not needed
- **WHEN** HeaderSection is rendered with showBackButton={false}
- **THEN** system does not display the back button element

#### Scenario: Header displays appropriately in layout
- **WHEN** HeaderSection is rendered within a questionnaire container
- **THEN** system positions the header consistently above content with proper spacing per design tokens

### Requirement: Header Section displays progress indicator

The questionnaire header section SHALL display a visual progress bar indicating the current step in a multi-step flow.

#### Scenario: Progress bar shows current progress
- **WHEN** HeaderSection is rendered with progress={33} (representing 1 of 3 steps)
- **THEN** system displays a progress bar filled to 33% with remaining 67% shown as background

#### Scenario: Progress bar fills completely
- **WHEN** HeaderSection is rendered with progress={100}
- **THEN** system displays a fully filled progress bar

#### Scenario: Progress bar accepts 0-100 percentage
- **WHEN** HeaderSection is rendered with various progress values from 0 to 100
- **THEN** system correctly scales the progress bar for each value

### Requirement: Header Section uses consistent design tokens

The header section SHALL use design tokens for colors, spacing, sizing, and typography to maintain consistency with the design system.

#### Scenario: Header applies design token styling
- **WHEN** HeaderSection is rendered
- **THEN** system applies design tokens for: button size, progress bar height, spacing between elements, colors from primary palette
