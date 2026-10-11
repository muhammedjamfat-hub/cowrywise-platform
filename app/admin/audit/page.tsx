'use client';

import { AppShell, AdminRoute, Card } from '@/components/app-shell';
import { getStoredData } from '@/lib/cowrywise-data';

export default function AdminAuditPage() {
  const data = getStoredData();
  return (
    <AdminRoute>
      <AppShell title="Audit Logs">
        <div className="space-y-4">
          {data.auditLogs.map((log) => (
            <Card key={log.id}>
              <p className="font-semibold text-slate-900">{log.action}</p>
              <p className="mt-2 text-sm text-slate-600">{log.description}</p>
            </Card>
          ))}
        </div>
      </AppShell>
    </AdminRoute>
  );
}
