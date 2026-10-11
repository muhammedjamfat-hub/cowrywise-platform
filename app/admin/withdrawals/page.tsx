'use client';

import { AppShell, AdminRoute, Card } from '@/components/app-shell';
import { getStoredData } from '@/lib/cowrywise-data';

export default function AdminWithdrawalsPage() {
  const data = getStoredData();
  return (
    <AdminRoute>
      <AppShell title="Withdrawal Requests">
        <div className="space-y-4">
          {data.withdrawals.map((withdrawal) => (
            <Card key={withdrawal.id}>
              <p className="font-semibold text-slate-900">{withdrawal.accountName}</p>
              <p className="mt-2 text-sm text-slate-600">Status: {withdrawal.status}</p>
            </Card>
          ))}
        </div>
      </AppShell>
    </AdminRoute>
  );
}
