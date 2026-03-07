'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import * as React from 'react';

export interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Link Component
 * Wrapper around Next.js Link with additional styling support
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <NextLink ref={ref} className={className} {...props}>
        {children}
      </NextLink>
    );
  },
);

Link.displayName = 'Link';
