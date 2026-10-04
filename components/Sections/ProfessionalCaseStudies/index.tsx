import SchemaDrivenCaseStudy from "./SchemaDrivenCaseStudy";

const ProfessionalCaseStudies = () => {
  return (
    <section
      id="experience"
      aria-labelledby="professional-case-studies-heading"
      className="px-6 py-16 font-sans md:px-8 lg:px-12 lg:py-24 xl:px-0"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-wider text-accent md:text-[13px]">
          01 / Professional Case Studies
        </p>
        <h2
          id="professional-case-studies-heading"
          className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-foreground md:text-[38px] lg:text-[44px]"
        >
          Professional Case Studies
        </h2>
        <div className="mt-8">
          <SchemaDrivenCaseStudy />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCaseStudies;
