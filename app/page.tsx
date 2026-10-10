import Hero from '@/components/Sections/Hero';
import Metrics from '@/components/Sections/Metrics';
import ProfessionalCaseStudies from '@/components/Sections/ProfessionalCaseStudies';
import PersonalProjects from '@/components/Sections/PersonalProjects';
import TechnicalExpertise from '@/components/Sections/TechnicalExpertise';

const Home = () => {
  return (
    <main className="flex-1">
      <Hero />
      <Metrics />
      <ProfessionalCaseStudies />
      <PersonalProjects />
      <TechnicalExpertise />
    </main>
  );
};

export default Home;
