import Image from 'next/image';

const INFLUENCERS = [
  { name: 'Alex R.', niche: 'Body Recomp', image: '/images/influencer-alex-body-recomp.png' },
  { name: 'Lina V.', niche: 'Fitness Coach', image: '/images/influencer-lina-fitness-coach.png' },
  { name: 'Marco T.', niche: 'Strength', image: '/images/influencer-marco-strength.png' },
  { name: 'Nina K.', niche: 'Wellness', image: '/images/influencer-nina-wellness.png' },
  { name: 'Jay M.', niche: 'Lifestyle', image: '/images/influencer-jay-lifestyle.png' },
  { name: 'Sam P.', niche: 'Nutrition', image: '/images/influencer-sam-nutrition.png' },
] as const;

export function HomeTrustStrip() {
  return (
    <section className="bg-[#f7f8ef] px-5 pb-14 md:px-10 md:pb-18">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2 className="text-center text-[30px] font-bold tracking-[-0.6px] text-[var(--text-primary)] md:text-[40px] md:tracking-[-0.9px]">
          Used by your favorite fitness influencers
          <span className="ml-2">👀</span>
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INFLUENCERS.map((person) => (
            <article
              key={person.name}
              className="group relative overflow-hidden rounded-[18px] border border-black/10 bg-black/90"
            >
              <div className="relative h-[210px]">
                <Image src={person.image} alt={person.name} fill className="object-cover opacity-80 transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-[18px] font-semibold tracking-[-0.2px]">{person.name}</p>
                <p className="text-[13px] text-white/80">{person.niche}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
