interface MetricItemProps {
  title: string;
  subtitle: string;
}

const MetricItem = ({ title, subtitle }: MetricItemProps) => {
  return (
    <div className="p-6 md:py-8 lg:px-8 lg:py-10">
      <dt className="text-[clamp(1.25rem,7vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground md:text-[clamp(1.5rem,3.5vw,2.5rem)]">
        {title}
      </dt>
      <dd className="mt-3 text-sm leading-normal text-text-secondary md:text-[15px]">
        {subtitle}
      </dd>
    </div>
  );
};

const Metrics = () => {
  return (
    <section
      aria-label="Key engineering metrics"
      className="px-3 py-8 font-sans md:p-6 xl:px-0"
    >
      <dl className="mx-auto grid divide-y divide-border border-y border-divider sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <MetricItem title="Nearly 8 years" subtitle="Front-end engineering" />
        <MetricItem title="55% lower" subtitle="Initial freeze time" />
        <MetricItem title="7 engineers" subtitle="Mentored" />
      </dl>
    </section>
  );
};

export default Metrics;
