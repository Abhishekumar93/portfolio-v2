import type { ReactNode } from 'react';

interface ProfessionalCaseStudyCardProps {
  featuredTitle: string;
  featuredContent: ReactNode;
  featuredHeading: string;
  detailsContent: ReactNode;
  detailsHeading: string;
}

const ProfessionalCaseStudyCard = ({
  featuredTitle,
  featuredContent,
  featuredHeading,
  detailsContent,
  detailsHeading,
}: ProfessionalCaseStudyCardProps) => {
  return (
    <article className="grid grid-cols-12 gap-y-6 rounded-3xl border border-border bg-surface p-2 md:p-4 md:gap-x-6 lg:gap-8">
      <div className="col-span-12 rounded-2xl bg-case-study-panel p-3 md:p-4 md:col-span-5">
        <p className="text-[clamp(0.75rem,2.5vw,1.25rem)] md:text-[clamp(0.75rem,1.75vw,0.875rem)] font-bold uppercase tracking-wider text-accent">
          {featuredTitle}
        </p>
        <h3
          id="sony-liv-case-study-heading"
          className="mt-4 wrap-break-word text-[clamp(1.25rem,4.15vw,1.5rem)] font-bold leading-tight tracking-tight text-foreground md:text-[26px] lg:text-[30px]"
        >
          Sony LIV Bolt
        </h3>
        <p className="mt-4 text-[clamp(1rem,3.75vw,1.15rem)] md:text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed text-text-secondary">
          {featuredHeading}
        </p>
        {featuredContent}
      </div>

      <div className="col-span-12 md:col-span-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[clamp(0.75rem,2.5vw,1.25rem)] md:text-[clamp(0.75rem,1.75vw,0.875rem)] font-bold uppercase tracking-wider text-text-secondary">
            Professional Work / {detailsHeading}
          </p>
          <span className="rounded-full border-2 border-nda-text bg-nda-bg px-3 py-2 text-[clamp(0.5rem,2vw,0.875rem)] md:text-[clamp(0.625rem,1.25vw,0.875rem)] lg:text-xs font-bold leading-normal tracking-wide text-nda-text">
            NDA PROTECTED
          </span>
        </div>
        {detailsContent}
      </div>
    </article>
  );
};

export default ProfessionalCaseStudyCard;
