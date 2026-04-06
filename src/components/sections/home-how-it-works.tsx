import Image from 'next/image';

const INCLUDE_ITEMS = [
  {
    title: 'AI calorie tracking',
    body: 'SnapCal detects meal composition and estimates calories with practical day-to-day accuracy.',
  },
  {
    title: 'Personalized macro plan',
    body: 'Daily calorie, protein, carb, and fat targets are adapted to your profile and routine.',
  },
  {
    title: 'Fast and minimal UX',
    body: 'Designed to reduce logging friction so tracking becomes repeatable and sustainable.',
  },
] as const;

export function HomeHowItWorks() {
  return (
    <section id="features" className="px-5 pt-14 md:px-10 md:pt-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2 className="text-center text-[36px] font-extrabold tracking-[-0.9px] text-[var(--text-primary)] md:text-[48px] md:tracking-[-1.2px]">
          What does SnapCal include?
        </h2>

        <div className="mt-10 grid items-center gap-7 lg:grid-cols-[300px_1fr]">
          <div className="mx-auto w-[280px] overflow-hidden rounded-[28px] border-[8px] border-[#1f2937] bg-black shadow-[0_14px_35px_rgba(15,23,42,0.2)]">
            <div className="relative h-[560px] w-full">
              <Image
                src="/images/hero-preview.png"
                alt="SnapCal app screen"
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            {INCLUDE_ITEMS.map((item) => (
              <article key={item.title} className="rounded-[14px] border border-[var(--border-subtle)] bg-white p-5">
                <h3 className="text-[22px] font-bold tracking-[-0.4px] text-[var(--text-primary)]">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-[var(--text-secondary)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
