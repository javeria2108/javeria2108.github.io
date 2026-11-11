'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { journal } from '@/content/journal';

const categories = ['All posts', ...new Set(journal.map(entry => entry.category))] as const;

export function JournalIndex() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All posts');
  const entries = journal.filter(entry => (category === 'All posts' || category === entry.category) && `${entry.title} ${entry.summary} ${entry.category}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <>
    <div className="journal-controls"><div className="archive-search"><Search size={16} aria-hidden="true" /><label className="sr-only" htmlFor="journal-search">Search journal</label><input id="journal-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search posts…" /></div><div className="journal-categories" aria-label="Filter posts">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
    <p className="results-caption" role="status">{entries.length} {entries.length === 1 ? 'post' : 'posts'}</p>
    <div className="journal-list">{entries.map((entry, i) => <article key={entry.slug}><span className="journal-record" aria-hidden="true">0{i + 1}</span><div><p className="archive-kicker">{entry.category} / LinkedIn</p><h2><a href={entry.url}>{entry.title}</a></h2><p>{entry.summary}</p></div><a className="journal-open" href={entry.url} aria-label={`Read ${entry.title} on LinkedIn`}>↗</a></article>)}</div>
    {entries.length === 0 && <div className="archive-empty"><h2>No posts found</h2><p>Try another search term or category.</p><button className="paper-button" type="button" onClick={() => { setQuery(''); setCategory('All posts'); }}>Reset filters</button></div>}
  </>;
}
