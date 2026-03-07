## ADDED Requirements

### Requirement: Dynamic flex-based grid columns
The ChoiceGrid component SHALL use CSS Grid with `gridTemplateColumns: repeat(N, 1fr)` where N is dynamically calculated based on screen size. Columns SHALL NOT be hardcoded Tailwind classes.

#### Scenario: Mobile layout (< 640px)
- **WHEN** viewport width is less than 640px
- **THEN** grid displays 2 columns
- **AND** each button takes equal width (50% minus half the gap)

#### Scenario: Tablet layout (640px - 1024px)
- **WHEN** viewport width is between 640px and 1024px
- **THEN** grid displays 2 columns
- **AND** columns remain evenly proportioned

#### Scenario: Desktop layout (> 1024px)
- **WHEN** viewport width exceeds 1024px
- **THEN** grid displays 4 columns
- **AND** buttons scale to fill grid cells proportionally

### Requirement: Button centering within grid cells
Each button within a grid cell SHALL be centered horizontally and vertically, with consistent internal padding. Buttons SHALL use flexbox to center their icon and label.

#### Scenario: Single button centering
- **WHEN** a ChoiceCard renders within a grid cell
- **THEN** the card is centered within the cell
- **AND** the icon and label inside the card are centered

#### Scenario: Multi-button alignment
- **WHEN** multiple choice cards render in a grid
- **THEN** all cards align to the same center point within their cells
- **AND** visual spacing is consistent across all rows

### Requirement: Responsive gap value from design tokens
The ChoiceGrid gap SHALL accept a semantic value (e.g., 'MD', 'LG') that maps to design tokens. The gap SHALL be consistent across all breakpoints unless explicitly overridden by props.

#### Scenario: Default gap
- **WHEN** ChoiceGrid renders without explicit gap prop
- **THEN** gap defaults to 'MD' (16px per design tokens)

#### Scenario: Custom gap
- **WHEN** ChoiceGrid receives gap prop value 'LG'
- **THEN** gap applies 24px spacing (per design tokens)

#### Scenario: Numeric gap
- **WHEN** ChoiceGrid receives numeric gap value (12)
- **THEN** gap applies as pixel value directly (12px)
