import ActionLink from "@/components/UI/ActionLink";

interface HeroActionsProps {
  workHref?: string;
  resumeHref?: string;
}

const HeroActions = ({
  workHref = "work",
  resumeHref = "resume",
}: HeroActionsProps) => {
  return (
    <div className="col-span-12 grid gap-4 md:col-span-7 md:col-start-1 md:row-start-2 md:self-start mt-2 md:mt-0">
      {(workHref || resumeHref) && (
        <div className="flex flex-wrap gap-4">
          {workHref && (
            <ActionLink
              href={workHref}
              label="View My Work"
              className="bg-accent font-bold dark:text-black text-white min-h-11"
            />
          )}
          {resumeHref && (
            <ActionLink
              href={resumeHref}
              label="Download Resume"
              download
              className="font-bold border border-accent min-h-11"
            />
          )}
        </div>
      )}
      <div className="flex flex-wrap items-center gap-4 text-text-secondary text-xs xl:text-sm mt-0 md:mt-2 lg:mt-4">
        <div className="border border-accent rounded-full px-4 py-3 items-center flex text-text-secondary w-fit">
          India . Open to opportunities
        </div>
        <ActionLink
          href="https://www.linkedin.com/in/abhishekr1993/"
          label="LinkedIn"
          className="border border-accent text-text-secondary px-4 py-3"
        />
        <ActionLink
          href="https://github.com/Abhishekumar93"
          label="GitHub"
          className="border border-accent text-text-secondary px-4 py-3"
        />
        <ActionLink
          href="mailto:abhishekkr1993@gmail.com"
          label="Email"
          className="border border-accent text-text-secondary px-4 py-3"
        />
      </div>
    </div>
  );
};

export default HeroActions;
