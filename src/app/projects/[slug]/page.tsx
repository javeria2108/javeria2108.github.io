import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PaperArchive } from '@/components/paper-archive';
import { ProjectArt } from '@/components/astronomy';
import { projects } from '@/content/projects';

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return { title: `${project?.name ?? 'Project'} — Javeria Zaheer`, description: project?.description };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return <PaperArchive title={project.name}>
    <article className="case-layout">
      <div className="case-sidebar"><Link className="back-to-projects" href="/projects">← All projects</Link></div>
      <header className="case-heading">
        <div><p className="archive-kicker">Record {project.number} / {project.organization ?? project.category}</p><h1>{project.name}</h1><p>{project.description}</p></div>
        <div className="case-art" aria-hidden="true"><ProjectArt kind={project.art} /></div>
      </header>
      <ul className="technology-list" aria-label="Technologies">{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
      {(project.repository || project.demo) && <div className="case-links">{project.demo && <a className="paper-button" href={project.demo}>Live demo ↗</a>}{project.repository && <a className="paper-button" href={project.repository}>Source code ↗</a>}</div>}
      {project.flow && <figure className="system-flow"><figcaption>Application flow · simplified</figcaption><ol>{project.flow.map(step => <li key={step}>{step}</li>)}</ol></figure>}
      <div className="case-sections">{project.sections.map((section, i) => <section className="case-section" key={section.title} aria-labelledby={`section-${i}`}><h2 id={`section-${i}`}>{section.title}</h2>{section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}</div>
      <nav className="record-pagination" aria-label="More projects"><Link href="/projects">← Back to index</Link><Link href={`/projects/${next.slug}`}>Next: {next.name} →</Link></nav>
    </article>
  </PaperArchive>;
}
