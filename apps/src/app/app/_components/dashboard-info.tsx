'use client';

import { useUser } from '@/lib/auth';

export const DashboardInfo = () => {
  const user = useUser();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">
        Welcome, {user.data?.firstName} {user.data?.lastName}
      </h1>
      <p className="text-gray-600">You are logged in as {user.data?.role}</p>
      <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-4 text-center">
        <p className="text-gray-500">
          This is your dashboard. Start building your application here.
        </p>
      </div>
    </div>
  );
};
