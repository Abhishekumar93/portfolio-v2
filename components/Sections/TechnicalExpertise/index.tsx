import SectionLayout from '@/components/Sections/SectionLayout';
import TechnicalExpertiseCard from './TechnicalExpertiseCard';

const expertiseCards = [
  {
    title: 'Frontend Systems',
    items: [
      'React and Next.js',
      'TypeScript interfaces',
      'Schema-driven forms',
      'Reusable component design',
    ],
  },
  {
    title: 'Quality & Delivery',
    items: [
      'Performance profiling',
      'Accessible UI practices',
      'Automated UI testing',
      'Maintainable delivery',
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
    <SectionLayout
      id="expertise"
      ariaLabelledBy="technical-expertise-heading"
      eyebrow="03 / Technical Expertise"
      title="Technical Expertise"
      subtitle="The systems, quality practices, and team skills behind the work."
    >
      <div className="mt-6 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {expertiseCards.map((card) => (
          <TechnicalExpertiseCard
            key={card.title}
            title={card.title}
            items={card.items}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default TechnicalExpertise;
