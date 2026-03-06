import type { Meta, StoryObj } from '@storybook/react';

import { COLOR_PALETTE } from '@/lib/design-tokens/colors';

const meta = {
  title: 'Design System/Design Tokens',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

/**
 * Color Palette
 *
 * The EasyMart color system consists of primary colors, neutral grays, and semantic status colors.
 * All colors are extracted from the Figma design system and available as CSS variables and Tailwind utilities.
 */
export const ColorPalette: StoryObj = {
  render: () => (
    <div className="space-y-12">
      {/* Primary Colors */}
      <div>
        <h3 className="mb-4 text-heading-sm">Primary Colors</h3>
        <div className="grid grid-cols-5 gap-4">
          {Object.entries(COLOR_PALETTE.primary).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <div
                className="h-24 w-full rounded-md border border-neutral-200 shadow-sm"
                style={{ backgroundColor: value as string }}
              />
              <div className="text-body-xs">
                <p className="font-semibold text-neutral-900">Primary {key}</p>
                <p className="font-mono text-neutral-600">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neutral Colors */}
      <div>
        <h3 className="mb-4 text-heading-sm">Neutral Colors</h3>
        <div className="grid grid-cols-7 gap-4">
          {Object.entries(COLOR_PALETTE.neutral).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <div
                className="h-24 w-full rounded-md border border-neutral-300 shadow-sm"
                style={{ backgroundColor: value as string }}
              />
              <div className="text-body-xs">
                <p className="font-semibold text-neutral-900">{key}</p>
                <p className="font-mono text-xs text-neutral-600">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status Colors */}
      <div>
        <h3 className="mb-4 text-heading-sm">Semantic Status Colors</h3>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(COLOR_PALETTE.status).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <div
                className="h-24 w-full rounded-md border border-neutral-200 shadow-sm"
                style={{ backgroundColor: value as string }}
              />
              <div className="text-body-xs">
                <p className="font-semibold text-neutral-900">{key}</p>
                <p className="font-mono text-neutral-600">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Examples */}
      <div>
        <h3 className="mb-4 text-heading-sm">Usage Examples</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="rounded bg-primary-600 px-4 py-2 text-body-md text-white">
              Primary Button
            </div>
            <div className="rounded bg-success px-4 py-2 text-body-md text-white">
              Success State
            </div>
            <div className="rounded bg-error px-4 py-2 text-body-md text-white">
              Error State
            </div>
            <div className="rounded bg-warning px-4 py-2 text-body-md text-white">
              Warning State
            </div>
          </div>
          <div className="border-l-4 border-info bg-neutral-100 p-4 text-body-md">
            Info message using semantic colors
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * Individual Color Access
 *
 * All colors are available as constants for programmatic use.
 */
export const ColorConstants: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <p className="text-body-md">
        Colors are exported as constants for type-safe access:
      </p>
      <pre className="overflow-auto rounded-md bg-neutral-100 p-4 font-mono text-body-xs">
        {`import { COLORS } from '@/lib/design-tokens';

// Access individual colors
const primaryColor = COLORS.PRIMARY_600;
const backgroundColor = COLORS.NEUTRAL_0;
const successColor = COLORS.SUCCESS;

// Use in styles
const buttonStyle = {
  backgroundColor: COLORS.PRIMARY_600,
  color: COLORS.TEXT_INVERSE,
  borderColor: COLORS.PRIMARY_700,
};`}
      </pre>
    </div>
  ),
};
