'use client';

import { AppShell, AdminRoute, Card } from '@/components/app-shell';
import { getStoredData } from '@/lib/cowrywise-data';

export default function AdminPlansPage() {
  const data = getStoredData();
  return (
    <AdminRoute>
      <AppShell title="Investment Plans">
        <div className="space-y-4">
          {data.plans.map((plan) => (
            <Card key={plan.id}>
              <p className="font-semibold text-slate-900">{plan.name}</p>
              <p className="mt-2 text-sm text-slate-600">Return rate: {plan.returnRate}%</p>
            </Card>
          ))}
        </div>
      </AppShell>
    </AdminRoute>
  );
}
