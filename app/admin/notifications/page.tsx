'use client';

import { AppShell, AdminRoute, Card } from '@/components/app-shell';
import { getStoredData } from '@/lib/cowrywise-data';

export default function AdminNotificationsPage() {
  const data = getStoredData();
  return (
    <AdminRoute>
      <AppShell title="Notifications">
        <div className="space-y-4">
          {data.notifications.map((item) => (
            <Card key={item.id}>
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600">{item.message}</p>
            </Card>
          ))}
        </div>
      </AppShell>
    </AdminRoute>
  );
}
