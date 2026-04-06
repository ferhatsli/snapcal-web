'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { CtaButton } from '@/components/ui/button';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/site-config';
import { cn } from '@/lib/cn';

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === '/';

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-[var(--border-subtle)]/80 backdrop-blur-xl',
        isHome ? 'bg-[#f7f8ef]/90' : 'bg-white/90'
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 md:h-[72px] md:px-10">
        <Link
          href="/"
          className="text-[30px] font-extrabold tracking-[-0.8px] text-[var(--text-primary)]"
          onClick={() => setMenuOpen(false)}
        >
          {SITE_CONFIG.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-[15px] font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]',
                pathname === item.href ? 'text-[var(--text-primary)]' : ''
              )}
            >
              {item.label}
            </Link>
          ))}
          <CtaButton href={SITE_CONFIG.appStoreUrl} external className="h-11 px-5 text-[15px]">
            Get Started
          </CtaButton>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--text-primary)] md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="text-lg">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-[var(--border-subtle)] bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-[16px] font-medium text-[var(--text-secondary)] hover:bg-[var(--surface)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <CtaButton href={SITE_CONFIG.appStoreUrl} external className="mt-1 w-full">
              Get Started
            </CtaButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
