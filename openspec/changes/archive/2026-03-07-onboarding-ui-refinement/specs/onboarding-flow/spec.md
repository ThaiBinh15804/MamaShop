## MODIFIED Requirements

### Requirement: Onboarding flow state initialization
The OnboardingFlow component SHALL initialize store state safely without hydration errors. On first render (server), the component SHALL render a loading or null state. After hydration completes, the component SHALL render the full flow.

#### Scenario: Safe first render
- **WHEN** OnboardingFlow component mounts
- **THEN** store `isHydrated` flag is checked before rendering questions
- **AND** hydration mismatch errors do NOT occur

#### Scenario: Render after hydration
- **WHEN** hydration completes and `isHydrated` becomes true
- **THEN** OnboardingFlow renders the full question interface
- **AND** persisted state (if available) is applied

### Requirement: Responsive grid layout in OnboardingFlow
The OnboardingFlow component SHALL display questions using the refined ChoiceGrid with dynamic flex-based columns. Buttons SHALL center within responsive grid cells.

#### Scenario: Mobile question display
- **WHEN** user views onboarding on mobile (< 640px)
- **THEN** question options display in 2 columns
- **AND** buttons are centered and equally sized

#### Scenario: Desktop question display
- **WHEN** user views onboarding on desktop (> 1024px)
- **THEN** question options display in 4 columns
- **AND** spacing and alignment match Figma design
## MODIFIED Requirements

### Requirement: Onboarding flow state initialization
The OnboardingFlow component SHALL initialize store state safely without hydration errors. On first render (server), the component SHALL render a loading or null state. After hydration completes, the component SHALL render the full flow.

#### Scenario: Safe first render
- **WHEN** OnboardingFlow component mounts
- **THEN** store `isHydrated` flag is checked before rendering questions
- **AND** hydration mismatch errors do NOT occur

#### Scenario: Render after hydration
- **WHEN** hydration completes and `isHydrated` becomes true
- **THEN** OnboardingFlow renders the full question interface
- **AND** persisted state (if available) is applied

### Requirement: Responsive grid layout in OnboardingFlow
The OnboardingFlow component SHALL display questions using the refined ChoiceGrid with dynamic flex-based columns. Buttons SHALL center within responsive grid cells.

#### Scenario: Mobile question display
- **WHEN** user views onboarding on mobile (< 640px)
- **THEN** question options display in 2 columns
- **AND** buttons are centered and equally sized

#### Scenario: Desktop question display
- **WHEN** user views onboarding on desktop (> 1024px)
- **THEN** question options display in 4 columns
- **AND** spacing and alignment match Figma design
