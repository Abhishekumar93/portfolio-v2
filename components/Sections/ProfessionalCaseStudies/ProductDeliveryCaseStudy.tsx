import ProfessionalCaseStudyCard from './ProfessionalCaseStudyCard';

const sonyLivMetrics = [
  { value: '45%', label: 'lower initial load' },
  { value: '3', label: 'engineers mentored' },
];
const contentTitles = [
  { id: 'architectural_focus', title: 'Architectural Focus' },
  { id: 'engineering_quality', title: 'Engineering Quality' },
  { id: 'leadership', title: 'Leadership' },
] as const;
const contentDetails = {
  architectural_focus: [
    'Improved initial loading performance by ~45% through rendering optimization, code splitting, and data-fetching improvements.',
    'Designed and maintained frontend architecture for an API-driven product.',
  ],
  engineering_quality: [
    'Reduced SonarQube code duplication from ~6% to as low as 2.2% through frontend refactoring.',
    'Helped increase project test coverage from ~35% to over 90% using Jest and React Testing Library.',
  ],
  leadership: [
    'Coordinated frontend delivery within a six-person engineering team.',
    'Mentored three engineers through code reviews and technical guidance.',
  ],
};
const detailHeadingClassName =
  'text-[clamp(0.75rem,2.5vw,1.25rem)] md:text-[clamp(0.75rem,1.75vw,0.875rem)] font-bold uppercase tracking-wider text-accent';

const detailListClassName =
  'mt-4 list-disc space-y-3 pl-6 text-[clamp(0.75rem,3.25vw,1rem)] md:text-[clamp(0.75rem,1.35vw,1rem)] font-medium leading-relaxed text-foreground marker:text-accent';

const displayCaseStudyData = () => {
  return contentTitles.map((item, titleIndex) => (
    <div
      key={item.id}
      className={`mt-6 ${titleIndex > 0 ? 'border-t border-border pt-6' : ''}`}
    >
      <h4 className={detailHeadingClassName}>{item.title}</h4>
      <ul className={detailListClassName}>
        {contentDetails[item.id].map((detail, detailIndex) => (
          <li key={`${item.id}_${detailIndex}`}>{detail}</li>
        ))}
      </ul>
    </div>
  ));
};

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
      detailsContent={displayCaseStudyData()}
      detailsHeading="Performance & Delivery"
    />
  );
};

export default ProductDeliveryCaseStudy;
