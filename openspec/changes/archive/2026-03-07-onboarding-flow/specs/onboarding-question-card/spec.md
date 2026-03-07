## ADDED Requirements

### Requirement: Choice card displays option with icon and label

The system SHALL render an interactive card component that presents a single choice option with visual icon and text label.

#### Scenario: Render unselected choice card
- **WHEN** choice card is rendered
- **THEN** card displays icon, label, and neutral background styling

#### Scenario: Change styling when selected
- **WHEN** user clicks a choice card
- **THEN** card background changes to indicate selected state

#### Scenario: Display with various sizes
- **WHEN** choice card is used in different question contexts
- **THEN** card adapts to specified width and height while maintaining proportions

### Requirement: Choice card accepts custom content

The system SHALL permit choice cards to display different icon types and labels via props.

#### Scenario: Render meal category icon
- **WHEN** choice card receives meal icon data
- **THEN** meal icon displays inside card

#### Scenario: Render text label
- **WHEN** choice card receives label text
- **THEN** text appears centered below icon with appropriate typography

### Requirement: Choice cards work in grid layouts

The system SHALL allow multiple choice cards to arrange in responsive grids.

#### Scenario: Display 4 cards per row on desktop
- **WHEN** choice grid renders on desktop (1440px)
- **THEN** 4 choice cards display in single row

#### Scenario: Display 2 cards per row on mobile
- **WHEN** choice grid renders on mobile (375px)
- **THEN** 2 choice cards display in single row with appropriate spacing
