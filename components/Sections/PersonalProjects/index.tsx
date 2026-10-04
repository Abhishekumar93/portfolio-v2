import ProjectCard from "./ProjectCard";

const PersonalProjects = () => {
  return (
    <section
      id="work"
      aria-labelledby="personal-projects-heading"
      className="border-y border-border p-6 md:py-8 lg:px-8 lg:py-10"
    >
      <p className="text-[clamp(0.75rem,2.5vw,1.25rem)] font-bold uppercase tracking-wider text-accent md:text-[13px]">
        02 / PERSONAL PROJECTS
      </p>
      <h2
        id="personal-projects-heading"
        className="mt-4 text-[clamp(1.25rem,7vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-foreground md:text-[clamp(1.5rem,3.5vw,2.5rem)]"
      >
        Built in Public
      </h2>
      <p className="mt-4 text-[clamp(0.875rem,2.5vw,1rem)] leading-relaxed text-text-secondary">
        Open repositories and shareable technical work.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:gap-8">
        <ProjectCard
          category="PROFILE DISCOVERY / STATE & DATA"
          technologies={["React + TS", "Zustand"]}
          title="DevTinder"
          description="A social discovery interface with client state, API data, authentication, and UI tests."
          repositoryHref="https://github.com/Abhishekumar93/dev-tinder-frontend"
          detailsHref="/projects/devtinder"
        />
        <ProjectCard
          category="REAL-TIME MESSAGE FLOW"
          technologies={["Next.js", "Socket.IO"]}
          title="Chatbox"
          description="A real-time messaging project pairing the frontend with a Node.js backend."
          repositoryHref="https://github.com/Abhishekumar93/chatbox-frontend"
          detailsHref="/projects/chatbox"
        />
      </div>
    </section>
  );
};

export default PersonalProjects;
