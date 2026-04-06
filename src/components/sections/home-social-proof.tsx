const REVIEWS = [
  {
    name: 'Ali K.',
    title: 'Fitness Coach',
    body: 'SnapCal became my daily default. Fast scanning plus macro targets keeps clients consistent.',
  },
  {
    name: 'Mia S.',
    title: 'Runner',
    body: 'I finally track without friction. The app is quick, clear, and easy to trust every day.',
  },
  {
    name: 'Efe D.',
    title: 'Strength Athlete',
    body: 'The clean flow and progress feedback made sticking to my nutrition plan much easier.',
  },
  {
    name: 'Noa T.',
    title: 'Creator',
    body: 'Best UX I used in this category. Minimal interface, useful insights, no clutter.',
  },
] as const;

export function HomeSocialProof() {
  return (
    <section className="mt-14 bg-[#1d1b27] px-5 py-14 text-white md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2 className="text-center text-[34px] font-extrabold tracking-[-0.8px] md:text-[44px]">
          Thousands of users talk about us
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {REVIEWS.map((review) => (
            <article key={review.name} className="rounded-[14px] border border-white/15 bg-white/5 p-5">
              <p className="text-[15px] leading-7 text-white/85">{review.body}</p>
              <div className="mt-4 border-t border-white/15 pt-3">
                <p className="text-[15px] font-semibold">{review.name}</p>
                <p className="text-xs uppercase tracking-[0.08em] text-white/65">{review.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
