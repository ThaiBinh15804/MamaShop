## ADDED Requirements

### Requirement: Responsive spacing tokens
The design token system SHALL include screen-specific spacing values that capture Figma's responsive design metrics. Responsive tokens SHALL be available in `src/lib/design-tokens/` as named constants with CSS variable generation.

#### Scenario: Token for desktop spacing
- **WHEN** components render on desktop (1024px+)
- **THEN** spacing tokens reflect desktop values from Figma
- **AND** tokens are type-safe constants (not magic numbers)

#### Scenario: Token for mobile spacing
- **WHEN** components render on mobile (< 640px)
- **THEN** spacing tokens reflect mobile-optimized values
- **AND** mobile spacing is more compact than desktop

### Requirement: Grid column gap tokens
The onboarding grid gap values (XS, SM, MD, LG, XL, XXL) SHALL map to design tokens from the existing SPACING scale. If Figma specifies gaps not in the scale, new gap tokens SHALL be added to the token system.

#### Scenario: Standard gap mapping
- **WHEN** ChoiceGrid uses gap 'MD'
- **THEN** gap resolves to SPACING.MD (16px)
- **AND** value matches Figma specification

#### Scenario: Missing gap token
- **WHEN** Figma specifies a gap size not in SPACING
- **THEN** new token is added to design system
- **AND** component uses the new token

### Requirement: Button sizing tokens
Button height, width, and internal padding on ChoiceCard SHALL use design tokens or be justifiable by Figma metrics. Magic numbers SHALL be replaced with semantic token references.

#### Scenario: ChoiceCard dimensions
- **WHEN** ChoiceCard renders with default size
- **THEN** width, height, and padding use design token values
- **AND** dimensions match Figma design exactly

#### Scenario: Icon sizing within card
- **WHEN** icon renders inside ChoiceCard
- **THEN** icon container size (44px) is documented or references a token
- **AND** sizing is consistent across all cards
