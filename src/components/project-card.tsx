import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/content/projects';
import { ProjectArt } from './astronomy';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <span className="record-number">{project.number}</span>
        <ProjectArt kind={project.art} />
      </div>
      <div className="project-content">
        <h3><Link href={`/projects/${project.slug}`}>{project.name}</Link></h3>
        {project.description && <p>{project.description}</p>}
        <div className="project-tags"><span>{project.organization ?? project.category}</span><span>{project.technologies.slice(0, 2).join(' / ')}</span></div>
        <div className="project-bottom">
          <Link href={`/projects/${project.slug}`} aria-label={`Open ${project.name} case study`}><ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </article>
  );
}
