/**
 * Design Tokens - Type Definitions
 * Generic token types and utilities for type-safe token usage
 */

/**
 * Generic token type for all token categories
 */
export type TokenType =
  | 'color'
  | 'typography'
  | 'spacing'
  | 'shadow'
  | 'borderRadius'
  | 'breakpoint';

/**
 * Design token generic interface
 */
export interface DesignToken {
  type: TokenType;
  value: string | number;
  description?: string;
}

/**
 * Token value types
 */
export type ColorTokenValue = string; // hex or rgb
export type TypographyTokenValue = Record<string, string | number>; // font properties
export type SpacingTokenValue = string | number; // px values
export type ShadowTokenValue = string; // box-shadow format
export type BorderRadiusTokenValue = string | number; // px values
export type BreakpointTokenValue = number; // px values

/**
 * Type-safe token getter function type
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type TokenGetter = (
  tokenName: string,
) => string | number | Record<string, unknown>;

/**
 * Design system token type exports (for namespace alternative)
 */
export type DesignTokensNamespace = {
  Color: ColorTokenValue;
  Typography: TypographyTokenValue;
  Spacing: SpacingTokenValue;
  Shadow: ShadowTokenValue;
  BorderRadius: BorderRadiusTokenValue;
  Breakpoint: BreakpointTokenValue;
};

/**
 * CSS variable naming utilities
 */
export const CSS_VAR = {
  /**
   * Get CSS variable name for a token
   */
  color: (name: string): string => `var(--color-${name})`,
  typography: (name: string): string => `var(--font-${name})`,
  spacing: (name: string): string => `var(--space-${name})`,
  shadow: (name: string): string => `var(--shadow-${name})`,
  borderRadius: (name: string): string => `var(--radius-${name})`,
  breakpoint: (name: string): string => `var(--breakpoint-${name})`,
} as const;
