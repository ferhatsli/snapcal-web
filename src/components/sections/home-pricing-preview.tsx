import { PricingCard } from '@/components/ui/pricing-card';
import { PRICING_PLANS, SITE_CONFIG } from '@/lib/site-config';

export function HomePricingPreview() {
  return (
    <section className="px-5 pt-14 md:px-10 md:pt-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2 className="text-center text-[34px] font-extrabold tracking-[-0.8px] text-[var(--text-primary)] md:text-[44px]">
          Try now with a premium plan
        </h2>
        <p className="mt-3 text-center text-[17px] leading-8 text-[var(--text-secondary)]">
          Choose a plan to continue. SnapCal requires an active subscription.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} ctaHref={SITE_CONFIG.appStoreUrl} />
          ))}
        </div>

        <p className="mt-5 text-center text-[14px] text-[var(--text-secondary)]">
          No free trial. Cancel anytime from subscription settings.
        </p>
      </div>
    </section>
  );
}
