'use client';

import { AppShell, AdminRoute, Card, Badge } from '@/components/app-shell';
import { formatCurrency, getStoredData, getSummaryCards } from '@/lib/cowrywise-data';

export default function AdminDashboardPage() {
  const data = getStoredData();
  const summary = getSummaryCards(data);

  return (
    <AdminRoute>
      <AppShell title="Admin Dashboard">
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Card>
              <p className="text-sm text-slate-500">Total users</p>
              <div className="mt-3 text-3xl font-bold text-slate-900">{summary.totalUsers}</div>
            </Card>
            <Card>
              <p className="text-sm text-slate-500">Active users</p>
              <div className="mt-3 text-3xl font-bold text-slate-900">{summary.activeUsers}</div>
            </Card>
            <Card>
              <p className="text-sm text-slate-500">Deposits</p>
              <div className="mt-3 text-3xl font-bold text-slate-900">{formatCurrency(summary.totalDeposits)}</div>
            </Card>
            <Card>
              <p className="text-sm text-slate-500">Pending deposits</p>
              <div className="mt-3 text-3xl font-bold text-slate-900">{summary.pendingDeposits}</div>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <h3 className="text-xl font-bold text-slate-900">Overview</h3>
              <div className="mt-5 space-y-3">
                <div className="flex justify-between"><span className="text-slate-600">Pending withdrawals</span><span className="font-semibold">{summary.pendingWithdrawals}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Total invested</span><span className="font-semibold">{formatCurrency(summary.totalInvested)}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Active investments</span><span className="font-semibold">{summary.activeInvestments}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Referral activity</span><span className="font-semibold">{summary.referralActivity}</span></div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-slate-900">Recent transactions</h3>
              <div className="mt-5 space-y-3">
                {data.transactions.slice(0, 5).map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <div>
                      <p className="font-semibold text-slate-900">{tx.reference}</p>
                      <p className="text-xs text-slate-500">{tx.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">{formatCurrency(tx.amount)}</p>
                      <Badge tone={tx.status === 'completed' ? 'success' : 'warning'}>{tx.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </AppShell>
    </AdminRoute>
  );
}
