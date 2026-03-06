import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design System/Overview',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

/**
 * Design Tokens Overview
 *
 * A comprehensive design system for the EasyMart e-commerce application.
 * All design tokens are extracted from Figma and integrated into CSS, TypeScript, and Tailwind CSS.
 */
export const DesignSystemOverview: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-4 text-display-lg">EasyMart Design System</h1>
          <p className="mx-auto max-w-2xl text-body-lg">
            A comprehensive collection of design tokens, components, and
            patterns for consistent UI/UX across the e-commerce platform.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-4 py-16">
        {/* Token Categories */}
        <section className="mb-16">
          <h2 className="mb-8 text-heading-xl text-neutral-900">
            Token Categories
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Colors */}
            <div className="rounded-card border border-neutral-200 bg-neutral-0 p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="size-12 rounded-lg bg-gradient-to-br from-primary-600 to-primary-900" />
                <h3 className="text-heading-sm">Colors</h3>
              </div>
              <p className="mb-4 text-body-md text-neutral-700">
                27 color tokens including primary, neutral, and semantic status
                colors.
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-600">
                <li>✓ 10 primary shades (50-900)</li>
                <li>✓ 13 neutral shades (0-1000)</li>
                <li>✓ 4 semantic colors (success, error, warning, info)</li>
                <li>✓ CSS variables and Tailwind utilities</li>
              </ul>
              <a
                href="?path=/story/design-system-design-tokens--color-palette"
                className="mt-4 inline-block text-body-sm font-semibold text-primary-600 hover:underline"
              >
                View Colors →
              </a>
            </div>

            {/* Typography */}
            <div className="rounded-card border border-neutral-200 bg-neutral-0 p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-neutral-300 text-heading-xs font-bold">
                  Aa
                </div>
                <h3 className="text-heading-sm">Typography</h3>
              </div>
              <p className="mb-4 text-body-md text-neutral-700">
                14 typographic styles for consistent text hierarchy.
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-600">
                <li>✓ 3 Display sizes (140px, 110px, 98px)</li>
                <li>✓ 7 Heading sizes (63px - 20px)</li>
                <li>✓ 4 Body sizes (20px - 12px)</li>
                <li>✓ 3 Button sizes with semibold weight</li>
              </ul>
              <a
                href="?path=/story/design-system-typography--typography-showcase"
                className="mt-4 inline-block text-body-sm font-semibold text-primary-600 hover:underline"
              >
                View Typography →
              </a>
            </div>

            {/* Spacing */}
            <div className="rounded-card border border-neutral-200 bg-neutral-0 p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-neutral-200">
                  <div className="flex gap-1">
                    <div className="size-2 rounded bg-neutral-600" />
                    <div className="size-2 rounded bg-neutral-600" />
                    <div className="size-2 rounded bg-neutral-600" />
                  </div>
                </div>
                <h3 className="text-heading-sm">Spacing</h3>
              </div>
              <p className="mb-4 text-body-md text-neutral-700">
                10 spacing tokens based on 8px base unit.
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-600">
                <li>✓ Scale from 0px to 40px</li>
                <li>✓ Semantic aliases (xs, sm, md, lg, xl, 2xl)</li>
                <li>✓ Consistent padding, margin, and gaps</li>
                <li>✓ Full Tailwind integration</li>
              </ul>
              <a
                href="?path=/story/design-system-spacing--spacing-scale"
                className="mt-4 inline-block text-body-sm font-semibold text-primary-600 hover:underline"
              >
                View Spacing →
              </a>
            </div>

            {/* Effects */}
            <div className="rounded-card border border-neutral-200 bg-neutral-0 p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="size-12 rounded-lg bg-neutral-100 shadow-lg" />
                <h3 className="text-heading-sm">Effects</h3>
              </div>
              <p className="mb-4 text-body-md text-neutral-700">
                Shadows and border radius for depth and consistency.
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-600">
                <li>✓ 5 shadow scales (sm - xl)</li>
                <li>✓ Menu shadow for dropdowns</li>
                <li>✓ 6 border-radius values (4px - full)</li>
                <li>✓ Semantic aliases for common use cases</li>
              </ul>
              <a
                href="?path=/story/design-system-effects--shadow-showcase"
                className="mt-4 inline-block text-body-sm font-semibold text-primary-600 hover:underline"
              >
                View Effects →
              </a>
            </div>

            {/* Breakpoints */}
            <div className="rounded-card border border-neutral-200 bg-neutral-0 p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-neutral-200 text-body-xs font-bold">
                  📱
                </div>
                <h3 className="text-heading-sm">Breakpoints</h3>
              </div>
              <p className="mb-4 text-body-md text-neutral-700">
                Responsive design with 3 main breakpoints.
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-600">
                <li>✓ Mobile: 375px (default)</li>
                <li>✓ Tablet: 768px (md prefix)</li>
                <li>✓ Desktop: 1440px (lg prefix)</li>
                <li>✓ 12-column grid system per breakpoint</li>
              </ul>
              <a
                href="?path=/story/design-system-breakpoints--breakpoint-specifications"
                className="mt-4 inline-block text-body-sm font-semibold text-primary-600 hover:underline"
              >
                View Breakpoints →
              </a>
            </div>

            {/* Components */}
            <div className="rounded-card border border-neutral-200 bg-neutral-0 p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary-100">
                  <div className="flex gap-1">
                    <div className="size-3 rounded bg-primary-600" />
                    <div className="size-3 rounded bg-primary-600" />
                  </div>
                </div>
                <h3 className="text-heading-sm">Components</h3>
              </div>
              <p className="mb-4 text-body-md text-neutral-700">
                Common component patterns using design tokens.
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-600">
                <li>✓ Button variants (primary, secondary, destructive)</li>
                <li>✓ Card layouts</li>
                <li>✓ Form elements</li>
                <li>✓ Typography patterns</li>
              </ul>
              <a
                href="?path=/story/design-system-component-styling-guide--styling-patterns"
                className="mt-4 inline-block text-body-sm font-semibold text-primary-600 hover:underline"
              >
                View Components →
              </a>
            </div>
          </div>
        </section>

        {/* Implementation Guides */}
        <section className="mb-16">
          <h2 className="mb-8 text-heading-xl text-neutral-900">
            Getting Started
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Tailwind Utilities */}
            <div className="rounded-card border border-neutral-200 bg-neutral-0 p-6">
              <h3 className="mb-3 text-heading-sm">Using Tailwind</h3>
              <p className="mb-4 text-body-sm text-neutral-700">
                Easiest way to style components with built-in token support.
              </p>
              <pre className="mb-4 overflow-auto rounded-md bg-neutral-100 p-3 font-mono text-body-xs">
                {`<button className="bg-primary-600 text-white px-4 py-2 rounded-button hover:bg-primary-700">`}
              </pre>
              <p className="text-body-xs text-neutral-600">
                All colors, spacing, shadows, and radii are available as
                utilities.
              </p>
            </div>

            {/* CSS Variables */}
            <div className="rounded-card border border-neutral-200 bg-neutral-0 p-6">
              <h3 className="mb-3 text-heading-sm">CSS Variables</h3>
              <p className="mb-4 text-body-sm text-neutral-700">
                Direct access to tokens for custom CSS.
              </p>
              <pre className="mb-4 overflow-auto rounded-md bg-neutral-100 p-3 font-mono text-body-xs">
                {`.button {\n  background-color: \n    var(--color-primary-600);\n  padding: var(--space-4);\n}`}
              </pre>
              <p className="text-body-xs text-neutral-600">
                Available in src/styles/design-tokens/
              </p>
            </div>

            {/* TypeScript Constants */}
            <div className="rounded-card border border-neutral-200 bg-neutral-0 p-6">
              <h3 className="mb-3 text-heading-sm">TypeScript</h3>
              <p className="mb-4 text-body-sm text-neutral-700">
                Programmatic access with type safety.
              </p>
              <pre className="mb-4 overflow-auto rounded-md bg-neutral-100 p-3 font-mono text-body-xs">
                {`import { COLORS } 
  from '@/lib/
  design-tokens';`}
              </pre>
              <p className="text-body-xs text-neutral-600">
                Full IDE autocompletion and type checking.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-16">
          <h2 className="mb-8 text-heading-xl text-neutral-900">
            Quick Reference
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Common Tailwind Utilities */}
            <div className="rounded-card border border-neutral-200 bg-neutral-0 p-6">
              <h3 className="mb-4 text-heading-sm">
                Common Tailwind Utilities
              </h3>
              <div className="space-y-3">
                <div className="rounded-md bg-neutral-50 p-3">
                  <p className="font-mono text-body-xs font-semibold text-neutral-900">
                    Colors
                  </p>
                  <p className="mt-1 text-body-xs text-neutral-600">
                    bg-primary-600, text-neutral-900, border-neutral-300
                  </p>
                </div>
                <div className="rounded-md bg-neutral-50 p-3">
                  <p className="font-mono text-body-xs font-semibold text-neutral-900">
                    Spacing
                  </p>
                  <p className="mt-1 text-body-xs text-neutral-600">
                    p-4, m-6, gap-3, w-20, h-24
                  </p>
                </div>
                <div className="rounded-md bg-neutral-50 p-3">
                  <p className="font-mono text-body-xs font-semibold text-neutral-900">
                    Typography
                  </p>
                  <p className="mt-1 text-body-xs text-neutral-600">
                    text-body-md, text-heading-lg, font-semibold
                  </p>
                </div>
                <div className="rounded-md bg-neutral-50 p-3">
                  <p className="font-mono text-body-xs font-semibold text-neutral-900">
                    Effects
                  </p>
                  <p className="mt-1 text-body-xs text-neutral-600">
                    shadow-md, rounded-card, rounded-button
                  </p>
                </div>
              </div>
            </div>

            {/* Responsive Patterns */}
            <div className="rounded-card border border-neutral-200 bg-neutral-0 p-6">
              <h3 className="mb-4 text-heading-sm">Responsive Patterns</h3>
              <div className="space-y-3">
                <div className="rounded-md bg-neutral-50 p-3">
                  <p className="font-mono text-body-xs font-semibold text-neutral-900">
                    Grid
                  </p>
                  <p className="mt-1 text-body-xs text-neutral-600">
                    grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                  </p>
                </div>
                <div className="rounded-md bg-neutral-50 p-3">
                  <p className="font-mono text-body-xs font-semibold text-neutral-900">
                    Text Sizes
                  </p>
                  <p className="mt-1 text-body-xs text-neutral-600">
                    text-body-sm md:text-body-md lg:text-body-lg
                  </p>
                </div>
                <div className="rounded-md bg-neutral-50 p-3">
                  <p className="font-mono text-body-xs font-semibold text-neutral-900">
                    Spacing
                  </p>
                  <p className="mt-1 text-body-xs text-neutral-600">
                    p-4 md:p-6 lg:p-8 gap-3 md:gap-4 lg:gap-6
                  </p>
                </div>
                <div className="rounded-md bg-neutral-50 p-3">
                  <p className="font-mono text-body-xs font-semibold text-neutral-900">
                    Visibility
                  </p>
                  <p className="mt-1 text-body-xs text-neutral-600">
                    hidden md:block, block md:hidden
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Info */}
        <section className="rounded-card border border-neutral-200 bg-neutral-0 p-8">
          <h2 className="mb-4 text-heading-lg text-neutral-900">
            Design System Integration
          </h2>
          <div className="space-y-4 text-body-md text-neutral-700">
            <p>
              All design tokens are automatically integrated into your
              development environment:
            </p>
            <ul className="ml-4 space-y-3">
              <li>
                <strong>CSS:</strong> Tokens available as custom properties in
                <code className="mx-1 bg-neutral-100 px-2 font-mono">
                  src/styles/design-tokens.css
                </code>
              </li>
              <li>
                <strong>TypeScript:</strong> Export constants from
                <code className="mx-1 bg-neutral-100 px-2 font-mono">
                  src/lib/design-tokens/
                </code>
              </li>
              <li>
                <strong>Tailwind:</strong> All utilities pre-configured in
                <code className="mx-1 bg-neutral-100 px-2 font-mono">
                  tailwind.config.cjs
                </code>
              </li>
              <li>
                <strong>Documentation:</strong> See
                <code className="mx-1 bg-neutral-100 px-2 font-mono">
                  docs/design-tokens.md
                </code>
                for detailed guides
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  ),
};
