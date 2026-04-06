import Image from 'next/image';

import { CtaButton } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/site-config';

export function HomeHero() {
  return (
    <section className="bg-[#f7f8ef] px-5 pb-14 pt-10 md:px-10 md:pb-20 md:pt-14">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_560px] lg:gap-14">
        <div>
          <p className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-secondary)]">
            iOS AI Calorie Camera
          </p>

          <h1 className="mt-4 text-balance text-[44px] font-extrabold leading-[1.02] tracking-[-1.2px] text-[var(--text-primary)] md:text-[72px] md:tracking-[-1.8px]">
            Meet SnapCal
            <br />
            Track your calories
            <br />
            with just a picture
          </h1>

          <p className="mt-5 max-w-xl text-[18px] leading-8 text-[var(--text-secondary)] md:text-[20px]">
            Take a meal photo, get instant calorie and macro insights, and stay aligned with your daily goals.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton href={SITE_CONFIG.appStoreUrl} external className="sm:min-w-[180px]">
              Get Started
            </CtaButton>
            <CtaButton href="/pricing" variant="outline" className="sm:min-w-[180px]">
              See Pricing
            </CtaButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] overflow-hidden">
          <div className="relative mx-auto h-[360px] w-[300px] sm:h-[470px] sm:w-[390px] md:flex md:h-auto md:w-auto md:items-center md:justify-center md:gap-6">
            <div className="absolute left-[16px] top-[46px] h-[280px] w-[132px] -rotate-[10deg] overflow-hidden rounded-[20px] border-[6px] border-[#171717] bg-black shadow-[0_14px_34px_rgba(15,23,42,0.28)] sm:left-[22px] sm:top-[56px] sm:h-[360px] sm:w-[170px] sm:rounded-[24px] sm:border-[7px] md:static md:h-[580px] md:w-[260px] md:-rotate-8 md:rounded-[30px] md:border-[8px] md:shadow-[0_20px_50px_rgba(15,23,42,0.28)]">
              <Image
                src="/images/hero-camera-crop.png"
                alt="SnapCal camera interface"
                fill
                sizes="(max-width: 640px) 132px, (max-width: 768px) 170px, 260px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute right-[14px] top-[24px] z-10 h-[300px] w-[142px] rotate-[8deg] overflow-hidden rounded-[20px] border-[6px] border-[#171717] bg-black shadow-[0_14px_34px_rgba(15,23,42,0.28)] sm:right-[22px] sm:top-[28px] sm:h-[390px] sm:w-[182px] sm:rounded-[24px] sm:border-[7px] md:relative md:top-auto md:right-auto md:h-[610px] md:w-[280px] md:rotate-6 md:rounded-[30px] md:border-[8px] md:shadow-[0_20px_50px_rgba(15,23,42,0.28)]">
              <Image
                src="/images/hero-preview.png"
                alt="SnapCal progress interface"
                fill
                sizes="(max-width: 640px) 142px, (max-width: 768px) 182px, 280px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
