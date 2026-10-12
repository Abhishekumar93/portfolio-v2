import ActionLink from '@/components/UI/ActionLink';
import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';
import DownloadIcon from '@/components/Icons/DownloadIcon';
import ExternalLinkIcon from '@/components/Icons/ExternalLinkIcon';
import MailIcon from '@/components/Icons/MailIcon';

const HeroActions = () => {
  return (
    <div className="col-span-12 grid gap-4 md:col-span-7 md:col-start-1 md:row-start-2 md:self-start mt-2 md:mt-0">
      <div className="flex flex-wrap gap-4">
        <ActionLink
          href="#work"
          label="View My Work"
          icon={<ArrowRightIcon />}
          className="font-bold border border-accent min-h-11"
        />
        <ActionLink
          href="https://github.com/Abhishekumar93/Abhishekumar93/releases/latest/download/Abhishek_Kumar_Resume.pdf"
          label="Download Resume"
          icon={<DownloadIcon />}
          download="Abhishek-Kumar-Resume.pdf"
          className="font-bold border border-accent min-h-11"
        />
      </div>
      <div className="flex flex-wrap items-center gap-4 text-text-secondary text-xs xl:text-sm mt-0 md:mt-2 lg:mt-4">
        <div className="border border-text-secondary rounded-full px-4 py-3 items-center flex text-text-secondary w-fit">
          India . Open to opportunities
        </div>
        <ActionLink
          href="https://www.linkedin.com/in/abhishekr1993/"
          label="LinkedIn"
          icon={<ExternalLinkIcon />}
          className="border border-accent text-text-secondary px-4 py-3"
        />
        <ActionLink
          href="https://github.com/Abhishekumar93"
          label="GitHub"
          icon={<ExternalLinkIcon />}
          className="border border-accent text-text-secondary px-4 py-3"
        />
        <ActionLink
          href="mailto:abhishekkr1993@gmail.com"
          label="Email"
          icon={<MailIcon />}
          className="border border-accent text-text-secondary px-4 py-3"
        />
      </div>
    </div>
  );
};

export default HeroActions;
