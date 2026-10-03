import ActionLink from "@/components/UI/ActionLink";

interface HeroActionsProps {
  workHref?: string;
  resumeHref?: string;
}

const actionClassName =
  "inline-flex min-h-11 items-center font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const HeroActions = ({
  workHref = "work",
  resumeHref = "resume",
}: HeroActionsProps) => {
  return (
    <div className="col-span-12 grid gap-4 md:col-span-7 md:col-start-1 md:row-start-2 md:self-start">
      {(workHref || resumeHref) && (
        <div className="flex flex-wrap gap-4">
          {workHref && (
            <ActionLink
              href={workHref}
              label="View My Work"
              className={`${actionClassName} text-accent`}
            />
          )}
          {resumeHref && (
            <ActionLink href={resumeHref} label="Download Resume" download />
          )}
        </div>
      )}
      <div className="flex flex-wrap items-center gap-4 text-text-secondary">
        <span>India</span>
        <p>Open to opportunities</p>
        <ActionLink
          href="https://www.linkedin.com/in/abhishekr1993/"
          label="LinkedIn"
        />
        <ActionLink href="https://github.com/Abhishekumar93" label="GitHub" />
        <ActionLink href="mailto:abhishekkr1993@gmail.com" label="Email" />
      </div>
    </div>
  );
};

export default HeroActions;
