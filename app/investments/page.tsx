'use client';

import { AppShell, Card, ProtectedRoute } from '@/components/app-shell';
import { formatCurrency, getCurrentUser, getStoredData } from '@/lib/cowrywise-data';

export default function InvestmentsPage() {
  const user = getCurrentUser();
  const data = getStoredData();
  const investments = data.investments.filter((item) => item.userId === user?.id);

  return (
    <ProtectedRoute>
      <AppShell title="Investments">
        <div className="space-y-4">
          {investments.length === 0 ? (
            <Card>No investment records found.</Card>
          ) : (
            investments.map((investment) => (
              <Card key={investment.id}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{investment.reference}</h3>
                    <p className="text-sm text-slate-500">{investment.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">{formatCurrency(investment.amount)}</p>
                    <p className="text-xs text-slate-500">Expected return: {formatCurrency(investment.expectedReturn)}</p>
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
