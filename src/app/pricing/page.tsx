import type { Metadata } from 'next';

import { FaqAccordion } from '@/components/ui/faq-accordion';
import { PricingCard } from '@/components/ui/pricing-card';
import { FAQ_ITEMS, PRICING_PLANS, SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Choose the SnapCal plan that fits your goals.',
};

const COMPARISON_ROWS = [
  { label: 'AI meal scan', weekly: 'Included', yearly: 'Included' },
  { label: 'Macro tracking', weekly: 'Included', yearly: 'Included' },
  { label: 'Daily progress insights', weekly: 'Included', yearly: 'Included' },
  { label: 'Apple Health sync', weekly: 'Included', yearly: 'Included' },
  { label: 'Effective value', weekly: 'Standard', yearly: 'Best Value' },
] as const;

export default function PricingPage() {
  return (
    <div className="px-5 pb-8 pt-14 md:px-10 md:pt-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--accent-blue)]">Pricing</p>
        <h1 className="mt-3 text-balance text-[46px] font-extrabold tracking-[-1px] text-[var(--text-primary)] md:text-[60px] md:tracking-[-1.2px]">
          Unlock SnapCal Premium
        </h1>
        <p className="mt-4 max-w-3xl text-[18px] leading-8 text-[var(--text-secondary)]">
          Choose a plan to continue. SnapCal requires an active subscription and keeps pricing simple.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} ctaHref={SITE_CONFIG.appStoreUrl} />
          ))}
        </div>

        <p className="mt-5 text-center text-[14px] text-[var(--text-secondary)]">
          No free trial. Cancel anytime from subscription settings.
        </p>

        <section className="mt-14 overflow-hidden rounded-[16px] border border-[var(--border-subtle)]">
          <h2 className="border-b border-[var(--border-subtle)] bg-[var(--surface-card)] px-5 py-4 text-[22px] font-bold tracking-[-0.5px] text-[var(--text-primary)]">
            Feature comparison
          </h2>

          <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-[var(--border-subtle)] bg-white px-5 py-3 text-sm font-semibold text-[var(--text-secondary)]">
            <span>Feature</span>
            <span>Weekly</span>
            <span>Yearly</span>
          </div>

          <div className="bg-white">
            {COMPARISON_ROWS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-[var(--border-subtle)] px-5 py-3 text-[15px] text-[var(--text-secondary)] last:border-b-0"
              >
                <span className="text-[var(--text-primary)]">{row.label}</span>
                <span>{row.weekly}</span>
                <span>{row.yearly}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="mb-5 text-[34px] font-extrabold tracking-[-0.8px] text-[var(--text-primary)]">Pricing FAQ</h2>
          <FaqAccordion items={FAQ_ITEMS.slice(0, 4)} />
        </section>
      </div>
    </div>
  );
}
