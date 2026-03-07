/**
 * Design Tokens - Barrel Export
 * Central export point for all design tokens
 */

// Color tokens
export { COLORS, COLOR_PALETTE, type ColorToken } from './colors';

// Typography tokens
export {
  TYPOGRAPHY,
  TEXT_STYLES,
  type TypographyStyle,
  type TypographyToken,
} from './typography';

// Spacing tokens
export {
  SPACING,
  SPACING_VALUES,
  getSpacing,
  type SpacingToken,
  type SpacingKey,
  type SpacingValue,
} from './spacing';

// Effects tokens (shadows and border-radius)
export {
  SHADOWS,
  BORDER_RADIUS,
  BORDER_RADIUS_VALUES,
  type ShadowToken,
  type BorderRadiusToken,
  type BorderRadiusValue,
} from './effects';

// Breakpoints and grid tokens
export {
  BREAKPOINTS,
  GRID_CONFIG,
  CONTENT_MAX_WIDTH,
  MEDIA_QUERIES,
  TAILWIND_BREAKPOINTS,
  getGridConfig,
  type BreakpointName,
  type BreakpointValue,
  type GridConfig,
} from './breakpoints';

// Responsive design tokens (screen-specific spacing)
export {
  RESPONSIVE_MOBILE,
  RESPONSIVE_TABLET,
  RESPONSIVE_DESKTOP,
  BREAKPOINTS as RESPONSIVE_BREAKPOINTS,
  getResponsiveValue,
  getGridColumns,
} from './responsive';

// Type definitions
export type {
  TokenType,
  DesignToken,
  ColorTokenValue,
  TypographyTokenValue,
  SpacingTokenValue,
  ShadowTokenValue,
  BorderRadiusTokenValue,
  BreakpointTokenValue,
  TokenGetter,
  DesignTokensNamespace,
} from './types';

export { CSS_VAR } from './types';
