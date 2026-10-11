'use client';

import { AppShell, AdminRoute, Card } from '@/components/app-shell';
import { getStoredData } from '@/lib/cowrywise-data';

export default function AdminUsersPage() {
  const data = getStoredData();
  return (
    <AdminRoute>
      <AppShell title="Users Management">
        <div className="space-y-4">
          {data.users.map((user) => (
            <Card key={user.id}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{user.fullName}</p>
                  <p className="text-sm text-slate-500">{user.email}</p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{user.role}</span>
              </div>
            </Card>
          ))}
        </div>
      </AppShell>
    </AdminRoute>
  );
}
