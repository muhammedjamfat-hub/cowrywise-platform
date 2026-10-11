export type Role = 'user' | 'admin';
export type UserStatus = 'active' | 'suspended' | 'banned';
export type TxType = 'deposit' | 'withdrawal' | 'investment' | 'return' | 'referral_reward' | 'adjustment';
export type LedgerStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'rejected' | 'cancelled';
export type DepositStatus = 'pending' | 'approved' | 'rejected';
export type WithdrawalStatus = 'pending' | 'processing' | 'approved' | 'rejected' | 'completed';

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  role: Role;
  status: UserStatus;
  referralCode: string;
  createdAt: string;
  profileComplete: number;
  hasOnboarded: boolean;
  walletId: string;
  bankName?: string;
  accountName?: string;
  accountNumber?: string;
}

export interface Wallet {
  id: string;
  userId: string;
  balance: number;
  available: number;
  invested: number;
  pending: number;
  currency: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TxType;
  status: LedgerStatus;
  createdAt: string;
  description: string;
  reference: string;
}

export interface DepositAccount {
  id: string;
  accountName: string;
  bankName: string;
  accountNumber: string;
  accountIdentifier: string;
  instructions: string;
  active: boolean;
  primary: boolean;
  createdAt: string;
}

export interface Deposit {
  id: string;
  userId: string;
  amount: number;
  depositAccountId: string;
  paymentReference: string;
  receiptUrl?: string;
  status: DepositStatus;
  adminReviewerId?: string;
  adminNote?: string;
  createdAt: string;
  reviewedAt?: string;
  depositAccountName: string;
}

export interface Withdrawal {
  id: string;
  userId: string;
  amount: number;
  bankName: string;
  accountName: string;
  accountNumber: string;
  note?: string;
  status: WithdrawalStatus;
  createdAt: string;
  processedAt?: string;
  adminNote?: string;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  minimumAmount: number;
  maximumAmount: number;
  durationMonths: number;
  returnRate: number;
  returnType: 'fixed' | 'percent';
  status: 'active' | 'inactive';
  displayOrder: number;
  terms: string;
}

export interface Investment {
  id: string;
  userId: string;
  planId: string;
  amount: number;
  startDate: string;
  maturityDate: string;
  expectedReturn: number;
  status: 'active' | 'matured' | 'cancelled' | 'pending';
  reference: string;
}

export interface ReferralRecord {
  id: string;
  referrerId: string;
  referredUserId: string;
  referralCode: string;
  status: 'active' | 'rewarded' | 'rejected';
  reward: number;
  createdAt: string;
}

export interface NotificationItem {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'danger';
  read: boolean;
  createdAt: string;
}

export interface AuditLog {
  id: string;
  adminId: string;
  action: string;
  target: string;
  description: string;
  createdAt: string;
}

export interface AppData {
  users: User[];
  wallets: Wallet[];
  transactions: Transaction[];
  deposits: Deposit[];
  depositAccounts: DepositAccount[];
  withdrawals: Withdrawal[];
  plans: Plan[];
  investments: Investment[];
  referrals: ReferralRecord[];
  notifications: NotificationItem[];
  auditLogs: AuditLog[];
  settings: {
    referralReward: number;
    referralEnabled: boolean;
    appName: string;
  };
}

