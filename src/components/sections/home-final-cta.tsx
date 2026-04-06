import { CtaButton } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/site-config';

export function HomeFinalCta() {
  return (
    <section className="px-5 pb-8 pt-14 md:px-10 md:pt-20">
      <div className="mx-auto w-full max-w-[1200px] rounded-[20px] bg-[#111827] px-7 py-10 text-white md:px-10 md:py-12">
        <h2 className="text-balance text-[34px] font-extrabold tracking-[-0.9px] md:text-[46px]">
          Start your SnapCal journey today
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-8 text-white/80">
          Install the app, snap your first meal, and build consistent nutrition habits with less effort.
        </p>
        <div className="mt-8">
          <CtaButton
            href={SITE_CONFIG.appStoreUrl}
            external
            className="min-w-[220px] border border-white/15 bg-white text-[#111827] hover:bg-white/90"
          >
            Download on App Store
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
