'use client';

import React from 'react';
import { FallbackProps } from 'react-error-boundary';

/**
 * Main Error Fallback Component
 * Displayed when an error occurs in the application
 */
export const MainErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="text-center">
        <h1 className="mb-2 text-3xl font-bold text-red-600">
          Oops! Something went wrong
        </h1>
        <p className="mb-4 text-neutral-600">
          {error?.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="rounded bg-primary-500 px-4 py-2 text-white transition-colors hover:bg-primary-600"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

MainErrorFallback.displayName = 'MainErrorFallback';
