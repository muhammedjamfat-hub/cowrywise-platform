'use client';

import { AppShell, Card, ProtectedRoute } from '@/components/app-shell';
import { getCurrentUser, getStoredData } from '@/lib/cowrywise-data';

export default function ReferralsPage() {
  const user = getCurrentUser();
  const data = getStoredData();
  const referrals = data.referrals.filter((item) => item.referrerId === user?.id);

  return (
    <ProtectedRoute>
      <AppShell title="Referrals">
        <div className="space-y-4">
          {referrals.length === 0 ? (
            <Card>No referrals yet.</Card>
          ) : (
            referrals.map((ref) => (
              <Card key={ref.id}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{ref.referralCode}</p>
                    <p className="text-sm text-slate-500">{ref.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">₦{ref.reward.toLocaleString()}</p>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
