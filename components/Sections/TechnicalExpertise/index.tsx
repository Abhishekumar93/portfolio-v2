import SectionLayout from '@/components/Sections/SectionLayout';
import TechnicalExpertiseCard from './TechnicalExpertiseCard';

const expertiseCards = [
  {
    title: 'Frontend Systems',
    items: [
      'React and Next.js',
      'TypeScript & typed systems',
      'Schema-driven forms',
      'Reusable component architecture',
    ],
  },
  {
    title: 'Quality & Delivery',
    items: [
      'Performance optimization',
      'Accessible UI / WCAG',
      'Automated UI testing',
      'CI/CD & code quality',
    ],
  },
  {
    title: 'Technical Leadership',
    items: [
      'Architecture decisions',
      'Code review and mentorship',
      'Cross-team alignment',
      'Product collaboration',
    ],
  },
];

const TechnicalExpertise = () => {
  return (
    <div className="border-t border-border pt-4">
      <SectionLayout
        id="expertise"
        ariaLabelledBy="technical-expertise-heading"
        eyebrow="03 / Technical Expertise"
        title="Technical Expertise"
        subtitle="The systems, quality practices, and technical leadership behind the work."
      >
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {expertiseCards.map((card) => (
            <TechnicalExpertiseCard
              key={card.title}
              title={card.title}
              items={card.items}
            />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default TechnicalExpertise;
