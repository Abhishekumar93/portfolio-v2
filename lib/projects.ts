import 'server-only';

import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';
import matter from 'gray-matter';

interface ProjectMetadata {
  title: string;
  slug: string;
  category: string;
  description: string;
  technologies: string[];
  repositoryHref: string;
  backendRepositoryHref?: string;
  liveDemoHref?: string;
}

const projectsDirectory = path.join(process.cwd(), 'content', 'projects');

const getProjects = cache(async () => {
  const files = (await readdir(projectsDirectory))
    .filter((file) => file.endsWith('.md'))
    .sort();

  const projects = await Promise.all(
    files.map(async (file) => {
      const source = await readFile(path.join(projectsDirectory, file), 'utf8');
      const { data, content } = matter(source);

      for (const field of ['title', 'slug', 'category', 'description']) {
        if (typeof data[field] !== 'string' || !data[field].trim()) {
          throw new Error(`Missing or invalid ${field} in ${file}`);
        }
      }

      if (
        !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug) ||
        !Array.isArray(data.technologies) ||
        !data.technologies.every((value) => typeof value === 'string')
      ) {
        throw new Error(`Invalid slug or technologies in ${file}`);
      }

      for (const field of [
        'repositoryHref',
        'backendRepositoryHref',
        'liveDemoHref',
      ]) {
        const value = data[field];
        if (field !== 'repositoryHref' && value === undefined) continue;

        if (
          typeof value !== 'string' ||
          !URL.canParse(value) ||
          !['https:', 'http:'].includes(new URL(value).protocol)
        ) {
          throw new Error(`Invalid ${field} in ${file}`);
        }
      }

      return { metadata: data as ProjectMetadata, content };
    }),
  );

  if (
    new Set(projects.map(({ metadata }) => metadata.slug)).size !==
    projects.length
  ) {
    throw new Error('Project frontmatter slugs must be unique');
  }

  return projects;
});

export const getProjectSlugs = async () => {
  return (await getProjects()).map(({ metadata }) => metadata.slug);
};

export const getProjectBySlug = async (slug: string) => {
  return (await getProjects()).find(({ metadata }) => metadata.slug === slug);
};
