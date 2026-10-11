import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { type User } from '@/lib/cowrywise-data';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-blue-700 p-1.5 shadow-lg shadow-blue-700/20">
              <Image src="/cowrywise-logo.svg" alt="Cowrywise logo" width={36} height={36} className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight text-blue-700">COWRYWISE</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 md:inline-flex">Login</Link>
            <Link href="/signup" className="inline-flex rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20">Get Started</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Smarter wealth management
              </p>
              <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                Build wealth with disciplined investment planning.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-slate-600">
                COWRYWISE brings together secure wallet management, investment plans, and portfolio visibility in one premium platform designed for modern financial growth.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/signup" className="rounded-full bg-blue-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/20">Get Started</Link>
                <Link href="/login" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700">Login</Link>
              </div>
              <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-2xl font-bold text-slate-900">NGN 2.4B</div>
                  <div className="text-xs text-slate-500">portfolio value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">18k+</div>
                  <div className="text-xs text-slate-500">investors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">12.5%</div>
                  <div className="text-xs text-slate-500">avg. yield</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-blue-200/50 blur-3xl" />
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-blue-500/10">
                <div className="rounded-2xl bg-slate-900 p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-300">Total balance</p>
                      <div className="mt-2 text-3xl font-bold">₦ 584,900</div>
                    </div>
                    <div className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-semibold text-emerald-300">+ 8.4%</div>
                  </div>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl bg-white/5 p-3">
                      <p className="text-xs text-slate-300">Available</p>
                      <p className="mt-2 text-xl font-semibold">₦ 468,900</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3">
                      <p className="text-xs text-slate-300">Invested</p>
                      <p className="mt-2 text-xl font-semibold">₦ 110,000</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-blue-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Investment</p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">Prime Growth</p>
                    <p className="mt-2 text-sm text-slate-600">12% projected annual return</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Next maturity</p>
                    <p className="mt-2 text-xl font-bold text-slate-900">Mar 2027</p>
                    <p className="mt-2 text-sm text-slate-600">Projected gain: ₦ 18,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">WHY COWRYWISE</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">A more disciplined approach to wealth building.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: 'Secure wallet operations', text: 'Track balances, monitor available funds and maintain complete financial visibility across your accounts.' },
              { title: 'Smart investment plans', text: 'Choose from professionally structured plans with clearly defined minimums, durations and expected returns.' },
              { title: 'Built for trust', text: 'Focused on transparency, account security, and clean, organized account management from mobile to desktop.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">✓</div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">How it works</p>
                <h2 className="mt-3 text-3xl font-bold">Invest with clarity.</h2>
              </div>
              {[
                { step: '01', title: 'Create account', text: 'Register in minutes with verified profile details and a secure wallet setup.' },
                { step: '02', title: 'Fund wallet', text: 'Make deposits using approved payment instructions and manage your available balance.' },
                { step: '03', title: 'Invest smart', text: 'Select an investment plan and track projected outcomes with confidence.' },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{item.step}</span>
                  <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Plans</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Flexible investment options</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { name: 'Prime Growth', rate: '12%', min: '₦50,000', duration: '6 months' },
              { name: 'Wealth Builder', rate: '18%', min: '₦100,000', duration: '12 months' },
              { name: 'Capital Accumulator', rate: '24%', min: '₦250,000', duration: '18 months' },
            ].map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{plan.name}</p>
                <div className="mt-5 text-4xl font-black text-slate-900">{plan.rate}</div>
                <p className="mt-2 text-sm text-slate-600">projected return</p>
                <div className="mt-6 space-y-3 text-sm text-slate-600">
                  <div className="flex justify-between"><span>Minimum</span><span className="font-semibold text-slate-900">{plan.min}</span></div>
                  <div className="flex justify-between"><span>Duration</span><span className="font-semibold text-slate-900">{plan.duration}</span></div>
                </div>
                <button className="mt-6 w-full rounded-full bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white">Choose plan</button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Security</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">Professional infrastructure built around trust.</h2>
                <ul className="mt-6 space-y-4 text-slate-600">
                  <li>• Role-based access control for secure user and admin workflows</li>
                  <li>• Wallet accounting through auditable ledger entries</li>
                  <li>• Sensitive account actions guarded by structured approval flows</li>
                  <li>• Transparent, mobile-friendly interfaces and accessible form controls</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-blue-50 p-4">
                    <p className="text-sm text-slate-500">Referral reward</p>
                    <p className="mt-2 text-xl font-bold text-slate-900">₦25,000</p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-4">
                    <p className="text-sm text-slate-500">Account status</p>
                    <p className="mt-2 text-xl font-bold text-slate-900">Verified</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <p className="text-sm text-slate-500">Admin review</p>
                    <p className="mt-2 text-xl font-bold text-slate-900">Fast-track</p>
                  </div>
                  <div className="rounded-2xl bg-amber-50 p-4">
                    <p className="text-sm text-slate-500">Notifications</p>
                    <p className="mt-2 text-xl font-bold text-slate-900">Live</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="rounded-3xl bg-blue-700 p-10 text-white">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Referral</p>
                <h2 className="mt-3 text-3xl font-bold">Invite friends and grow your network.</h2>
              </div>
              <Link href="/signup" className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700">Start earning rewards</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'How do I start investing?',
              'Is my information secure?',
              'How are returns projected?',
              'Can I withdraw at any time?',
              'What does admin review mean?',
              'Do I need a referral code?',
            ].map((q) => (
              <div key={q} className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
                <p className="font-semibold text-slate-900">{q}</p>
                <p className="mt-2 text-sm text-slate-600">COWRYWISE uses a guided investment model with transparent account access, status tracking and policy-driven approvals.</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-blue-700 p-1.5">
              <Image src="/cowrywise-logo.svg" alt="COWRYWISE logo" width={28} height={28} className="h-full w-full object-contain" />
            </div>
            <span className="font-semibold text-slate-900">COWRYWISE</span>
          </div>
          <div>© 2026 COWRYWISE. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export function AuthPageShell({ title, children }: { title: string; children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('cowrywise-user') || 'null'));
  }, []);

  if (user) {
    return <div className="flex min-h-screen items-center justify-center bg-slate-100 text-slate-700">Redirecting...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 px-4 py-10">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-blue-100">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-10 text-white">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white/10 p-2">
                <Image src="/cowrywise-logo.svg" alt="COWRYWISE logo" width={34} height={34} className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-xl font-bold">COWRYWISE</p>
              </div>
            </div>
            <h1 className="mt-10 text-3xl font-bold">{title}</h1>
            <p className="mt-4 max-w-sm text-sm leading-7 text-blue-100">
              A professional wealth platform built around account visibility, secure investment planning and dependable financial management.
            </p>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Platform note</p>
              <p className="mt-3 text-sm text-blue-50">This is a simulated platform for educational and product demonstration purposes and does not represent a licensed financial institution.</p>
            </div>
          </div>
          <div className="p-6 md:p-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
