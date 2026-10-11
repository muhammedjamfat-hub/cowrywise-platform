'use client';

import { AppShell, Card, ProtectedRoute } from '@/components/app-shell';
import { getCurrentUser, getStoredData } from '@/lib/cowrywise-data';

export default function ProfilePage() {
  const user = getCurrentUser();
  const data = getStoredData();
  const profile = data.users.find((item) => item.id === user?.id);

  return (
    <ProtectedRoute>
      <AppShell title="Profile">
        <Card>
          <p className="text-sm text-slate-500">Full name</p>
          <div className="mt-2 text-2xl font-bold text-slate-900">{profile?.fullName}</div>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>Email: {profile?.email}</p>
            <p>Phone: {profile?.phone}</p>
            <p>Referral code: {profile?.referralCode}</p>
          </div>
        </Card>
      </AppShell>
    </ProtectedRoute>
  );
}
