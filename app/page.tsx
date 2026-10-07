import Hero from '@/components/Sections/Hero';
import Metrics from '@/components/Sections/Metrics';
import ProfessionalCaseStudies from '@/components/Sections/ProfessionalCaseStudies';
import PersonalProjects from '@/components/Sections/PersonalProjects';

const Home = () => {
  return (
    <main className="flex-1">
      <Hero />
      <Metrics />
      <ProfessionalCaseStudies />
      <PersonalProjects />
    </main>
  );
};

export default Home;
