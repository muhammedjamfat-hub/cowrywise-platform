'use client';

import Link from 'next/link';
import { AppShell, Card, ProtectedRoute, SecondaryButton, Badge } from '@/components/app-shell';
import { formatCurrency, formatDate, getCurrentUser, getRecentTransactions, getStoredData, getUserWalletSummary, getUserInvestmentSummary } from '@/lib/cowrywise-data';
import { useMemo } from 'react';

export default function DashboardPage() {
  const user = getCurrentUser();
  const data = getStoredData();
  const wallet = user ? getUserWalletSummary(user.id, data) : null;
  const investments = user ? getUserInvestmentSummary(user.id, data) : null;
  const transactions = user ? getRecentTransactions(data, user.id) : [];
  const unread = data.notifications.filter((n) => n.userId === user?.id && !n.read).length;

  const fmtAmount = (amount: number) => formatCurrency(amount);

  return (
    <ProtectedRoute>
      <AppShell title="Dashboard">
        <div className="space-y-6">
          <div className="grid gap-4 lg:grid-cols-4">
            <Card>
              <p className="text-sm text-slate-500">Total balance</p>
              <div className="mt-3 text-3xl font-bold text-slate-900">{fmtAmount(wallet?.totalBalance ?? 0)}</div>
            </Card>
            <Card>
              <p className="text-sm text-slate-500">Available balance</p>
              <div className="mt-3 text-3xl font-bold text-slate-900">{fmtAmount(wallet?.availableBalance ?? 0)}</div>
            </Card>
            <Card>
              <p className="text-sm text-slate-500">Invested balance</p>
              <div className="mt-3 text-3xl font-bold text-slate-900">{fmtAmount(wallet?.investedBalance ?? 0)}</div>
            </Card>
            <Card>
              <p className="text-sm text-slate-500">Pending balance</p>
              <div className="mt-3 text-3xl font-bold text-slate-900">{fmtAmount(wallet?.pendingBalance ?? 0)}</div>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Quick actions</h2>
                <Badge tone="blue">{unread} unread</Badge>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Link href="/wallet" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left hover:bg-slate-100">
                  <div className="text-lg font-semibold text-slate-900">Deposit</div>
                  <p className="mt-2 text-sm text-slate-500">Fund your wallet</p>
                </Link>
                <Link href="/wallet" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left hover:bg-slate-100">
                  <div className="text-lg font-semibold text-slate-900">Withdraw</div>
                  <p className="mt-2 text-sm text-slate-500">Move cash out</p>
                </Link>
                <Link href="/investments" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left hover:bg-slate-100">
                  <div className="text-lg font-semibold text-slate-900">Invest</div>
                  <p className="mt-2 text-sm text-slate-500">Open a plan</p>
                </Link>
                <Link href="/transactions" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left hover:bg-slate-100">
                  <div className="text-lg font-semibold text-slate-900">Transactions</div>
                  <p className="mt-2 text-sm text-slate-500">Review history</p>
                </Link>
                <Link href="/referrals" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left hover:bg-slate-100">
                  <div className="text-lg font-semibold text-slate-900">Referral</div>
                  <p className="mt-2 text-sm text-slate-500">Invite friends</p>
                </Link>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-slate-900">Investment summary</h3>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Active investments</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{investments?.items.length ?? 0}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Total invested</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{fmtAmount(investments?.totalInvested ?? 0)}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Projected return</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{fmtAmount(investments?.expectedReturns ?? 0)}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Next maturity</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{investments?.nextMaturity ? formatDate(investments.nextMaturity) : 'N/A'}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Recent transactions</h2>
                <Link href="/transactions" className="text-sm font-semibold text-blue-700">View all</Link>
              </div>

              <div className="mt-5 space-y-4">
                {transactions.length === 0 ? (
                  <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">No recent transactions available.</div>
                ) : (
                  transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                      <div>
                        <p className="font-semibold text-slate-900">{tx.description}</p>
                        <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                          <span>{formatDate(tx.createdAt)}</span>
                          <span>{tx.type}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-slate-900">{fmtAmount(tx.amount)}</p>
                        <Badge tone={tx.status === 'completed' ? 'success' : 'warning'}>{tx.status}</Badge>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-bold text-slate-900">Notifications</h2>
              <div className="mt-5 space-y-3">
                {data.notifications.filter((n) => n.userId === user?.id).slice(0, 3).map((item) => (
                  <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      {!item.read && <Badge tone="blue">New</Badge>}
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{item.message}</p>
                    <p className="mt-2 text-xs text-slate-500">{formatDate(item.createdAt)}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Referral summary</h2>
              <SecondaryButton>Share referral link</SecondaryButton>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Referral code</p>
                <p className="mt-2 text-xl font-bold text-slate-900">{user?.referralCode}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Number of referrals</p>
                <p className="mt-2 text-xl font-bold text-slate-900">{data.referrals.filter((ref) => ref.referrerId === user?.id).length}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Referral rewards</p>
                <p className="mt-2 text-xl font-bold text-slate-900">{fmtAmount(data.referrals.filter((ref) => ref.referrerId === user?.id).reduce((sum, ref) => sum + ref.reward, 0))}</p>
              </div>
            </div>
          </Card>
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
