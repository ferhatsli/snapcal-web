import type { Metadata } from 'next';

import { FaqAccordion } from '@/components/ui/faq-accordion';
import { FAQ_ITEMS, SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about SnapCal usage and product behavior.',
};

export default function FaqPage() {
  return (
    <div className="px-5 pb-8 pt-14 md:px-10 md:pt-20">
      <div className="mx-auto w-full max-w-[920px]">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--accent-blue)]">Support</p>
        <h1 className="mt-3 text-balance text-[46px] font-extrabold tracking-[-1px] text-[var(--text-primary)] md:text-[56px]">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-[18px] leading-8 text-[var(--text-secondary)]">
          Everything you need to know about SnapCal plans, app behavior, and data handling.
        </p>

        <div className="mt-10">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>

        <div className="mt-10 rounded-[14px] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5">
          <p className="text-[15px] leading-7 text-[var(--text-secondary)]">
            Need help with an issue not listed here? Reach us at{' '}
            <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="font-semibold text-[var(--text-primary)] underline">
              {SITE_CONFIG.supportEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
