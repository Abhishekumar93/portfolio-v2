import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Markdown, { type Components } from 'react-markdown';
import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';
import ExternalLinkIcon from '@/components/Icons/ExternalLinkIcon';
import ActionLink from '@/components/UI/ActionLink';
import { getProjectBySlug, getProjectSlugs } from '@/lib/projects';

const actionClassName =
  'min-h-11 py-2 text-sm text-accent underline-offset-4 hover:underline lg:text-base';

const markdownHeadingClassName =
  'mt-12 border-t border-border pt-8 text-2xl font-bold leading-tight tracking-tight text-foreground first:mt-0 first:border-t-0 first:pt-0 md:text-[28px]';

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h2 className={markdownHeadingClassName}>{children}</h2>
  ),
  h2: ({ children }) => (
    <h2 className={markdownHeadingClassName}>{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 text-xl font-semibold leading-snug tracking-tight text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="mt-4">{children}</p>,
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-accent">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 marker:text-accent">
      {children}
    </ol>
  ),
  pre: ({ children }) => (
    <pre className="mt-6 overflow-x-auto rounded-[19px] border border-border bg-surface-soft p-6 text-sm leading-relaxed text-foreground contain-[inline-size] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [&>code]:rounded-none [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit">
      {children}
    </pre>
  ),
  code: ({ children }) => (
    <code className="rounded-sm bg-surface-soft px-1 py-0.5 font-mono text-[0.9em] text-foreground">
      {children}
    </code>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="rounded-sm text-accent underline underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-2 border-accent pl-6 italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-border" />,
};

export const generateStaticParams = async () => {
  return (await getProjectSlugs()).map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: PageProps<'/projects/[slug]'>): Promise<Metadata> => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return {
    title: project.metadata.title,
    description: project.metadata.description,
  };
};

const ProjectPage = async ({ params }: PageProps<'/projects/[slug]'>) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const { metadata, content } = project;

  return (
    <main className="px-6 py-8 md:py-10 lg:px-8 lg:py-12">
      <article>
        <Link
          href="/#work"
          className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span className="rotate-180">
            <ArrowRightIcon />
          </span>{' '}
          Back to projects
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          <p className="text-xs font-bold uppercase leading-relaxed tracking-wider text-accent md:text-[13px]">
            {metadata.category}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-foreground md:text-[40px] lg:text-5xl">
            {metadata.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
            {metadata.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {metadata.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-accent"
              >
                {technology}
              </li>
            ))}
          </ul>
          <div className="-mx-4 mt-6 flex flex-wrap gap-x-2 gap-y-2">
            <ActionLink
              href={metadata.repositoryHref}
              label="View repository"
              icon={<ExternalLinkIcon />}
              target="_blank"
              rel="noopener noreferrer"
              className={actionClassName}
            />
            {metadata.backendRepositoryHref && (
              <ActionLink
                href={metadata.backendRepositoryHref}
                label="Backend repository"
                icon={<ExternalLinkIcon />}
                target="_blank"
                rel="noopener noreferrer"
                className={actionClassName}
              />
            )}
            {metadata.liveDemoHref && (
              <ActionLink
                href={metadata.liveDemoHref}
                label="Live demo"
                icon={<ExternalLinkIcon />}
                target="_blank"
                rel="noopener noreferrer"
                className={actionClassName}
              />
            )}
          </div>
        </header>

        <div className="mt-8 min-w-0 wrap-anywhere text-base leading-relaxed text-text-secondary">
          <Markdown components={markdownComponents}>{content}</Markdown>
        </div>
      </article>
    </main>
  );
};

export default ProjectPage;
