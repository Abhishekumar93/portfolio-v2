import SectionLayout from '@/components/Sections/SectionLayout';
import EngineeringPracticeCard from './EngineeringPracticeCard';

const practiceCards = [
  {
    title: 'AI-assisted & agentic workflows',
    description:
      'Used for implementation, code analysis, quality validation, and test generation, with human review before delivery.',
    extraContent: (
      <div>
        <p className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
          <span className="text-[40px] font-bold leading-none tracking-tight text-accent lg:text-[45px]">
            10+
          </span>
          <span className="text-lg font-semibold text-foreground lg:text-[22px]">
            percentage points
          </span>
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
          Primarily driven by AI-assisted testing and manual validation
        </p>
      </div>
    ),
  },
  {
    title: 'Cloud-integrated frontend',
    description:
      'Regional Next.js sites with CloudFront and Lambda@Edge, alongside a self-serve CMS.',
    extraContent: (
      <div className="border-t border-border pt-6">
        <p className="text-[21px] font-bold leading-tight text-accent">
          90+ Lighthouse SEO score
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
          Leanpitch·Nov 2018–Mar 2022
        </p>
      </div>
    ),
  },
];

const EngineeringPractice = () => {
  return (
    <div className="border-t border-border pt-4">
      <SectionLayout
        id="practice"
        ariaLabelledBy="engineering-practice-heading"
        eyebrow="04 / ENGINEERING PRACTICE"
        title="Engineering Practice"
        subtitle="Evidence from day-to-day delivery and cloud-integrated frontend work."
      >
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:gap-8">
          {practiceCards.map((card) => (
            <EngineeringPracticeCard
              key={card.title}
              title={card.title}
              description={card.description}
              extraContent={card.extraContent}
            />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default EngineeringPractice;
