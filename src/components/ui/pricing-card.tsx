import { CtaButton } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import type { PricingPlan } from '@/lib/site-config';

type PricingCardProps = {
  plan: PricingPlan;
  ctaHref: string;
};

export function PricingCard({ plan, ctaHref }: PricingCardProps) {
  return (
    <article
      className={cn(
        'relative rounded-[16px] border bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)]',
        plan.featured
          ? 'border-[var(--text-primary)] bg-[var(--surface-card)]'
          : 'border-[var(--border-subtle)]'
      )}
    >
      {plan.featured ? (
        <span className="absolute right-4 top-4 rounded-full bg-[var(--text-primary)] px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      ) : null}

      <h3 className="text-[30px] font-extrabold tracking-[-0.8px] text-[var(--text-primary)]">
        {plan.label}
      </h3>
      <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">{plan.priceText}</p>
      <p className="mt-2 text-[15px] leading-6 text-[var(--text-secondary)]">{plan.description}</p>

      <ul className="mt-5 space-y-2">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-[15px] text-[var(--text-secondary)]">
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent-green)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <CtaButton
        href={ctaHref}
        external
        className={cn('mt-6 w-full', plan.featured ? 'text-white' : 'bg-[var(--text-primary)] text-white')}
      >
        Start Subscription
      </CtaButton>
    </article>
  );
}
