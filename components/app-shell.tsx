import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCurrentUser, isAdminUser, type User } from '@/lib/cowrywise-data';

export function AppShell({ children, title }: { children: React.ReactNode; title?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, [pathname]);

  const navItems = user?.role === 'admin'
    ? [
        { href: '/admin', label: 'Dashboard' },
        { href: '/admin/users', label: 'Users' },
        { href: '/admin/deposits', label: 'Deposits' },
        { href: '/admin/withdrawals', label: 'Withdrawals' },
        { href: '/admin/plans', label: 'Investment Plans' },
        { href: '/admin/accounts', label: 'Deposit Accounts' },
        { href: '/admin/referrals', label: 'Referrals' },
        { href: '/admin/notifications', label: 'Notifications' },
        { href: '/admin/audit', label: 'Audit Logs' },
      ]
    : [
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/wallet', label: 'Wallet' },
        { href: '/investments', label: 'Investments' },
        { href: '/transactions', label: 'Transactions' },
        { href: '/referrals', label: 'Referrals' },
        { href: '/notifications', label: 'Notifications' },
        { href: '/profile', label: 'Profile' },
      ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href={user ? (user.role === 'admin' ? '/admin' : '/dashboard') : '/'} className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-blue-700 p-1.5 shadow-lg shadow-blue-700/20">
              <Image src="/cowrywise-logo.svg" alt="COWRYWISE logo" width={36} height={36} className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-blue-700">COWRYWISE</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                  pathname === item.href ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {!user ? (
              <>
                <Link href="/login" className="hidden rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 md:inline-flex">Login</Link>
                <Link href="/signup" className="inline-flex rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white">Get Started</Link>
              </>
            ) : (
              <>
                <span className="hidden text-sm font-medium text-slate-600 md:inline-block">{user.fullName}</span>
                <button
                  onClick={() => {
                    window.localStorage.removeItem('cowrywise-user');
                    router.push('/login');
                  }}
                  className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
        {title && (
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">COWRYWISE</p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">{title}</h1>
            </div>
          </div>
        )}
        {children}
      </main>
    </div>
  );
}

export function ProtectedRoute({ children, allowedRoles = ['user', 'admin'] }: { children: React.ReactNode; allowedRoles?: string[] }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const user = getCurrentUser();
    if (!user || !allowedRoles.includes(user.role)) {
      router.push('/login');
      return;
    }
    setReady(true);
  }, [allowedRoles, router]);

  if (!ready) {
    return <div className="flex min-h-[60vh] items-center justify-center text-slate-500">Loading your account...</div>;
  }

  return <>{children}</>;
}

export function AdminRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const user = getCurrentUser();
    if (!user || !isAdminUser(user)) {
      router.push('/login');
      return;
    }
    setReady(true);
  }, [router]);

  if (!ready) {
    return <div className="flex min-h-[60vh] items-center justify-center text-slate-500">Checking admin access...</div>;
  }

  return <>{children}</>;
}

export function StatCard({ title, value, info }: { title: string; value: string; info?: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{title}</p>
        <span className="text-lg font-bold text-blue-700">•</span>
      </div>
      <div className="mt-4 text-2xl font-bold text-slate-900">{value}</div>
      {info && <p className="mt-2 text-xs text-slate-500">{info}</p>}
    </div>
  );
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>{children}</div>;
}

export function Badge({ tone = 'default', children }: { tone?: 'default' | 'success' | 'warning' | 'danger' | 'blue'; children: React.ReactNode }) {
  const palette = {
    default: 'bg-slate-100 text-slate-700',
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-amber-100 text-amber-700',
    danger: 'bg-rose-100 text-rose-700',
    blue: 'bg-blue-100 text-blue-700',
  };
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${palette[tone]}`}>{children}</span>;
}

export function PrimaryButton({ children, className = '', onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <button onClick={onClick} className={`rounded-full bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 ${className}`}>
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className = '', onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <button onClick={onClick} className={`rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 ${className}`}>
      {children}
    </button>
  );
}

export function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
      <h3 className="text-lg font-semibold text-slate-700">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">{message}</p>
    </div>
  );
}

export function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2 text-sm font-medium text-slate-700">
      <span>{label}</span>
      {children}
    </label>
  );
}

export default function DemoShell() {
  return null;
}
