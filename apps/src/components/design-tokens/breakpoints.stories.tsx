import type { Meta, StoryObj } from '@storybook/react';

import { BREAKPOINTS, GRID_CONFIG } from '@/lib/design-tokens/breakpoints';

const meta = {
  title: 'Design System/Breakpoints',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

/**
 * Responsive Breakpoints
 *
 * The design system supports three main breakpoints: mobile (375px), tablet (768px), and desktop (1440px).
 * Each breakpoint follows a 12-column grid system with specific gutter sizing.
 */
export const BreakpointSpecifications: StoryObj = {
  render: () => (
    <div className="space-y-12">
      {/* Breakpoint Overview */}
      <div>
        <h3 className="mb-6 text-heading-sm">Breakpoint Specifications</h3>
        <div className="grid grid-cols-3 gap-6">
          {Object.entries(BREAKPOINTS).map(([name, value]) => {
            const grid = GRID_CONFIG[name as keyof typeof GRID_CONFIG];
            return (
              <div
                key={name}
                className="rounded-card border border-neutral-300 p-4"
              >
                <h4 className="mb-3 text-heading-xs capitalize">{name}</h4>
                <div className="space-y-2 text-body-sm">
                  <p>
                    <span className="font-semibold">Width:</span> {value}px
                  </p>
                  <p>
                    <span className="font-semibold">Columns:</span>{' '}
                    {grid.columns}
                  </p>
                  <p>
                    <span className="font-semibold">Column Width:</span>{' '}
                    {grid.columnWidth}px
                  </p>
                  <p>
                    <span className="font-semibold">Gutter:</span> {grid.gutter}
                    px
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Grid */}
      <div>
        <h3 className="mb-4 text-heading-sm">
          Mobile Grid (375px - 12 columns)
        </h3>
        <div className="overflow-hidden rounded-card border border-neutral-300">
          <div
            className="flex gap-1 bg-neutral-50 p-2"
            style={{ width: '100%', maxWidth: '375px' }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex h-16 flex-1 items-center justify-center rounded-xs border border-primary-400 bg-primary-200 text-body-xs font-semibold"
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="bg-neutral-0 p-4">
            <p className="text-body-xs text-neutral-600">
              12 columns × 23.5px column width + 16px gutters = 375px
            </p>
          </div>
        </div>
      </div>

      {/* Tablet Grid */}
      <div>
        <h3 className="mb-4 text-heading-sm">
          Tablet Grid (768px - 12 columns)
        </h3>
        <div className="overflow-hidden rounded-card border border-neutral-300">
          <div
            className="flex gap-1 bg-neutral-50 p-2"
            style={{ width: '100%', maxWidth: '768px' }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex h-16 flex-1 items-center justify-center rounded-xs border border-blue-400 bg-blue-200 text-body-xs font-semibold"
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="bg-neutral-0 p-4">
            <p className="text-body-xs text-neutral-600">
              12 columns × 53.5px column width + 24px gutters = 768px
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Grid */}
      <div>
        <h3 className="mb-4 text-heading-sm">
          Desktop Grid (1440px - 12 columns)
        </h3>
        <div className="overflow-hidden rounded-card border border-neutral-300">
          <div className="flex gap-2 overflow-x-auto bg-neutral-50 p-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex h-20 w-24 shrink-0 items-center justify-center rounded-xs border border-green-400 bg-green-200 text-body-xs font-semibold"
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="bg-neutral-0 p-4">
            <p className="text-body-xs text-neutral-600">
              12 columns × 82px column width + 32px gutters = 1440px
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Content Example */}
      <div>
        <h3 className="mb-6 text-heading-sm">Responsive Content Example</h3>
        <div className="space-y-4">
          <p className="text-body-md text-neutral-700">
            This grid layout responds to breakpoints:
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-card border border-neutral-200 bg-neutral-0 p-4"
              >
                <div className="mb-3 h-32 rounded-md bg-neutral-100" />
                <h4 className="mb-2 text-heading-xs">Item {i}</h4>
                <p className="text-body-sm text-neutral-600">
                  1 col mobile, 2 cols tablet, 4 cols desktop
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-First Approach */}
      <div className="rounded-card bg-neutral-50 p-6">
        <h4 className="mb-4 text-heading-sm">Mobile-First Approach</h4>
        <p className="mb-4 text-body-md text-neutral-700">
          Use Tailwind utilities with responsive prefixes:
        </p>
        <pre className="overflow-auto rounded-md bg-neutral-100 p-4 font-mono text-body-xs">
          {`<!-- Mobile first: 1 column -->
<div className="grid grid-cols-1">

  <!-- Tablet: 2 columns -->
  <div className="md:grid-cols-2">

    <!-- Desktop: 4 columns -->
    <div className="lg:grid-cols-4">

<!-- Responsive text sizing -->
<p className="text-body-sm md:text-body-md lg:text-body-lg">

<!-- Responsive spacing -->
<div className="p-2 md:p-4 lg:p-6 gap-2 md:gap-4 lg:gap-6">`}
        </pre>
      </div>

      {/* Breakpoint Utilities */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="mb-3 text-heading-xs">Tailwind Breakpoint Prefixes</h4>
          <ul className="space-y-2 text-body-sm">
            <li>
              <code className="rounded bg-neutral-100 px-2 py-1 font-mono">
                default
              </code>{' '}
              - Mobile (≥375px)
            </li>
            <li>
              <code className="rounded bg-neutral-100 px-2 py-1 font-mono">
                md:
              </code>{' '}
              - Tablet (≥768px)
            </li>
            <li>
              <code className="rounded bg-neutral-100 px-2 py-1 font-mono">
                lg:
              </code>{' '}
              - Desktop (≥1440px)
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-heading-xs">Common Responsive Patterns</h4>
          <ul className="space-y-2 text-body-sm">
            <li className="font-mono text-body-xs">
              grid-cols-1 md:grid-cols-2 lg:grid-cols-4
            </li>
            <li className="font-mono text-body-xs">
              text-body-sm md:text-body-md lg:text-body-lg
            </li>
            <li className="font-mono text-body-xs">
              p-4 md:p-6 lg:p-8 gap-3 md:gap-4 lg:gap-6
            </li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

/**
 * Breakpoint Constants
 *
 * Access breakpoint values programmatically for JavaScript-based responsive logic.
 */
export const BreakpointConstants: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <p className="text-body-md">
        Use breakpoint constants for responsive logic:
      </p>
      <pre className="overflow-auto rounded-md bg-neutral-100 p-4 font-mono text-body-xs">
        {`import { BREAKPOINTS, GRID_CONFIG } from '@/lib/design-tokens';

// Get breakpoint values
const isMobile = window.innerWidth < BREAKPOINTS.MOBILE;
const isTablet = window.innerWidth >= BREAKPOINTS.TABLET;
const isDesktop = window.innerWidth >= BREAKPOINTS.DESKTOP;

// Get grid configuration
const gridConfig = GRID_CONFIG.DESKTOP;
// { columns: 12, columnWidth: 82, gutter: 32, totalWidth: 1440 }

// Calculate responsive values
const containerWidth = gridConfig.columns * gridConfig.columnWidth + 
                      (gridConfig.columns - 1) * gridConfig.gutter;`}
      </pre>
    </div>
  ),
};
