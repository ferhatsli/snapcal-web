import { HomeFinalCta } from '@/components/sections/home-final-cta';
import { HomeHealthSync } from '@/components/sections/home-health-sync';
import { HomeHero } from '@/components/sections/home-hero';
import { HomeHowItWorks } from '@/components/sections/home-how-it-works';
import { HomeRatingStrip } from '@/components/sections/home-rating-strip';
import { HomeResults } from '@/components/sections/home-results';
import { HomeSocialProof } from '@/components/sections/home-social-proof';
import { HomeTrustStrip } from '@/components/sections/home-trust-strip';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTrustStrip />
      <HomeHowItWorks />
      <HomeResults />
      <HomeHealthSync />
      <HomeSocialProof />
      <HomeRatingStrip />
      <HomeFinalCta />
    </>
  );
}
