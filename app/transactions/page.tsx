'use client';

import { AppShell, Card, ProtectedRoute } from '@/components/app-shell';
import { formatCurrency, getCurrentUser, getStoredData } from '@/lib/cowrywise-data';

export default function TransactionsPage() {
  const user = getCurrentUser();
  const data = getStoredData();
  const transactions = data.transactions.filter((item) => item.userId === user?.id);

  return (
    <ProtectedRoute>
      <AppShell title="Transactions">
        <div className="space-y-4">
          {transactions.length === 0 ? (
            <Card>No transactions available.</Card>
          ) : (
            transactions.map((tx) => (
              <Card key={tx.id}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{tx.description}</p>
                    <p className="text-sm text-slate-500">{tx.type} • {tx.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">{formatCurrency(tx.amount)}</p>
                    <p className="text-xs text-slate-500">{tx.reference}</p>
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
