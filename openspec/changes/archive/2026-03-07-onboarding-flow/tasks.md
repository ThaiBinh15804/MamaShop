## 1. Design Token Audit

- [x] 1.1 Extract design token requirements from Figma design context (https://www.figma.com/design/0XHjswCPjTcGFiUQya7wpS/EasyMart--E-Commerce?node-id=4241-44541&m=dev)
- [x] 1.2 Compare typography tokens (H2, Body, Button text) with existing tokens
- [x] 1.3 Compare color tokens (primary, neutral, text) with existing tokens
- [x] 1.4 Compare spacing tokens with existing design scale
- [x] 1.5 Compare border radius tokens with existing radius scale
- [x] 1.6 Identify any missing tokens not in current system
- [x] 1.7 Add missing tokens to design token definitions (colors.ts, typography.ts, etc.)
- [x] 1.8 Verify token CSS variables generated correctly in globals.css

## 2. UI Primitives

- [x] 2.1 Create ChoiceCard component in src/components/ui/choice-card.tsx
- [x] 2.2 Implement ChoiceCard with icon, label, and selected state
- [x] 2.3 Apply design tokens for card background, hover, selected styling
- [x] 2.4 Create ChoiceGrid wrapper component for responsive layout
- [x] 2.5 Implement grid responsive behavior (2 cols mobile, 4 cols desktop)
- [x] 2.6 Add tests for ChoiceCard component
- [x] 2.7 Create Progress component wrapper if modifying existing Progress
- [x] 2.8 Check all component if it is UI Primitives then it need to implement in src/components/ui

## 3. Onboarding Feature Structure

- [x] 3.1 Create src/features/onboarding/ directory structure
- [x] 3.2 Create src/features/onboarding/components/ for feature-specific components
- [x] 3.3 Create src/features/onboarding/types/ for onboarding types
- [x] 3.4 Create src/features/onboarding/hooks/ for onboarding hooks
- [x] 3.5 Create src/features/onboarding/store/ for Zustand store

## 4. Onboarding Store

- [x] 4.1 Define onboarding state interface (current step, selections)
- [x] 4.2 Create Zustand store with actions (setStep, updateSelection, reset)
- [x] 4.3 Implement selection persistence within store
- [x] 4.4 Export store hook for component usage

## 5. Onboarding Question System

- [x] 5.1 Create OnboardingQuestion schema types (question config interface with id, title, options, selectionMode)
- [x] 5.2 Create onboardingQuestions mock configuration file with all 3 questions data
- [x] 5.3 Implement generic OnboardingQuestion component accepting question config
- [x] 5.4 Implement option selection logic (single vs. multi select based on selectionMode)
- [x] 5.5 Render meal preference question using configuration
- [x] 5.6 Render goals question using configuration
- [x] 5.7 Render party size question using configuration
- [x] 5.8 Wire selections to onboarding store with question ID and selected option IDs
- [x] 5.9 Ensure ChoiceGrid + ChoiceCard support dynamic option rendering from config

## 6. Onboarding Container

- [x] 6.1 Create OnboardingFlow container component
- [x] 6.2 Implement step rendering logic (show Q1, Q2, or Q3 based on store state)
- [x] 6.3 Implement next/previous navigation logic
- [x] 6.4 Wire continue button to advance steps
- [x] 6.5 Wire back button to go to previous steps
- [x] 6.6 Implement completion detection and navigation to home
- [x] 6.7 Add Progress component to show current progress

## 7. Icons and Assets

- [x] 7.1 Extract meal category icons from Figma design
- [x] 7.2 Create SVG icon components for each meal type
- [x] 7.3 Create reusable Icon wrapper component if needed
- [x] 7.4 Verify icons render correctly with design tokens colors

## 8. Routing and Integration

- [x] 8.1 Add /onboarding route to main app routing
- [x] 8.2 Create route guard to show onboarding only on first visit
- [x] 8.3 Create redirect logic after onboarding completion
- [x] 8.4 Test navigation flow end-to-end

## 9. Mock Data and Testing

- [x] 9.1 Create mock data for onboarding flow in testing utilities
- [x] 9.2 Add mock handlers for onboarding API endpoints (if any)
- [x] 9.3 Write unit tests for ChoiceCard component
- [x] 9.4 Write unit tests for store actions
- [x] 9.5 Write integration tests for OnboardingFlow
- [x] 9.6 Write E2E test for complete onboarding journey

## 10. Documentation and Cleanup

- [x] 10.1 Document onboarding component API in component files
- [x] 10.2 Document store selectors and actions
- [x] 10.3 Add storybook stories for reusable components (ChoiceCard, ChoiceGrid)
- [x] 10.4 Verify design token usage across all components
- [x] 10.5 Final design system consistency review

## 11. App-Level Prerequisites

- [x] 11.1 Create react-query config module at @/lib/react-query
- [x] 11.2 Create error boundary fallback component at @/components/errors/main
- [x] 11.3 Create UI Link component at @/components/ui/link
- [x] 11.4 Create Notifications component at @/components/ui/notifications
- [x] 11.5 Export new UI components from @/components/ui index

