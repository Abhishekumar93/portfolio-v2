import ActionLink from '@/components/UI/ActionLink';
import ExternalLinkIcon from '@/components/Icons/ExternalLinkIcon';
import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';

interface ProjectCardProps {
  category: string;
  technologies: string[];
  title: string;
  description: string;
  repositoryHref: string;
  detailsHref: string;
}

const actionClassName =
  'min-h-11 py-2 text-sm text-accent underline-offset-4 hover:underline lg:text-base';

const ProjectCard = ({
  category,
  technologies,
  title,
  description,
  repositoryHref,
  detailsHref,
}: ProjectCardProps) => {
  return (
    <article className="flex flex-col rounded-[19px] border border-border bg-surface p-6 lg:p-8">
      <p className="text-xs font-bold uppercase leading-relaxed tracking-wider text-accent lg:text-[13px]">
        {category}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-accent"
          >
            {technology}
          </li>
        ))}
      </ul>
      <h3 className="mt-8 text-2xl font-bold leading-tight tracking-tight text-foreground md:text-[28px] lg:text-[31px]">
        {title}
      </h3>
      <p className="mt-4 flex-1 text-base leading-relaxed text-text-secondary">
        {description}
      </p>
      <div className="mt-8 border-t border-border pt-6">
        <div className="-mx-4 flex flex-wrap gap-x-2 gap-y-2">
          <ActionLink
            href={repositoryHref}
            label="View repository"
            icon={<ExternalLinkIcon />}
            target="_blank"
            rel="noopener noreferrer"
            className={actionClassName}
          />
          <ActionLink
            href={detailsHref}
            label="Project details"
            icon={<ArrowRightIcon />}
            className={actionClassName}
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
