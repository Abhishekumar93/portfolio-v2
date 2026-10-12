import ProfessionalCaseStudyCard from './ProfessionalCaseStudyCard';

const caseStudyData = [
  {
    title: 'The Problem',
    description: 'Repeated form work slowed delivery across product workflows.',
  },
  {
    title: 'My Contribution',
    description:
      'Architected a reusable schema-driven system in React and TypeScript.',
  },
  {
    title: 'Trade-offs',
    description:
      'Mixed forms with standard & image fields require custom handling.',
  },
];
const SchemaDrivenCaseStudy = () => {
  const displayCaseStudyData = () => {
    return caseStudyData.map((item) => (
      <div key={item.title.toLowerCase().replaceAll(/\s+/g, '-')}>
        <h4 className="text-[clamp(0.75rem,2.5vw,1.25rem)] md:text-[clamp(0.75rem,1.75vw,0.875rem)] font-bold uppercase tracking-wider text-accent">
          {item.title}
        </h4>
        <p className="mt-2 lg:mt-4 text-[clamp(0.75rem,3.25vw,1rem)] md:text-[clamp(0.75rem,1.35vw,1rem)] leading-relaxed text-text-secondary">
          {item.description}
        </p>
      </div>
    ));
  };

  return (
    <ProfessionalCaseStudyCard
      featuredTitle="Featured Case Study"
      featuredContent={
        <>
          <p className="mt-4 text-[clamp(3rem,6.75vw,4.5rem)] md:text-[clamp(2rem,5vw,3rem)] font-bold leading-none tracking-tight text-accent">
            90%
          </p>
          <p className="mt-4 text-[clamp(0.875rem,4vw,1rem)] leading-normal text-foreground">
            less feature-development time
          </p>
          <p className="mt-4 md:mt-6 lg:mt-8 border-t border-border pt-6 text-[clamp(1rem,4vw,1.15rem)] font-semibold leading-normal text-foreground">
            Schema-driven form architecture
          </p>
          <ul
            aria-label="Technologies"
            className="mt-4 md:mt-6 lg:mt-8 flex flex-wrap gap-2"
          >
            {['React', 'TypeScript', 'Reusable UI'].map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-border bg-surface px-4 py-2 text-[clamp(0.625rem,3.5vw,0.75rem)] font-semibold leading-normal text-accent"
              >
                {technology}
              </li>
            ))}
          </ul>
        </>
      }
      featuredHeading="Schema-driven form architecture for complex product workflows."
      detailsContent={
        <>
          <h3
            id="schema-driven-case-study-heading"
            className="mt-4 wrap-break-word text-[clamp(1.25rem,4.15vw,1.5rem)] font-bold leading-tight tracking-tight text-foreground md:text-[26px] lg:text-[30px]"
          >
            Schema-Driven Form System
          </h3>
          <p className="mt-4 text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed text-text-secondary">
            Senior Software Engineer · Kellton · 2022–2024
          </p>
          <div className="mt-6 grid gap-8 border-t border-border pt-6 lg:grid-cols-3">
            {displayCaseStudyData()}
          </div>
          <div className="mt-8 border-t border-border pt-6">
            <h4 className="text-[clamp(0.75rem,2.5vw,1.25rem)] md:text-[clamp(0.75rem,1.75vw,0.875rem)] font-bold uppercase tracking-wider text-accent">
              Outcome
            </h4>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-[clamp(0.75rem,3.25vw,1rem)] md:text-[clamp(0.75rem,1.35vw,1rem)] leading-normal text-foreground marker:text-accent md:text-lg">
              <li>90% less feature-development time</li>
              <li>Faster delivery of new form features</li>
              <li>Reusable architecture across form workflows</li>
            </ul>
          </div>
        </>
      }
      detailsHeading="Architecture"
    />
  );
};

export default SchemaDrivenCaseStudy;
