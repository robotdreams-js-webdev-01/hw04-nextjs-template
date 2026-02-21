import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: '4. házi – Játék' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
