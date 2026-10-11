'use client';

import { AppShell, AdminRoute, Card } from '@/components/app-shell';
import { getStoredData } from '@/lib/cowrywise-data';

export default function AdminAccountsPage() {
  const data = getStoredData();
  return (
    <AdminRoute>
      <AppShell title="Deposit Accounts">
        <div className="space-y-4">
          {data.depositAccounts.map((account) => (
            <Card key={account.id}>
              <p className="font-semibold text-slate-900">{account.bankName}</p>
              <p className="text-sm text-slate-600">Account: {account.accountNumber}</p>
            </Card>
          ))}
        </div>
      </AppShell>
    </AdminRoute>
  );
}
