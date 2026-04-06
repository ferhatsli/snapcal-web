const WHY_ITEMS = [
  {
    icon: '⚡',
    title: 'Speed first',
    body: 'Log a meal in seconds instead of manually entering every item.',
  },
  {
    icon: '🎯',
    title: 'Goal-oriented',
    body: 'See calorie and macro progress against targets in a clear daily view.',
  },
  {
    icon: '📈',
    title: 'Consistency engine',
    body: 'Build sustainable habits with repeatable routines and less decision fatigue.',
  },
] as const;

export function HomeResults() {
  return (
    <section className="px-5 pt-14 md:px-10 md:pt-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2 className="text-center text-[34px] font-extrabold tracking-[-0.8px] text-[var(--text-primary)] md:text-[46px]">
          Why choose SnapCal?
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {WHY_ITEMS.map((item) => (
            <article key={item.title} className="rounded-[14px] border border-[var(--border-subtle)] bg-white p-6">
              <p className="text-[24px]">{item.icon}</p>
              <h3 className="mt-3 text-[22px] font-bold tracking-[-0.4px] text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-[var(--text-secondary)]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
