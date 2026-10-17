import ProfessionalCaseStudyCard from './ProfessionalCaseStudyCard';

const headingClassName =
  'text-[clamp(0.75rem,2.5vw,1.25rem)] md:text-[clamp(0.75rem,1.75vw,0.875rem)] font-bold uppercase tracking-wider text-accent';

const SchemaDrivenCaseStudy = () => {
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
          <p className="mt-4 border-t border-border pt-6 text-[clamp(1rem,4vw,1.15rem)] font-semibold leading-normal text-foreground md:mt-6 lg:mt-8">
            Schema-driven form architecture
          </p>
          <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2 md:mt-6 lg:mt-8">
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
          <div className="mt-6 border-t border-border pt-6">
            <h4 className={headingClassName}>The Problem</h4>
            <p className="mt-3 text-[clamp(0.75rem,3.25vw,1rem)] leading-relaxed text-text-secondary md:text-[clamp(0.75rem,1.35vw,1rem)]">
              Similar forms were copied across product modules, duplicating logic and slowing development and maintenance.
            </p>
          </div>
        </>
      }
      fullWidthContent={
        <div className="space-y-6">
          <section>
            <h4 className={headingClassName}>My Contribution</h4>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Built a schema-driven form system with React and TypeScript, centralizing field changes, prefilling, conditional expressions, tab visibility, and action-button states in reusable components.
            </p>
          </section>
          <section className="border-t border-border pt-6">
            <h4 className={headingClassName}>Trade-offs</h4>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Kept shared behavior centralized while allowing module-specific API endpoints, success handlers, and specialized form fields.
            </p>
          </section>
          <section className="border-t border-border pt-6">
            <h4 className={headingClassName}>Outcome</h4>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Reduced development time for similar form-based features by approximately 90%, with less copy-pasted logic to maintain.
            </p>
          </section>
        </div>
      }
      detailsHeading="Architecture"
    />
  );
};

export default SchemaDrivenCaseStudy;
