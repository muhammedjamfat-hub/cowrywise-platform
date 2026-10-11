'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AuthPageShell } from '@/components/app-shell';
import { getStoredData, setCurrentUser } from '@/lib/cowrywise-data';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('muhammedjamfat@gmail.com');
  const [password, setPassword] = useState('Muhammed003');
  const [error, setError] = useState('');

  useEffect(() => {
    const user = window.localStorage.getItem('cowrywise-user');
    if (!user) return;

    const parsed = JSON.parse(user);
    if (parsed.role === 'admin') router.push('/admin');
    else router.push('/dashboard');
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const db = getStoredData();
    const user = db.users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
    );

    if (!user) {
      setError('Invalid email or password. Please try again.');
      return;
    }

    if (user.status !== 'active') {
      setError('This account is not active. Please contact support.');
      return;
    }

    setCurrentUser(user);
    if (user.role === 'admin') router.push('/admin');
    else router.push('/dashboard');
  };

  return (
    <AuthPageShell title="Welcome back">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Login to your account</h2>
          <p className="mt-2 text-sm text-slate-500">Access your wallet, investments and account details.</p>
        </div>

        {error && <div className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div>}

        <label className="block space-y-2 text-sm font-medium text-slate-700">
          <span>Email address</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" className="w-full" required />
        </label>

        <label className="block space-y-2 text-sm font-medium text-slate-700">
          <span>Password</span>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" className="w-full" required />
        </label>

        <div className="flex items-center justify-between text-sm">
          <Link href="/signup" className="text-blue-700">Create account</Link>
          <Link href="/forgot-password" className="text-slate-600">Forgot password?</Link>
        </div>

        <button className="w-full rounded-full bg-blue-700 px-4 py-3 text-sm font-semibold text-white" type="submit">Login</button>
      </form>
    </AuthPageShell>
  );
}