export const defaultState: AppData = {
  users: [
    {
      id: 'admin-1',
      fullName: 'Muhammed Jamfat',
      email: 'muhammedjamfat@gmail.com',
      phone: '+2348000000000',
      password: 'Muhammed003',
      role: 'admin',
      status: 'active',
      referralCode: 'COWRYADMIN',
      createdAt: '2025-01-18T10:00:00.000Z',
      profileComplete: 100,
      hasOnboarded: true,
      walletId: 'wallet-admin-1',
      bankName: 'Access Bank',
      accountName: 'Muhammed Jamfat',
      accountNumber: '0001234567',
    },
    {
      id: 'user-1',
      fullName: 'Ada Okafor',
      email: 'adaokafor@example.com',
      phone: '+2348100000001',
      password: 'Password123',
      role: 'user',
      status: 'active',
      referralCode: 'COWRYADA',
      createdAt: '2025-02-12T08:30:00.000Z',
      profileComplete: 82,
      hasOnboarded: true,
      walletId: 'wallet-user-1',
      bankName: 'UBA',
      accountName: 'Ada Okafor',
      accountNumber: '2084459012',
    },
    {
      id: 'user-2',
      fullName: 'Chinedu Eze',
      email: 'chinedu@example.com',
      phone: '+2348150000002',
      password: 'Password123',
      role: 'user',
      status: 'active',
      referralCode: 'COWRYCHI',
      createdAt: '2025-03-05T09:15:00.000Z',
      profileComplete: 76,
      hasOnboarded: true,
      walletId: 'wallet-user-2',
      bankName: 'Zenith Bank',
      accountName: 'Chinedu Eze',
      accountNumber: '1012345678',
    },
  ],
  wallets: [
    {
      id: 'wallet-admin-1',
      userId: 'admin-1',
      balance: 1450000,
      available: 1385000,
      invested: 65000,
      pending: 15000,
      currency: 'NGN',
      updatedAt: '2026-10-11T08:00:00.000Z',
    },
    {
      id: 'wallet-user-1',
      userId: 'user-1',
      balance: 584900,
      available: 468900,
      invested: 110000,
      pending: 6000,
      currency: 'NGN',
      updatedAt: '2026-10-11T08:00:00.000Z',
    },
    {
      id: 'wallet-user-2',
      userId: 'user-2',
      balance: 330000,
      available: 240000,
      invested: 80000,
      pending: 10000,
      currency: 'NGN',
      updatedAt: '2026-10-11T08:00:00.000Z',
    },
  ],
  transactions: [
    {
      id: 'tx-001',
      userId: 'user-1',
      amount: 300000,
      type: 'deposit',
      status: 'completed',
      createdAt: '2026-09-03T13:30:00.000Z',
      description: 'Direct deposit via bank transfer',
      reference: 'DW-300000-1',
    },
    {
      id: 'tx-002',
      userId: 'user-1',
      amount: 150000,
      type: 'investment',
      status: 'completed',
      createdAt: '2026-09-09T10:00:00.000Z',
      description: 'Prime Growth Investment',
      reference: 'INV-150000-1',
    },
    {
      id: 'tx-003',
      userId: 'user-1',
      amount: 8000,
      type: 'return',
      status: 'completed',
      createdAt: '2026-10-02T09:00:00.000Z',
      description: 'Monthly investment return',
      reference: 'RET-8000-1',
    },
    {
      id: 'tx-004',
      userId: 'user-2',
      amount: 120000,
      type: 'deposit',
      status: 'completed',
      createdAt: '2026-09-12T15:15:00.000Z',
      description: 'Top-up deposit',
      reference: 'DW-120000-4',
    },
    {
      id: 'tx-005',
      userId: 'user-1',
      amount: 25000,
      type: 'referral_reward',
      status: 'completed',
      createdAt: '2026-09-25T14:56:00.000Z',
      description: 'Referral reward for Ada',
      reference: 'REF-25000-1',
    },
  ],
  deposits: [
    {
      id: 'dep-001',
      userId: 'user-1',
      amount: 300000,
      depositAccountId: 'acc-01',
      paymentReference: 'TXN20260903-1',
      receiptUrl: '/receipts/receipt-1.png',
      status: 'approved',
      adminReviewerId: 'admin-1',
      adminNote: 'Confirmed with bank transfer reference.',
      createdAt: '2026-09-03T13:00:00.000Z',
      reviewedAt: '2026-09-03T18:25:00.000Z',
      depositAccountName: 'Cowrywise Cash',
    },
    {
      id: 'dep-002',
      userId: 'user-2',
      amount: 120000,
      depositAccountId: 'acc-02',
      paymentReference: 'TXN20260912-4',
      receiptUrl: '/receipts/receipt-2.png',
      status: 'pending',
      createdAt: '2026-09-12T14:42:00.000Z',
      depositAccountName: 'UBA Wallet',
    },
  ],
  depositAccounts: [
    {
      id: 'acc-01',
      accountName: 'Cowrywise Cash',
      bankName: 'Access Bank',
      accountNumber: '0093456789',
      accountIdentifier: 'NGN-ACCESS-CW',
      instructions: 'Transfer directly into the Cowrywise cash account. Include the payment reference in the narration.',
      active: true,
      primary: true,
      createdAt: '2025-01-20T10:00:00.000Z',
    },
    {
      id: 'acc-02',
      accountName: 'Cowrywise Treasury',
      bankName: 'GTBank',
      accountNumber: '0127394568',
      accountIdentifier: 'NGN-GTB-CW',
      instructions: 'Use the payment reference and upload the transfer receipt for faster verification.',
      active: true,
      primary: false,
      createdAt: '2025-02-15T10:00:00.000Z',
    },
  ],
  withdrawals: [
    {
      id: 'wd-001',
      userId: 'user-1',
      amount: 25000,
      bankName: 'Access Bank',
      accountName: 'Ada Okafor',
      accountNumber: '2051112233',
      note: 'Business withdrawal',
      status: 'completed',
      createdAt: '2026-09-18T12:00:00.000Z',
      processedAt: '2026-09-18T18:15:00.000Z',
      adminNote: 'Withdrawn to destination bank account.',
    },
    {
      id: 'wd-002',
      userId: 'user-2',
      amount: 60000,
      bankName: 'UBA',
      accountName: 'Chinedu Eze',
      accountNumber: '2233445566',
      note: 'Emergency withdrawal',
      status: 'pending',
      createdAt: '2026-10-10T09:00:00.000Z',
    },
  ],
  plans: [
    {
      id: 'plan-01',
      name: 'Prime Growth',
      description: 'A short-to-medium term plan designed for steady capital growth.',
      minimumAmount: 50000,
      maximumAmount: 2000000,
      durationMonths: 6,
      returnRate: 12,
      returnType: 'percent',
      status: 'active',
      displayOrder: 1,
      terms: 'Projected return is a simulated value for educational planning. Actual returns are not guaranteed.',
    },
    {
      id: 'plan-02',
      name: 'Wealth Builder',
      description: 'Balanced investment designed for medium-term portfolio appreciation.',
      minimumAmount: 100000,
      maximumAmount: 5000000,
      durationMonths: 12,
      returnRate: 18,
      returnType: 'percent',
      status: 'active',
      displayOrder: 2,
      terms: 'Capital is kept in simulated investment flow. This platform is not a regulated financial institution.',
    },
  ],
  investments: [
    {
      id: 'inv-001',
      userId: 'user-1',
      planId: 'plan-01',
      amount: 150000,
      startDate: '2026-09-10T00:00:00.000Z',
      maturityDate: '2027-03-10T00:00:00.000Z',
      expectedReturn: 18000,
      status: 'active',
      reference: 'COWRYINV-150000-1',
    },
    {
      id: 'inv-002',
      userId: 'user-2',
      planId: 'plan-02',
      amount: 85000,
      startDate: '2026-08-15T00:00:00.000Z',
      maturityDate: '2027-08-15T00:00:00.000Z',
      expectedReturn: 15300,
      status: 'active',
      reference: 'COWRYINV-85000-2',
    },
  ],
  referrals: [
    {
      id: 'ref-001',
      referrerId: 'user-1',
      referredUserId: 'user-2',
      referralCode: 'COWRYADA',
      status: 'rewarded',
      reward: 25000,
      createdAt: '2026-09-15T08:10:00.000Z',
    },
  ],
  notifications: [
    {
      id: 'not-001',
      userId: 'user-1',
      title: 'Deposit approved',
      message: 'Your deposit of NGN 300,000 was approved and credited to your wallet.',
      type: 'success',
      read: false,
      createdAt: '2026-09-03T18:30:00.000Z',
    },
    {
      id: 'not-002',
      userId: 'user-1',
      title: 'Investment update',
      message: 'Your Prime Growth investment remains active and is progressing according to plan.',
      type: 'info',
      read: false,
      createdAt: '2026-09-20T07:00:00.000Z',
    },
    {
      id: 'not-003',
      userId: 'user-2',
      title: 'Withdrawal request received',
      message: 'Your withdrawal request has been received and is awaiting admin review.',
      type: 'warning',
      read: false,
      createdAt: '2026-10-10T09:05:00.000Z',
    },
  ],
  auditLogs: [
    {
      id: 'audit-001',
      adminId: 'admin-1',
      action: 'Deposit approved',
      target: 'user-1',
      description: 'Approved deposit request for NGN 300,000',
      createdAt: '2026-09-03T18:25:00.000Z',
    },
    {
      id: 'audit-002',
      adminId: 'admin-1',
      action: 'Plan updated',
      target: 'plan-01',
      description: 'Updated return rate to 12% and adjusted duration for Prime Growth.',
      createdAt: '2026-09-22T11:00:00.000Z',
    },
  ],
  settings: {
    referralReward: 25000,
    referralEnabled: true,
    appName: 'COWRYWISE',
  },
};

