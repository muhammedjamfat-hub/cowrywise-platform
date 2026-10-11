'use client';

import { AppShell, AdminRoute, Card } from '@/components/app-shell';
import { getStoredData } from '@/lib/cowrywise-data';

export default function AdminReferralPage() {
  const data = getStoredData();
  return (
    <AdminRoute>
      <AppShell title="Referral Reports">
        <div className="space-y-4">
          {data.referrals.map((ref) => (
            <Card key={ref.id}>
              <p className="font-semibold text-slate-900">{ref.referralCode}</p>
              <p className="text-sm text-slate-600">Reward: ₦{ref.reward.toLocaleString()}</p>
            </Card>
          ))}
        </div>
      </AppShell>
    </AdminRoute>
  );
}
