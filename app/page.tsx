import Hero from '@/components/Sections/Hero';
import Metrics from '@/components/Sections/Metrics';
import ProfessionalCaseStudies from '@/components/Sections/ProfessionalCaseStudies';
import PersonalProjects from '@/components/Sections/PersonalProjects';
import TechnicalExpertise from '@/components/Sections/TechnicalExpertise';
import EngineeringPractice from '@/components/Sections/EngineeringPractice';
import Contact from '@/components/Sections/Contact';

const Home = () => {
  return (
    <main className="flex-1">
      <Hero />
      <Metrics />
      <ProfessionalCaseStudies />
      <PersonalProjects />
      <TechnicalExpertise />
      <EngineeringPractice />
      <Contact />
    </main>
  );
};

export default Home;
