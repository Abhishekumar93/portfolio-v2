import SectionLayout from '@/components/Sections/SectionLayout';
import ProjectCard from './ProjectCard';

const PersonalProjects = () => {
  return (
    <div className="border-t border-border pt-4">
      <SectionLayout
        id="work"
        ariaLabelledBy="personal-projects-heading"
        eyebrow="02 / PERSONAL PROJECTS"
        title="Built in Public"
        subtitle="Open repositories and shareable technical work."
      >
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:gap-8">
          <ProjectCard
            category="PROFILE DISCOVERY / STATE & DATA"
            technologies={['React + TS', 'Zustand']}
            title="DevTinder"
            description="A social discovery interface with client state, API data, authentication, and UI tests."
            repositoryHref="https://github.com/Abhishekumar93/dev-tinder-frontend"
            detailsHref="/projects/devtinder"
          />
          <ProjectCard
            category="REAL-TIME MESSAGE FLOW"
            technologies={['Next.js', 'Socket.IO']}
            title="Chatbox"
            description="A real-time messaging project pairing the frontend with a Node.js backend."
            repositoryHref="https://github.com/Abhishekumar93/chatbox-frontend"
            detailsHref="/projects/chatbox"
          />
          <ProjectCard
            category="SERVERLESS FRONTEND / CLOUD INTEGRATION"
            technologies={['Next.js', 'AWS Lambda']}
            title="RAWG Games"
            description="A game discovery app using Next.js with AWS API Gateway and Lambda as a serverless API layer."
            repositoryHref="https://github.com/Abhishekumar93/rawg-games"
            detailsHref="/projects/rawg-games"
          />
        </div>
      </SectionLayout>
    </div>
  );
};

export default PersonalProjects;
