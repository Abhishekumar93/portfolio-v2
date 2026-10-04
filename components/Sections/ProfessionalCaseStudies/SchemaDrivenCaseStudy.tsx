import ProfessionalCaseStudyCard from "./ProfessionalCaseStudyCard";

const SchemaDrivenCaseStudy = () => {
  return (
    <ProfessionalCaseStudyCard
      featuredTitle="Featured Case Study"
      featuredContent={
        <>
          <div className="mt-4 md:mt-6 lg:mt-8">
            <p className="text-[clamp(3rem,6.75vw,4.5rem)] md:text-[clamp(4rem,7vw,5rem)] font-bold leading-none tracking-tight text-accent">
              90%
            </p>
            <p className="mt-4 text-[clamp(0.875rem,4vw,1rem)] font-semibold leading-normal text-foreground">
              less feature-development time
            </p>
          </div>
          <p className="mt-4 md:mt-6 lg:mt-8 border-t border-border pt-6 text-[clamp(1rem,4vw,1.15rem)] font-semibold leading-normal text-foreground">
            Schema-driven form architecture
          </p>
          <ul
            aria-label="Technologies"
            className="mt-4 md:mt-6 lg:mt-8 flex flex-wrap gap-2"
          >
            {["React", "TypeScript", "Reusable UI"].map((technology) => (
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
            <div>
              <h4 className="text-[clamp(0.75rem,2.5vw,1.25rem)] md:text-[clamp(0.75rem,1.75vw,0.875rem)] font-bold uppercase tracking-wider text-accent">
                The Problem
              </h4>
              <p className="mt-2 lg:mt-4 text-[clamp(1rem,3.75vw,1.15rem)] md:text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed text-text-secondary">
                Repeated form work slowed delivery across product workflows.
              </p>
            </div>
            <div>
              <h4 className="text-[clamp(0.75rem,2.5vw,1.25rem)] md:text-[clamp(0.75rem,1.75vw,0.875rem)] font-bold uppercase tracking-wider text-accent">
                My Contribution
              </h4>
              <p className="mt-2 lg:mt-4 text-[clamp(1rem,3.75vw,1.15rem)] md:text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed text-text-secondary">
                Architected a reusable schema-driven system in React and
                TypeScript.
              </p>
            </div>
            <div>
              <h4 className="text-[clamp(0.75rem,2.5vw,1.25rem)] md:text-[clamp(0.75rem,1.75vw,0.875rem)] font-bold uppercase tracking-wider text-accent">
                Trade-offs
              </h4>
              <p className="mt-2 lg:mt-4 text-[clamp(1rem,3.75vw,1.15rem)] md:text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed text-text-secondary">
                Reusable patterns must still support differing workflow needs.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-6">
            <h4 className="text-[clamp(0.75rem,2.5vw,1.25rem)] md:text-[clamp(0.75rem,1.75vw,0.875rem)] font-bold uppercase tracking-wider text-accent">
              Outcome
            </h4>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-[clamp(1rem,3.75vw,1.15rem)] md:text-[clamp(0.875rem,1.5vw,1rem)] font-semibold leading-normal text-foreground marker:text-accent md:text-lg">
              <li>90% less feature-development time</li>
              <li>Faster delivery of new form features</li>
              <li>Reusable architecture across form workflows</li>
            </ul>
          </div>
        </>
      }
    />
  );
};

export default SchemaDrivenCaseStudy;
