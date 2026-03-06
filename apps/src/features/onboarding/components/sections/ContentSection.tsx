import React, { useMemo } from 'react';
import { QuestionnaireContentSectionProps } from '@/features/onboarding/types';
import { OptionBadge } from '../ui/OptionBadge';
import { cn } from '@/utils/cn';

/**
 * ContentSection component displays question title, description, and selectable options
 * Handles both single and multi-select modes with different layout variants
 */
export const ContentSection = React.forwardRef<HTMLDivElement, QuestionnaireContentSectionProps>(
  (
    {
      title,
      description,
      options,
      selectedOptions = [],
      variant = 'text',
      mode = 'single-select',
      onOptionSelect,
      className,
    },
    ref
  ) => {
    // Normalize selectedOptions to array for comparison
    const selectedArray = useMemo(() => {
      if (Array.isArray(selectedOptions)) {
        return selectedOptions;
      }
      return selectedOptions ? [selectedOptions] : [];
    }, [selectedOptions]);

    const handleOptionClick = (optionId: string) => {
      if (!onOptionSelect) return;

      if (mode === 'single-select') {
        // Toggle or select single option
        const isCurrentlySelected = selectedArray.includes(optionId);
        onOptionSelect(isCurrentlySelected ? '' : optionId);
      } else {
        // Multi-select: toggle option
        onOptionSelect(optionId);
      }
    };

    // Layout is different for icon vs text variant
    const layoutClass =
      variant === 'icon'
        ? 'grid grid-cols-4 gap-4'
        : 'flex flex-wrap gap-4';

    return (
      <div ref={ref} className={cn('flex flex-col gap-6', className)}>
        {/* Title */}
        <h2 className={cn(
          'text-3xl font-bold leading-tight',
          'font-[family-name:var(--typography/font/family/heading,Degular_Demo:Bold,sans-serif)]',
          'text-[var(--text/black,#0d0c0d)]'
        )}>
          {title}
        </h2>

        {/* Description (optional) */}
        {description && (
          <p className={cn(
            'text-base leading-relaxed',
            'font-[family-name:var(--typography/font/family/body,sans-serif)]',
            'text-[var(--text/grey,#5a5a5a)]'
          )}>
            {description}
          </p>
        )}

        {/* Options grid/flex */}
        <div className={layoutClass}>
          {options.map((option) => (
            <OptionBadge
              key={option.id}
              id={option.id}
              label={option.label}
              icon={option.icon}
              variant={variant}
              selected={selectedArray.includes(option.id)}
              onClick={handleOptionClick}
            />
          ))}
        </div>
      </div>
    );
  }
);

ContentSection.displayName = 'ContentSection';
