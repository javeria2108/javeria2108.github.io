'use client';

import { useState } from 'react';
import { FolderClosed, Search, X } from 'lucide-react';
import { projects, projectCategories, type ProjectCategory } from '@/content/projects';
import { ProjectCard } from './project-card';

export function ProjectArchive() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<ProjectCategory | 'All Projects'>('All Projects');
  const [sort, setSort] = useState('record');
  const matching = projects.filter(project =>
    (category === 'All Projects' || project.category === category) &&
    `${project.name} ${project.description ?? ''} ${project.technologies.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase())
  ).toSorted((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : a.number.localeCompare(b.number));

  function reset() { setQuery(''); setCategory('All Projects'); }

  return (
    <div className="archive-browser">
      <aside className="archive-filters" aria-label="Project categories">
        <p className="archive-kicker">{'// ARCHIVE'}</p>
        <div className="category-list">
          {projectCategories.map(item => <button key={item} type="button" className={`category-button${category === item ? ' is-selected' : ''}`} aria-pressed={category === item} onClick={() => setCategory(item)}><FolderClosed size={16} aria-hidden="true" /><span>{item}</span><span className="category-count">{item === 'All Projects' ? projects.length : projects.filter(project => project.category === item).length}</span></button>)}
        </div>
      </aside>
      <section className="archive-results" aria-labelledby="projects-title">
        <header className="archive-page-heading"><div><p className="archive-kicker">Personal projects</p><h1 id="projects-title">Projects</h1></div><span>{String(projects.length).padStart(2, '0')} RECORDS</span></header>
        <div className="archive-toolbar">
          <div className="archive-search"><Search size={16} aria-hidden="true" /><label className="sr-only" htmlFor="project-search">Search projects</label><input id="project-search" type="search" placeholder="Search projects…" value={query} onChange={event => setQuery(event.target.value)} />{query && <button type="button" aria-label="Clear search" onClick={() => setQuery('')}><X size={15} /></button>}</div>
          <label className="archive-sort">Sort: <select value={sort} onChange={event => setSort(event.target.value)}><option value="record">Record no.</option><option value="name">Name A–Z</option></select></label>
        </div>
        <p className="results-caption" role="status">{matching.length} of {projects.length} projects · {category}{query.trim() && ` · “${query.trim()}”`}</p>
        {matching.length > 0 ? <div className="project-grid archive-project-grid">{matching.map(project => <ProjectCard key={project.slug} project={project} />)}</div> : <div className="archive-empty"><FolderClosed size={30} aria-hidden="true" /><h2>No records found</h2><p>Try another project name, technology, or category.</p><button type="button" className="paper-button" onClick={reset}>[ Reset filters ]</button></div>}
        <p className="filing-note">More about my professional work is in the experience section.</p>
      </section>
    </div>
  );
}
