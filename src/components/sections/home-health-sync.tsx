import Image from 'next/image';

export function HomeHealthSync() {
  return (
    <section className="px-5 pt-14 md:px-10 md:pt-20">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-8 rounded-[18px] bg-[linear-gradient(135deg,#edf2f7_0%,#dfe8f3_100%)] p-6 md:p-9 lg:grid-cols-[1fr_420px]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--accent-red)]">Advanced Tracking</p>
          <h2 className="mt-3 text-balance text-[36px] font-extrabold leading-[1.05] tracking-[-0.9px] text-[var(--text-primary)] md:text-[48px]">
            For a more advanced tracking experience
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-8 text-[var(--text-secondary)]">
            Combine meal scans, macro targets, and health data syncing in one clean interface built for daily use.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[400px] overflow-hidden rounded-[24px] border border-black/10 bg-[#111827] p-3 shadow-[0_20px_45px_rgba(2,6,23,0.28)]">
          <div className="relative h-[510px] w-full overflow-hidden rounded-[18px]">
            <Image
              src="/images/burned-calories-illustration.png"
              alt="SnapCal advanced tracking interface"
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
