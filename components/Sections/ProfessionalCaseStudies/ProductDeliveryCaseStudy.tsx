import ProfessionalCaseStudyCard from './ProfessionalCaseStudyCard';

const sonyLivMetrics = [
  { value: '45%', label: 'lower initial load' },
  { value: '3', label: 'engineers mentored' },
];

const detailHeadingClassName =
  'text-[clamp(0.75rem,2.5vw,1.25rem)] md:text-[clamp(0.75rem,1.75vw,0.875rem)] font-bold uppercase tracking-wider text-accent';

const detailListClassName =
  'mt-4 list-disc space-y-3 pl-6 text-[clamp(0.75rem,3.25vw,1rem)] md:text-[clamp(0.75rem,1.35vw,1rem)] font-medium leading-relaxed text-foreground marker:text-accent';

const ProductDeliveryCaseStudy = () => {
  return (
    <ProfessionalCaseStudyCard
      featuredTitle="Professional Work / Product Delivery"
      featuredContent={
        <dl className="mt-6 grid gap-3 grid-cols-2">
          {sonyLivMetrics.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-surface px-3 py-5"
            >
              <dt className="text-[clamp(3rem,6.75vw,4.5rem)] md:text-[clamp(2rem,5vw,3rem)] font-bold leading-none tracking-tight text-accent">
                {value}
              </dt>
              <dd className="mt-3 text-[clamp(1rem,3.75vw,1.15rem)] md:text-[clamp(0.875rem,1.5vw,1rem)] font-medium leading-normal text-text-secondary">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      }
      featuredHeading="Frontend performance, architecture, and delivery with a six-person product engineering team."
      detailsContent={
        <>
          <div className="mt-6">
            <h4 className={detailHeadingClassName}>Architectural Focus</h4>
            <ul className={detailListClassName}>
              <li>Frontend decisions for an API-driven product</li>
              <li>Initial page-load performance improvement</li>
            </ul>
          </div>
          <div className="mt-6 border-t border-border pt-6">
            <h4 className={detailHeadingClassName}>Leadership</h4>
            <ul className={detailListClassName}>
              <li>Coordinated a six-person delivery team</li>
              <li>Mentored three frontend engineers</li>
            </ul>
          </div>
        </>
      }
      detailsHeading="Performance & Delivery"
    />
  );
};

export default ProductDeliveryCaseStudy;
