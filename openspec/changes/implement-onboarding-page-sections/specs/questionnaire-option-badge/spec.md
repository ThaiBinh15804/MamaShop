## ADDED Requirements

### Requirement: Option Badge renders with variant styling

The questionnaire option badge SHALL render with different layouts depending on its variant. It SHALL support icon-only (for meal preferences) and text-only (for goal options) presentations.

#### Scenario: Icon variant renders with icon and label
- **WHEN** OptionBadge is rendered with variant="icon" and icon prop set to a meal type icon
- **THEN** system displays the icon centered in the badge with the label text below it

#### Scenario: Text variant renders with only label
- **WHEN** OptionBadge is rendered with variant="text" without an icon prop
- **THEN** system displays the label text centered in the badge with no icon element

#### Scenario: Badge respects sizing constraints
- **WHEN** OptionBadge is rendered with different content lengths
- **THEN** system maintains consistent width using design tokens, truncating or wrapping text as needed per design specification

### Requirement: Option Badge indicates selected state

The option badge SHALL provide visual feedback to indicate whether the option is selected or not. Selected state SHALL be controlled via props.

#### Scenario: Badge displays selected state
- **WHEN** OptionBadge is rendered with selected={true}
- **THEN** system displays selected styling: different background color, border, or highlight according to design tokens

#### Scenario: Badge displays unselected state
- **WHEN** OptionBadge is rendered with selected={false}
- **THEN** system displays default styling without selection highlighting

#### Scenario: Badge updates when selected prop changes
- **WHEN** OptionBadge receives a new selected prop value
- **THEN** system immediately updates the visual styling to reflect the new state

### Requirement: Option Badge handles user interaction

The option badge SHALL emit click events when interacted with. It SHALL support being disabled or read-only.

#### Scenario: Badge fires onClick event on click
- **WHEN** user clicks an enabled OptionBadge
- **THEN** system fires the onClick callback with the option's ID

#### Scenario: Badge does not fire event when disabled
- **WHEN** user clicks an OptionBadge with disabled={true}
- **THEN** system does not fire the onClick callback

#### Scenario: Badge shows hover state
- **WHEN** user hovers over an enabled OptionBadge
- **THEN** system displays hover styling (background, shadow, or cursor change) using CSS states
