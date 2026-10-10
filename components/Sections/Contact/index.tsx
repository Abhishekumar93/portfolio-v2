import { Fragment } from 'react';
import ActionLink from '@/components/UI/ActionLink';
import ExternalLinkIcon from '@/components/Icons/ExternalLinkIcon';
import MailIcon from '@/components/Icons/MailIcon';

const opportunityDetails = [
  { label: 'Location', value: 'India' },
  { label: 'Roles', value: 'Lead / Senior Frontend' },
  { label: 'Work', value: 'Remote · US/EU overlap' },
];

const profileLinkClassName =
  'min-h-13 justify-center border border-border bg-surface py-3 text-base text-foreground lg:px-8';

const Contact = () => {
  return (
    <div className="border-t border-border pt-4">
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="p-6 md:py-8 lg:px-8 lg:py-10"
      >
        <div className="grid grid-cols-12 items-start gap-y-8 md:gap-x-6 lg:gap-x-8">
          <div className="col-span-12 min-w-0 md:col-span-6">
            <p className="text-[clamp(0.75rem,2.5vw,1.25rem)] font-bold uppercase tracking-wider text-accent md:text-[13px]">
              05 / CONTACT
            </p>
            <h2
              id="contact-heading"
              className="mt-4 text-[clamp(1.25rem,7vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-foreground md:text-[clamp(1.5rem,3.5vw,2.5rem)]"
            >
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-[clamp(0.875rem,2.5vw,1rem)] leading-relaxed text-text-secondary">
              Open to Lead and Senior Frontend opportunities.
            </p>
            <dl className="mt-8 grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-6 lg:gap-y-8">
              {opportunityDetails.map(({ label, value }) => (
                <Fragment key={label}>
                  <dt className="text-xs font-bold uppercase tracking-wider text-accent">
                    {label}
                  </dt>
                  <dd className="text-base font-medium leading-relaxed text-foreground">
                    {value}
                  </dd>
                </Fragment>
              ))}
            </dl>
          </div>

          <div className="col-span-12 min-w-0 rounded-[17px] border border-border bg-surface p-6 md:col-span-6 lg:p-8">
            <p className="text-[13px] font-bold uppercase tracking-wider text-accent">
              DIRECT CONTACT
            </p>
            <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-foreground md:text-[26px] lg:text-[29px]">
              Reach me directly.
            </h3>
            <a
              href="mailto:abhishekkr1993@gmail.com"
              className="mt-4 block min-h-11 content-center rounded-sm text-base font-semibold leading-relaxed text-accent underline-offset-4 wrap-anywhere hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-lg lg:text-[22px]"
            >
              abhishekkr1993@gmail.com <MailIcon />
            </a>
            <p className="mt-6 border-t border-border pt-6 text-[15px] leading-relaxed text-text-secondary">
              For roles, collaborations, or technical conversations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink
                href="https://www.linkedin.com/in/abhishekr1993/"
                label="LinkedIn"
                icon={<ExternalLinkIcon />}
                target="_blank"
                rel="noopener noreferrer"
                className={profileLinkClassName}
              />
              <ActionLink
                href="https://github.com/Abhishekumar93"
                label="GitHub"
                icon={<ExternalLinkIcon />}
                target="_blank"
                rel="noopener noreferrer"
                className={profileLinkClassName}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
