'use client';

import { AppShell, AdminRoute, Card } from '@/components/app-shell';
import { getStoredData } from '@/lib/cowrywise-data';

export default function AdminDepositsPage() {
  const data = getStoredData();
  return (
    <AdminRoute>
      <AppShell title="Deposit Approvals">
        <div className="space-y-4">
          {data.deposits.map((deposit) => (
            <Card key={deposit.id}>
              <p className="font-semibold text-slate-900">{deposit.depositAccountName}</p>
              <p className="mt-2 text-sm text-slate-600">Status: {deposit.status}</p>
            </Card>
          ))}
        </div>
      </AppShell>
    </AdminRoute>
  );
}
