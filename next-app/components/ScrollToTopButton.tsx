'use client';

interface Props {
  className?: string;
  children: React.ReactNode;
}

/** Scrolls back to the valuation form in the hero. Lets the surrounding page stay a Server Component. */
export default function ScrollToTopButton({ className, children }: Props) {
  return (
    <button type="button" className={className} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      {children}
    </button>
  );
}
