/**
 * Responsive Design Tokens
 *
 * Screen-specific spacing and sizing values that adapt to viewport.
 * These tokens complement the base design token system with breakpoint-aware values.
 */

/**
 * Mobile spacing tokens (< 640px)
 * Compact spacing optimized for small screens
 */
export const RESPONSIVE_MOBILE = {
  // Container padding/margins
  CONTAINER_HORIZONTAL_PADDING: 16, // 1rem
  CONTAINER_VERTICAL_PADDING: 12,

  // Grid spacing
  GRID_GAP_COMPACT: 8,
  GRID_GAP_NORMAL: 12,
  GRID_GAP_RELAXED: 16,

  // Component spacing
  BUTTON_HEIGHT: 44,
  BUTTON_PADDING_HORIZONTAL: 12,
  ICON_SIZE_SM: 24,
  ICON_SIZE_MD: 32,
  ICON_SIZE_LG: 44,

  // Typography spacing
  LINE_HEIGHT_TIGHT: 1.2,
  LINE_HEIGHT_NORMAL: 1.5,

  // Responsive grid columns
  GRID_COLUMNS: 2,
} as const;

/**
 * Tablet spacing tokens (640px - 1024px)
 * Balanced spacing for medium screens
 */
export const RESPONSIVE_TABLET = {
  // Container padding/margins
  CONTAINER_HORIZONTAL_PADDING: 20, // 1.25rem
  CONTAINER_VERTICAL_PADDING: 16,

  // Grid spacing
  GRID_GAP_COMPACT: 12,
  GRID_GAP_NORMAL: 16,
  GRID_GAP_RELAXED: 20,

  // Component spacing
  BUTTON_HEIGHT: 48,
  BUTTON_PADDING_HORIZONTAL: 16,
  ICON_SIZE_SM: 28,
  ICON_SIZE_MD: 36,
  ICON_SIZE_LG: 48,

  // Typography spacing
  LINE_HEIGHT_TIGHT: 1.3,
  LINE_HEIGHT_NORMAL: 1.6,

  // Responsive grid columns
  GRID_COLUMNS: 2,
} as const;

/**
 * Desktop spacing tokens (> 1024px)
 * Generous spacing for large screens
 */
export const RESPONSIVE_DESKTOP = {
  // Container padding/margins
  CONTAINER_HORIZONTAL_PADDING: 32, // 2rem
  CONTAINER_VERTICAL_PADDING: 24,

  // Grid spacing
  GRID_GAP_COMPACT: 16,
  GRID_GAP_NORMAL: 20,
  GRID_GAP_RELAXED: 24,

  // Component spacing
  BUTTON_HEIGHT: 56,
  BUTTON_PADDING_HORIZONTAL: 20,
  ICON_SIZE_SM: 32,
  ICON_SIZE_MD: 44,
  ICON_SIZE_LG: 56,

  // Typography spacing
  LINE_HEIGHT_TIGHT: 1.35,
  LINE_HEIGHT_NORMAL: 1.65,

  // Responsive grid columns
  GRID_COLUMNS: 4,
} as const;

/**
 * Breakpoint constants in pixels
 */
export const BREAKPOINTS = {
  SM: 640,
  MD: 1024,
  LG: 1440,
} as const;

/**
 * Helper function to get responsive token value based on current breakpoint
 * Usage: getResponsiveValue('GRID_COLUMNS', windowWidth)
 */
export const getResponsiveValue = (
  tokenKey: keyof typeof RESPONSIVE_MOBILE,
  windowWidth: number,
): number => {
  if (windowWidth >= BREAKPOINTS.MD) {
    return RESPONSIVE_DESKTOP[tokenKey] as number;
  }
  if (windowWidth >= BREAKPOINTS.SM) {
    return RESPONSIVE_TABLET[tokenKey] as number;
  }
  return RESPONSIVE_MOBILE[tokenKey] as number;
};

/**
 * Responsive grid column helper
 * Returns column count based on screen size for grid layouts
 */
export const getGridColumns = (windowWidth: number): number => {
  return getResponsiveValue('GRID_COLUMNS', windowWidth);
};
