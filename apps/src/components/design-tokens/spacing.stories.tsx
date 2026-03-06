import type { Meta, StoryObj } from '@storybook/react';

import { SPACING } from '@/lib/design-tokens/spacing';

const meta = {
  title: 'Design System/Spacing',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

/**
 * Spacing Scale
 *
 * The spacing system uses an 8px base unit scale from 0px to 40px.
 * All spacing values are consistent and proportional.
 */
export const SpacingScale: StoryObj = {
  render: () => (
    <div className="space-y-12">
      {/* Spacing Visualization */}
      <div>
        <h3 className="mb-6 text-heading-sm">Spacing Scale (8px base unit)</h3>
        <div className="space-y-4">
          {Object.entries(SPACING)
            .filter(([key]) => !isNaN(Number(key)))
            .map(([key, value]) => (
              <div key={key} className="flex items-center gap-4">
                <div className="w-12 text-right">
                  <span className="text-body-sm font-semibold text-neutral-900">
                    {key}
                  </span>
                </div>
                <div
                  className="border-l-2 border-primary-600 bg-primary-100"
                  style={{ width: value as string, height: '32px' }}
                />
                <div className="text-body-sm text-neutral-600">{value}</div>
              </div>
            ))}
        </div>
      </div>

      {/* Semantic Aliases */}
      <div>
        <h3 className="mb-6 text-heading-sm">Semantic Spacing Aliases</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="mb-4 text-body-md text-neutral-600">
              Use semantic names for clearer intent:
            </p>
            <ul className="space-y-2 text-body-md">
              <li>
                <span className="font-semibold">xs</span> = 4px (micro)
              </li>
              <li>
                <span className="font-semibold">sm</span> = 8px (small)
              </li>
              <li>
                <span className="font-semibold">md</span> = 16px (medium)
              </li>
              <li>
                <span className="font-semibold">lg</span> = 24px (large)
              </li>
              <li>
                <span className="font-semibold">xl</span> = 32px (extra large)
              </li>
              <li>
                <span className="font-semibold">2xl</span> = 40px (2x large)
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-body-md text-neutral-600">
              Tailwind utilities available:
            </p>
            <ul className="space-y-2 font-mono text-body-xs">
              <li>p-0 to p-10 (padding)</li>
              <li>m-0 to m-10 (margin)</li>
              <li>gap-0 to gap-10 (gaps)</li>
              <li>w-0 to w-40 (widths)</li>
              <li>h-0 to h-40 (heights)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Practical Examples */}
      <div>
        <h3 className="mb-6 text-heading-sm">Spacing in Layout</h3>
        <div className="space-y-8">
          {/* Card with spacing */}
          <div>
            <p className="mb-3 text-body-sm text-neutral-600">
              Card with consistent internal spacing
            </p>
            <div className="rounded-card border border-neutral-200 bg-neutral-0 p-6 shadow-md">
              <h4 className="mb-4 text-heading-sm">Card Title</h4>
              <p className="mb-6 text-body-md text-neutral-700">
                Card content with semantic spacing between sections.
              </p>
              <div className="flex gap-3">
                <button className="rounded-button bg-primary-600 px-4 py-2 text-body-md text-white">
                  Action
                </button>
                <button className="rounded-button bg-neutral-100 px-4 py-2 text-body-md text-neutral-900">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Grid with spacing */}
          <div>
            <p className="mb-3 text-body-sm text-neutral-600">
              Grid with consistent gaps
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="flex h-24 items-center justify-center rounded-md bg-neutral-100"
                >
                  <span className="text-body-md text-neutral-600">
                    Item {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Flex with spacing */}
          <div>
            <p className="mb-3 text-body-sm text-neutral-600">
              Flex layout with gap and margin
            </p>
            <div className="flex flex-wrap gap-6">
              {['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary-100 px-4 py-2 text-body-sm text-primary-900"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacing Guide */}
      <div className="rounded-card bg-neutral-50 p-6">
        <h4 className="mb-4 text-heading-sm">Spacing Best Practices</h4>
        <ul className="space-y-3 text-body-md">
          <li>
            <strong>Internal padding:</strong> Use spacing tokens for component
            padding (p-4, p-6)
          </li>
          <li>
            <strong>Gap between elements:</strong> Use gap utilities in
            flex/grid (gap-3, gap-4)
          </li>
          <li>
            <strong>Margins between sections:</strong> Use margin tokens (mb-6,
            mt-8)
          </li>
          <li>
            <strong>Never use arbitrary values:</strong> Always use defined
            spacing scale
          </li>
        </ul>
      </div>
    </div>
  ),
};

/**
 * Spacing Constants
 *
 * Access spacing values programmatically for calculations.
 */
export const SpacingConstants: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <p className="text-body-md">
        Use spacing constants for calculations and dynamic styles:
      </p>
      <pre className="overflow-auto rounded-md bg-neutral-100 p-4 font-mono text-body-xs">
        {`import { SPACING, SPACING_VALUES } from '@/lib/design-tokens';

// String values for CSS
const padding = SPACING[4]; // "16px"

// Numeric values for calculations
const gapPixels = SPACING_VALUES[3]; // 12

// Use in styled-components or CSS-in-JS
const containerStyle = {
  padding: SPACING[6],
  marginBottom: SPACING[8],
  gap: SPACING[4],
  width: \`calc(100% - \${SPACING_VALUES[4] * 2}px)\`,
};`}
      </pre>
    </div>
  ),
};
