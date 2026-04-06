'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';
import type { FaqItem } from '@/lib/site-config';

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <section
            key={item.question}
            className="rounded-[14px] border border-[var(--border-subtle)] bg-white"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] focus-visible:ring-offset-2"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex((current) => (current === index ? null : index))}
            >
              <span className="text-[17px] font-semibold text-[var(--text-primary)]">{item.question}</span>
              <span
                className={cn(
                  'text-xl leading-none text-[var(--text-secondary)] transition-transform duration-200',
                  isOpen ? 'rotate-45' : ''
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-[15px] leading-7 text-[var(--text-secondary)]">
                {item.answer}
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
