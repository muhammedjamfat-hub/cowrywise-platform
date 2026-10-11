'use client';

import { AppShell, Card, ProtectedRoute } from '@/components/app-shell';
import { getCurrentUser, getStoredData } from '@/lib/cowrywise-data';

export default function NotificationsPage() {
  const user = getCurrentUser();
  const data = getStoredData();
  const items = data.notifications.filter((item) => item.userId === user?.id);

  return (
    <ProtectedRoute>
      <AppShell title="Notifications">
        <div className="space-y-4">
          {items.length === 0 ? (
            <Card>No notifications.</Card>
          ) : (
            items.map((item) => (
              <Card key={item.id}>
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm text-slate-600">{item.message}</p>
              </Card>
            ))
          )}
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
