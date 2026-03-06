/**
 * Design Tokens - Breakpoints & Grid System
 * 12-column responsive grid across mobile, tablet, desktop
 * Extracted from EasyMart Figma Styleguide
 */

export const BREAKPOINTS = {
  // Breakpoint pixel values
  MOBILE: 375,
  TABLET: 768,
  DESKTOP: 1440,
} as const;

export type BreakpointName = keyof typeof BREAKPOINTS;
export type BreakpointValue = (typeof BREAKPOINTS)[BreakpointName];

export interface GridConfig {
  columns: number;
  columnWidth: number;
  gutter: number;
  totalWidth: number;
}

/**
 * Grid system configuration for each breakpoint
 */
export const GRID_CONFIG: Record<BreakpointName, GridConfig> = {
  MOBILE: {
    columns: 12,
    columnWidth: 23.5,
    gutter: 16,
    totalWidth: 375,
  },
  TABLET: {
    columns: 12,
    columnWidth: 53.5,
    gutter: 24,
    totalWidth: 768,
  },
  DESKTOP: {
    columns: 12,
    columnWidth: 82,
    gutter: 32,
    totalWidth: 1440,
  },
} as const;

/**
 * Get grid configuration for a breakpoint
 */
export const getGridConfig = (breakpoint: BreakpointName): GridConfig =>
  GRID_CONFIG[breakpoint];

/**
 * Content max width
 */
export const CONTENT_MAX_WIDTH = 1440;

/**
 * Media query strings for responsive design
 */
export const MEDIA_QUERIES = {
  MOBILE: `@media (min-width: ${BREAKPOINTS.MOBILE}px)`,
  TABLET: `@media (min-width: ${BREAKPOINTS.TABLET}px)`,
  DESKTOP: `@media (min-width: ${BREAKPOINTS.DESKTOP}px)`,
} as const;

/**
 * Tailwind-style breakpoint definitions
 */
export const TAILWIND_BREAKPOINTS = {
  sm: `${BREAKPOINTS.MOBILE}px`,
  md: `${BREAKPOINTS.TABLET}px`,
  lg: `${BREAKPOINTS.DESKTOP}px`,
} as const;
