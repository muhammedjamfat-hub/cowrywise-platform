'use client';

import { AppShell, Card, ProtectedRoute } from '@/components/app-shell';
import { formatCurrency, getCurrentUser, getStoredData } from '@/lib/cowrywise-data';

export default function WalletPage() {
  const user = getCurrentUser();
  const data = getStoredData();
  const wallet = user ? data.wallets.find((item) => item.userId === user.id) : null;

  return (
    <ProtectedRoute>
      <AppShell title="Wallet">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <p className="text-sm text-slate-500">Total balance</p>
            <div className="mt-3 text-3xl font-bold text-slate-900">{formatCurrency(wallet?.balance ?? 0)}</div>
          </Card>
          <Card>
            <p className="text-sm text-slate-500">Available balance</p>
            <div className="mt-3 text-3xl font-bold text-slate-900">{formatCurrency(wallet?.available ?? 0)}</div>
          </Card>
          <Card>
            <p className="text-sm text-slate-500">Invested</p>
            <div className="mt-3 text-3xl font-bold text-slate-900">{formatCurrency(wallet?.invested ?? 0)}</div>
          </Card>
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
