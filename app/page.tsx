import Hero from "@/components/Sections/Hero";
import Metrics from "@/components/Sections/Metrics";
import ProfessionalCaseStudies from "@/components/Sections/ProfessionalCaseStudies";

const Home = () => {
  return (
    <main className="flex-1">
      <Hero />
      <Metrics />
      <ProfessionalCaseStudies />
    </main>
  );
};

export default Home;
