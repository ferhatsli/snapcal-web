import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/site-config';

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--border-subtle)] bg-white">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-12 md:grid-cols-3 md:px-10">
        <div>
          <h2 className="text-[30px] font-extrabold tracking-[-0.8px] text-[var(--text-primary)]">
            {SITE_CONFIG.name}
          </h2>
          <p className="mt-2 max-w-xs text-[15px] leading-6 text-[var(--text-secondary)]">
            Snap your meal, understand your calories, and stay consistent with your goals.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">Product</h3>
          <ul className="mt-3 space-y-2 text-[15px] text-[var(--text-secondary)]">
            <li>
              <Link href="/" className="hover:text-[var(--text-primary)]">Home</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[var(--text-primary)]">FAQ</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">Legal</h3>
          <ul className="mt-3 space-y-2 text-[15px] text-[var(--text-secondary)]">
            <li>
              <Link href="/privacy" className="hover:text-[var(--text-primary)]">Privacy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[var(--text-primary)]">Terms</Link>
            </li>
            <li>
              <a
                href={SITE_CONFIG.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)]"
              >
                App Store
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border-subtle)] px-5 py-5 text-center text-sm text-[var(--text-secondary)] md:px-10">
        © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  );
}
