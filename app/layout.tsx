import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'COWRYWISE - Professional Investment Platform',
  description: 'Build wealth with disciplined investment planning. Secure wallet management, investment plans, and portfolio visibility in one premium platform.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}