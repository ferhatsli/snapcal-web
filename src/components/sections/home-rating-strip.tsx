const RATINGS = [
  { label: 'Average app rating', value: '4.8 / 5' },
  { label: 'Total ratings', value: '100K+' },
  { label: 'Active users', value: '10M+' },
] as const;

export function HomeRatingStrip() {
  return (
    <section className="px-5 pt-14 md:px-10 md:pt-20">
      <div className="mx-auto w-full max-w-[1200px] rounded-[16px] border border-[var(--border-subtle)] bg-white px-6 py-7 text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)]">Over 100K+ star ratings</p>
        <p className="mt-2 text-[24px] tracking-[0.22em] text-[var(--star)]">★★★★★</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {RATINGS.map((stat) => (
            <div key={stat.label} className="rounded-[12px] bg-[var(--surface)] px-4 py-4">
              <p className="text-[13px] uppercase tracking-[0.08em] text-[var(--text-secondary)]">{stat.label}</p>
              <p className="mt-1 text-[26px] font-bold tracking-[-0.5px] text-[var(--text-primary)]">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
