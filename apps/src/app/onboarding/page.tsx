'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { OnboardingFlow } from '@/features/onboarding/components';
import { useOnboardingStore } from '@/features/onboarding/store';

/**
 * Onboarding Page
 *
 * Displays the multi-step onboarding questionnaire for new users.
 * Redirects to home when onboarding is complete.
 */
export default function OnboardingPage() {
  const router = useRouter();
  const { isComplete } = useOnboardingStore();

  // Redirect to home when onboarding is complete
  useEffect(() => {
    if (isComplete) {
      router.push('/');
    }
  }, [isComplete, router]);

  const handleComplete = () => {
    router.push('/');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4 py-8">
      <div className="w-full max-w-2xl">
        <OnboardingFlow onComplete={handleComplete} />
      </div>
    </div>
  );
}
