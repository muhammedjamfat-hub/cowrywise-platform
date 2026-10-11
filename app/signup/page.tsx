'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AuthPageShell } from '@/components/app-shell';
import { generateReferralCode, getStoredData, saveStoredData, setCurrentUser, type AppData } from '@/lib/cowrywise-data';

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
  });
  const [error, setError] = useState('');

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, phone, password, confirmPassword, referralCode } = form;

    if (!fullName || !email || !phone || !password) {
      setError('All required fields must be completed.');
      return;
    }

    if (password.length < 8) {
      setError('Password must include at least 8 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const db = getStoredData();
    if (db.users.some((user) => user.email.toLowerCase() === email.toLowerCase())) {
      setError('An account with this email already exists.');
      return;
    }

    const newUser = {
      id: `user-${Date.now()}`,
      fullName,
      email,
      phone,
      password,
      role: 'user',
      status: 'active',
      referralCode: referralCode || generateReferralCode(fullName),
      createdAt: new Date().toISOString(),
      profileComplete: 40,
      hasOnboarded: false,
      walletId: `wallet-${Date.now()}`,
    };

    const newWallet = {
      id: newUser.walletId,
      userId: newUser.id,
      balance: 0,
      available: 0,
      invested: 0,
      pending: 0,
      currency: 'NGN',
      updatedAt: new Date().toISOString(),
    };

    const nextData: AppData = {
      ...db,
      users: [...db.users, newUser],
      wallets: [...db.wallets, newWallet],
      notifications: [
        ...db.notifications,
        {
          id: `notif-${Date.now()}`,
          userId: newUser.id,
          title: 'Welcome to COWRYWISE',
          message: 'Your profile and wallet have been created successfully. Complete onboarding to start investing.',
          type: 'success',
          read: false,
          createdAt: new Date().toISOString(),
        },
      ],
    };

    saveStoredData(nextData);
    setCurrentUser(newUser);
    router.push('/dashboard');
  };

  return (
    <AuthPageShell title="Create your account">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div>}

        <label className="block space-y-2 text-sm font-medium text-slate-700">
          <span>Full name</span>
          <input value={form.fullName} onChange={(e) => handleChange('fullName', e.target.value)} type="text" placeholder="Enter full name" className="w-full" required />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>Email</span>
            <input value={form.email} onChange={(e) => handleChange('email', e.target.value)} type="email" placeholder="you@example.com" className="w-full" required />
          </label>
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>Phone number</span>
            <input value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} type="tel" placeholder="+2348000000000" className="w-full" required />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>Password</span>
            <input value={form.password} onChange={(e) => handleChange('password', e.target.value)} type="password" placeholder="Create password" className="w-full" required />
          </label>
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>Confirm password</span>
            <input value={form.confirmPassword} onChange={(e) => handleChange('confirmPassword', e.target.value)} type="password" placeholder="Confirm password" className="w-full" required />
          </label>
        </div>

        <label className="block space-y-2 text-sm font-medium text-slate-700">
          <span>Referral code (optional)</span>
          <input value={form.referralCode} onChange={(e) => handleChange('referralCode', e.target.value)} type="text" placeholder="If you were referred" className="w-full" />
        </label>

        <button type="submit" className="w-full rounded-full bg-blue-700 px-4 py-3 text-sm font-semibold text-white">Create account</button>

        <p className="text-center text-sm text-slate-600">
          Already have an account? <Link href="/login" className="font-semibold text-blue-700">Login</Link>
        </p>
      </form>
    </AuthPageShell>
  );
}
