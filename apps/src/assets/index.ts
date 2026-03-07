/**
 * Assets Barrel Export
 *
 * Central export point for all reusable assets including:
 * - Icon components
 * - Mock data for testing
 * - Shared utilities
 *
 * @example
 * ```tsx
 * // Import icons
 * import { MealIcon } from '@/assets';
 *
 * // Import mocks
 * import { mocks } from '@/assets';
 * const { defaultOnboardingState } = mocks;
 * ```
 */

// Icons
export * from './icons';

// Mocks and test data
export * as mocks from './mocks/onboarding-mocks';
