import SchemaDrivenCaseStudy from "./SchemaDrivenCaseStudy";

const ProfessionalCaseStudies = () => {
  return (
    <section
      id="experience"
      aria-labelledby="professional-case-studies-heading"
      className="p-6 md:py-8 lg:px-8 lg:py-10"
    >
      <p className="text-[clamp(0.75rem,2.5vw,1.25rem)] font-bold uppercase tracking-wider text-accent md:text-[13px]">
        01 / Professional Case Studies
      </p>
      <h2
        id="professional-case-studies-heading"
        className="mt-4 text-[clamp(1.25rem,7vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-foreground md:text-[clamp(1.5rem,3.5vw,2.5rem)]"
      >
        Professional Case Studies
      </h2>
      <p className="mt-4 text-[clamp(0.875rem,2.5vw,1rem)] italic leading-relaxed text-text-secondary">
        Due to NDA restrictions, code and screenshots are not available.
      </p>
      <div className="mt-6">
        <SchemaDrivenCaseStudy />
      </div>
      x
    </section>
  );
};

export default ProfessionalCaseStudies;
