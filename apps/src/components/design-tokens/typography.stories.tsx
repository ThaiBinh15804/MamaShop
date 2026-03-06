import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design System/Typography',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

/**
 * Typography System
 *
 * The typography system provides predefined text styles for consistency across the application.
 * All styles include font family, size, weight, and line-height.
 */
export const TypeographyShowcase: StoryObj = {
  render: () => (
    <div className="space-y-12">
      {/* Display Styles */}
      <div>
        <h3 className="mb-6 text-heading-sm">Display Styles</h3>
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-body-xs text-neutral-600">
              Display Large (140px)
            </p>
            <p className="text-display-lg">Hello we are Emastudio</p>
          </div>
          <div>
            <p className="mb-2 text-body-xs text-neutral-600">
              Display Medium (110px)
            </p>
            <p className="text-display-md">Hello we are Emastudio</p>
          </div>
          <div>
            <p className="mb-2 text-body-xs text-neutral-600">
              Display Small (98px)
            </p>
            <p className="text-display-sm">Hello we are Emastudio</p>
          </div>
        </div>
      </div>

      {/* Heading Styles */}
      <div>
        <h3 className="mb-6 text-heading-sm">Heading Styles</h3>
        <div className="space-y-6">
          <div>
            <p className="mb-1 text-body-xs text-neutral-600">
              Heading 2XL (63px)
            </p>
            <h1 className="text-heading-2xl">Main Page Heading</h1>
          </div>
          <div>
            <p className="mb-1 text-body-xs text-neutral-600">
              Heading XL (54px)
            </p>
            <h2 className="text-heading-xl">Section Heading</h2>
          </div>
          <div>
            <p className="mb-1 text-body-xs text-neutral-600">
              Heading LG (44px)
            </p>
            <h3 className="text-heading-lg">Subsection Heading</h3>
          </div>
          <div>
            <p className="mb-1 text-body-xs text-neutral-600">
              Heading MD (42px)
            </p>
            <h4 className="text-heading-md">Card Header</h4>
          </div>
          <div>
            <p className="mb-1 text-body-xs text-neutral-600">
              Heading SM (34px)
            </p>
            <h5 className="text-heading-sm">Group Header</h5>
          </div>
          <div>
            <p className="mb-1 text-body-xs text-neutral-600">
              Heading XS (28px)
            </p>
            <h6 className="text-heading-xs">Item Header</h6>
          </div>
          <div>
            <p className="mb-1 text-body-xs text-neutral-600">
              Heading 2XS (20px)
            </p>
            <div className="text-heading-2xs">Label or Caption</div>
          </div>
        </div>
      </div>

      {/* Body Styles */}
      <div>
        <h3 className="mb-6 text-heading-sm">Body Styles</h3>
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-body-xs text-neutral-600">
              Body Large (20px)
            </p>
            <p className="text-body-lg">
              This is large body text, used for emphasized content or
              introductory paragraphs.
            </p>
          </div>
          <div>
            <p className="mb-2 text-body-xs text-neutral-600">
              Body Medium (16px) - Default
            </p>
            <p className="text-body-md">
              This is the standard body text size, used for most content in the
              application.
            </p>
          </div>
          <div>
            <p className="mb-2 text-body-xs text-neutral-600">
              Body Small (14px)
            </p>
            <p className="text-body-sm">
              This is small body text, used for secondary content or helper
              text.
            </p>
          </div>
          <div>
            <p className="mb-1 text-body-xs text-neutral-600">
              Body Extra Small (12px)
            </p>
            <p className="text-body-xs">
              This is extra small text, used for captions and minimal content.
            </p>
          </div>
        </div>
      </div>

      {/* Button Styles */}
      <div>
        <h3 className="mb-6 text-heading-sm">Button Typography</h3>
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-body-xs text-neutral-600">
              Button Large (16px, Semi Bold)
            </p>
            <button className="rounded-button bg-primary-600 px-6 py-3 text-button-lg text-white">
              Large Button
            </button>
          </div>
          <div>
            <p className="mb-2 text-body-xs text-neutral-600">
              Button Medium (14px, Semi Bold)
            </p>
            <button className="rounded-button bg-primary-600 px-4 py-2 text-button-md text-white">
              Medium Button
            </button>
          </div>
          <div>
            <p className="mb-2 text-body-xs text-neutral-600">
              Button Small (12px, Semi Bold)
            </p>
            <button className="rounded-button bg-primary-600 px-3 py-1 text-button-sm text-white">
              Small Button
            </button>
          </div>
        </div>
      </div>

      {/* Typography in Context */}
      <div>
        <h3 className="mb-6 text-heading-sm">Typography in Context</h3>
        <div className="space-y-4 rounded-card bg-neutral-50 p-8">
          <h2 className="text-heading-xl text-neutral-900">
            Welcome to EasyMart
          </h2>
          <p className="text-body-md text-neutral-700">
            This is a sample page layout showing how typography styles work
            together to create a visual hierarchy.
          </p>
          <h3 className="mt-6 text-heading-md text-neutral-900">
            Featured Products
          </h3>
          <p className="text-body-sm text-neutral-600">
            Browse our collection of high-quality products
          </p>
        </div>
      </div>
    </div>
  ),
};

/**
 * Typography Constants
 *
 * All text styles are available as constants for programmatic use.
 */
export const TypographyConstants: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <p className="text-body-md">
        Typography styles are exported as constants with complete style objects:
      </p>
      <pre className="overflow-auto rounded-md bg-neutral-100 p-4 font-mono text-body-xs">
        {`import { TEXT_STYLES } from '@/lib/design-tokens';

// Access typography styles
const headingStyle = TEXT_STYLES.headingLG;
const bodyStyle = TEXT_STYLES.bodyMD;

// Apply to elements
const styledText = {
  fontSize: bodyStyle.fontSize,
  fontWeight: bodyStyle.fontWeight,
  lineHeight: bodyStyle.lineHeight,
  fontFamily: bodyStyle.fontFamily,
};`}
      </pre>
    </div>
  ),
};
