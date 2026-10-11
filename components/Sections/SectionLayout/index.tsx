import type { ReactNode } from 'react';

interface SectionLayoutProps {
  id: string;
  ariaLabelledBy: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  isSubtitleItalic?: boolean;
  children: ReactNode;
}

const SectionLayout = ({
  id,
  ariaLabelledBy,
  eyebrow,
  title,
  subtitle,
  isSubtitleItalic,
  children,
}: SectionLayoutProps) => {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className="scroll-mt-20 p-6 md:py-8 lg:px-8 lg:py-10"
    >
      <p className="text-[clamp(0.75rem,2.5vw,1.25rem)] font-bold uppercase tracking-wider text-accent md:text-[13px]">
        {eyebrow}
      </p>
      <h2
        id={ariaLabelledBy}
        className="mt-4 text-[clamp(1.25rem,7vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-foreground md:text-[clamp(1.5rem,3.5vw,2.5rem)]"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[clamp(0.875rem,2.5vw,1rem)] leading-relaxed text-text-secondary${
            isSubtitleItalic === true ? ' italic' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </section>
  );
};

export default SectionLayout;
