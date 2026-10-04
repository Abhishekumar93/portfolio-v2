const SchemaDrivenCaseStudy = () => {
  return (
    <article
      aria-labelledby="schema-driven-case-study-heading"
      className="grid grid-cols-12 gap-y-6 rounded-3xl border border-border bg-surface p-6 md:gap-x-6 lg:gap-8 lg:p-8"
    >
      <div className="col-span-12 rounded-2xl bg-accent/10 p-6 md:col-span-5 md:p-4 lg:col-span-4">
        <p className="text-xs font-bold uppercase tracking-wider text-accent md:text-[13px]">
          Featured Case Study
        </p>
        <h3
          id="schema-driven-case-study-heading"
          className="mt-4 wrap-break-word text-2xl font-bold leading-tight tracking-tight text-foreground md:text-[26px] lg:text-[30px]"
        >
          Schema-Driven Forms
        </h3>
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-[clamp(4.5rem,7vw,6rem)] font-bold leading-none tracking-tight text-accent">
            90%
          </p>
          <p className="mt-4 text-[17px] font-semibold leading-normal text-foreground">
            less feature-development time
          </p>
        </div>
        <p className="mt-6 text-base leading-relaxed text-text-secondary">
          Schema-driven form architecture
        </p>
      </div>

      <div className="col-span-12 md:col-span-7 lg:col-span-8">
        <p className="text-xs font-bold uppercase tracking-wider text-text-secondary md:text-[13px]">
          Professional Work / Architecture
        </p>
        <div className="mt-6 grid gap-8 border-t border-border pt-6 lg:grid-cols-2">
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-accent">
              The Problem
            </h4>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Repeated form work slowed delivery across product workflows.
            </p>
          </div>
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-accent">
              My Contribution
            </h4>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Architected a reusable schema-driven system in React and
              TypeScript.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6">
          <h4 className="text-[13px] font-bold uppercase tracking-wider text-accent">
            Outcome
          </h4>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-[17px] font-semibold leading-normal text-foreground marker:text-accent md:text-lg">
            <li>90% less feature-development time</li>
            <li>Faster delivery of new form features</li>
            <li>Reusable architecture across form workflows</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default SchemaDrivenCaseStudy;
