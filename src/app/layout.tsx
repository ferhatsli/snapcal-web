import type { Metadata } from 'next';
import './globals.css';

import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  metadataBase: new URL('https://snapcal.app'),
  title: {
    default: 'SnapCal - AI Calorie Camera',
    template: '%s | SnapCal',
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: 'SnapCal - AI Calorie Camera',
    description: SITE_CONFIG.description,
    url: 'https://snapcal.app',
    siteName: 'SnapCal',
    images: [
      {
        url: '/images/hero-preview.png',
        width: 1284,
        height: 2778,
        alt: 'SnapCal app preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SnapCal - AI Calorie Camera',
    description: SITE_CONFIG.description,
    images: ['/images/hero-preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
