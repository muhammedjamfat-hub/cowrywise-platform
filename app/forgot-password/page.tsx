'use client';

import Link from 'next/link';
import { AuthPageShell } from '@/components/app-shell';

export default function ForgotPasswordPage() {
  return (
    <AuthPageShell title="Reset your password">
      <div className="space-y-5">
        <p className="text-sm text-slate-600">Enter your email to receive a secure reset link.</p>
        <label className="block space-y-2 text-sm font-medium text-slate-700">
          <span>Email address</span>
          <input type="email" placeholder="you@example.com" className="w-full" />
        </label>
        <button className="w-full rounded-full bg-blue-700 px-4 py-3 text-sm font-semibold text-white" type="button">Send reset link</button>
        <p className="text-center text-sm text-slate-600">
          Back to <Link href="/login" className="font-semibold text-blue-700">login</Link>
        </p>
      </div>
    </AuthPageShell>
  );
}
