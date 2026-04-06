import Link from 'next/link';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

type CtaButtonProps = {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  variant?: ButtonVariant;
};

function getVariantClasses(variant: ButtonVariant) {
  switch (variant) {
    case 'outline':
      return 'border border-[var(--border-subtle)] bg-white text-[var(--text-primary)] hover:bg-[var(--surface)]';
    case 'ghost':
      return 'bg-transparent text-[var(--text-primary)] hover:bg-[var(--surface)]';
    case 'primary':
    default:
      return 'bg-[var(--cta-bg)] text-white hover:opacity-90';
  }
}

export function CtaButton({
  children,
  href,
  external,
  className,
  variant = 'primary',
}: CtaButtonProps) {
  const classes = cn(
    'inline-flex h-14 items-center justify-center rounded-[28px] px-6 text-[17px] font-semibold tracking-[0.2px] transition-all duration-200',
    getVariantClasses(variant),
    className
  );

  if (!href) {
    return <button className={classes}>{children}</button>;
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
