/**
 * Questionnaire option that can be selected by the user
 */
export interface QuestionnaireOption {
  id: string;
  label: string;
  icon?: string; // URL/path to icon image
}

/**
 * A single questionnaire question with options to choose from
 */
export interface QuestionnaireQuestion {
  id: string;
  title: string;
  description?: string;
  options: QuestionnaireOption[];
  type: 'single-select' | 'multi-select';
  maxSelections?: number; // For multi-select, max options to choose
}

/**
 * Overall onboarding questionnaire state
 */
export interface OnboardingState {
  currentStep: number; // 0-based index
  totalSteps: number;
  selectedAnswers: Record<string, string | string[]>; // questionId -> selected option(s)
  isComplete: boolean;
}

/**
 * Props for OptionBadge component
 */
export interface QuestionnaireOptionBadgeProps {
  id: string;
  label: string;
  icon?: string;
  variant?: 'icon' | 'text'; // Render with icon or text only
  selected?: boolean;
  disabled?: boolean;
  onClick?: (id: string) => void;
  className?: string;
}

/**
 * Props for HeaderSection component
 */
export interface QuestionnaireHeaderSectionProps {
  showBackButton?: boolean;
  progress: number; // 0-100
  onBack?: () => void;
  className?: string;
}

/**
 * Props for ContentSection component
 */
export interface QuestionnaireContentSectionProps {
  title: string;
  description?: string;
  options: QuestionnaireOption[];
  selectedOptions?: string | string[];
  variant?: 'icon' | 'text';
  mode?: 'single-select' | 'multi-select';
  onOptionSelect?: (optionId: string) => void;
  className?: string;
}

/**
 * Props for ActionSection component
 */
export interface QuestionnaireActionSectionProps {
  actionLabel?: string;
  secondaryLabel?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onAction?: () => void;
  onSecondaryAction?: () => void;
  className?: string;
}