export const storageKey = 'cowrywise-platform-db';

export function getStoredData(): AppData {
  if (typeof window === 'undefined') return defaultState;
  const raw = window.localStorage.getItem(storageKey);
  if (!raw) {
    window.localStorage.setItem(storageKey, JSON.stringify(defaultState));
    return defaultState;
  }

  try {
    const parsed = JSON.parse(raw) as AppData;
    return parsed;
  } catch {
    window.localStorage.setItem(storageKey, JSON.stringify(defaultState));
    return defaultState;
  }
}

export function saveStoredData(data: AppData) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(storageKey, JSON.stringify(data));
}

export function getCurrentUser() {
  if (typeof window === 'undefined') return null;
  const user = window.localStorage.getItem('cowrywise-user');
  if (!user) return null;
  try {
    return JSON.parse(user);
  } catch {
    return null;
  }
}

export function setCurrentUser(user: User | null) {
  if (typeof window === 'undefined') return;
  if (!user) {
    window.localStorage.removeItem('cowrywise-user');
    return;
  }
  window.localStorage.setItem('cowrywise-user', JSON.stringify(user));
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function formatDateTime(date: string) {
  return new Date(date).toLocaleString('en-NG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getUserById(data: AppData, userId: string) {
  return data.users.find((user) => user.id === userId) || null;
}

export function getWalletByUserId(data: AppData, userId: string) {
  return data.wallets.find((wallet) => wallet.userId === userId) || null;
}

export function getUserNotifications(data: AppData, userId: string) {
  return data.notifications.filter((n) => n.userId === userId).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function createTransactionRecord({
  userId,
  amount,
  type,
  status,
  description,
  reference,
}: {
  userId: string;
  amount: number;
  type: TxType;
  status: LedgerStatus;
  description: string;
  reference: string;
}) {
  return {
    id: `tx-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    userId,
    amount,
    type,
    status,
    createdAt: new Date().toISOString(),
    description,
    reference,
  } satisfies Transaction;
}

export function generateReferralCode(name: string) {
  const base = name
    .replace(/[^a-zA-Z]/g, '')
    .slice(0, 6)
    .toUpperCase();
  return `COWRY${base || 'USER'}${Math.floor(Math.random() * 90 + 10)}`;
}

export function calculateProjectedReturn(plan: Plan, amount: number) {
  return Number(((amount * plan.returnRate) / 100).toFixed(2));
}

export function getPlanById(data: AppData, planId: string) {
  return data.plans.find((plan) => plan.id === planId) || null;
}

export function generateTransactionReference(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export function isAuthenticated() {
  if (typeof window === 'undefined') return false;
  return Boolean(window.localStorage.getItem('cowrywise-user'));
}

export function getRoleFromStorage() {
  const user = getCurrentUser();
  return user?.role || 'user';
}

export function formatStatus(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function isAdminUser(user: { role?: string } | null) {
  return user?.role === 'admin';
}

export function getSummaryCards(data: AppData) {
  const totalUsers = data.users.filter((u) => u.role === 'user').length;
  const activeUsers = data.users.filter((u) => u.role === 'user' && u.status === 'active').length;
  const totalDeposits = data.deposits.filter((d) => d.status === 'approved').reduce((sum, d) => sum + d.amount, 0);
  const pendingDeposits = data.deposits.filter((d) => d.status === 'pending').length;
  const totalWithdrawals = data.withdrawals.filter((w) => w.status === 'completed' || w.status === 'approved').reduce((sum, w) => sum + w.amount, 0);
  const pendingWithdrawals = data.withdrawals.filter((w) => w.status === 'pending' || w.status === 'processing').length;
  const totalInvested = data.investments.filter((i) => i.status === 'active').reduce((sum, i) => sum + i.amount, 0);
  const activeInvestments = data.investments.filter((i) => i.status === 'active').length;
  const referralActivity = data.referrals.length;

  return {
    totalUsers,
    activeUsers,
    totalDeposits,
    pendingDeposits,
    totalWithdrawals,
    pendingWithdrawals,
    totalInvested,
    activeInvestments,
    referralActivity,
  };
}

export function getProtectedPageStyles() {
  return {
    page: 'min-h-screen bg-slate-50 text-slate-900',
    shell: 'mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8',
  };
}

export function getUserWalletSummary(userId: string, data: AppData) {
  const wallet = getWalletByUserId(data, userId);
  return {
    totalBalance: wallet?.balance ?? 0,
    availableBalance: wallet?.available ?? 0,
    investedBalance: wallet?.invested ?? 0,
    pendingBalance: wallet?.pending ?? 0,
  };
}

export function getUserInvestmentSummary(userId: string, data: AppData) {
  const items = data.investments.filter((investment) => investment.userId === userId);
  const totalInvested = items.reduce((sum, item) => sum + item.amount, 0);
  const expectedReturns = items.reduce((sum, item) => sum + item.expectedReturn, 0);
  return {
    items,
    totalInvested,
    expectedReturns,
    nextMaturity: items[0]?.maturityDate || new Date().toISOString(),
  };
}

export function getRecentTransactions(data: AppData, userId?: string) {
  const items = userId ? data.transactions.filter((tx) => tx.userId === userId) : data.transactions;
  return [...items].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 6);
}

export function getAllTransactionTypes() {
  return ['deposit', 'withdrawal', 'investment', 'return', 'referral_reward', 'adjustment'];
}

export function todayLabel() {
  return new Date().toLocaleDateString('en-NG', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
