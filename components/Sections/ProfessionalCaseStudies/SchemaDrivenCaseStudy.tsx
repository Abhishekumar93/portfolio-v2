import ProfessionalCaseStudyCard from './ProfessionalCaseStudyCard';

const caseStudyData = [
  {
    title: 'My Contribution',
    description:
      'Built a schema-driven form system using React and TypeScript, extracting shared behavior for field changes, existing-data population, conditional expressions, tab visibility, and action-button states into reusable components.',
  },
  {
    title: 'Trade-offs',
    description:
      'Centralized common form behavior while keeping module-specific API endpoints, success handlers, and specialized fields configurable.',
  },
];
const detailHeadingClassName =
  'text-[clamp(0.75rem,2.5vw,1.25rem)] md:text-[clamp(0.75rem,1.75vw,0.875rem)] font-bold uppercase tracking-wider text-accent';

const detailParagraphClassName =
  'mt-2 lg:mt-4 text-[clamp(0.75rem,3.25vw,1rem)] md:text-[clamp(0.75rem,1.35vw,1rem)] leading-relaxed text-text-secondary';

const SchemaDrivenCaseStudy = () => {
  const displayCaseStudyData = () => {
    return caseStudyData.map((item, titleIndex) => (
      <div
        key={item.title.toLowerCase().replaceAll(/\s+/g, '-')}
        className={titleIndex > 0 ? 'border-t border-border pt-6' : undefined}
      >
        <h4 className={detailHeadingClassName}>{item.title}</h4>
        <p className={detailParagraphClassName}>{item.description}</p>
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
            <h4 className={detailHeadingClassName}>The Problem</h4>
            <p className={detailParagraphClassName}>
              Forms across multiple modules duplicated business logic, slowing
              development and making maintenance difficult.
            </p>
          </div>
        </>
      }
      fullWidthContent={
        <>
          {displayCaseStudyData()}
          <div className="border-t border-border pt-6">
            <h4 className={detailHeadingClassName}>Outcome</h4>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-[clamp(0.75rem,3.25vw,1rem)] md:text-[clamp(0.75rem,1.35vw,1rem)] font-medium leading-relaxed text-foreground marker:text-accent">
              <li>
                Reduced development time for similar form-based features by
                approximately 90%.
              </li>
              <li>
                Reduced repeated form logic across multiple modules through
                reusable components.
              </li>
              <li>
                Improved maintainability by centralizing shared behavior and
                simplifying future changes.
              </li>
            </ul>
          </div>
        </>
      }
      detailsHeading="Architecture"
    />
  );
};

export default SchemaDrivenCaseStudy;
