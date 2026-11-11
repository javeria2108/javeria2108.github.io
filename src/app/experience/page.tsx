import type { Metadata } from 'next';
import { ContentPage } from '@/components/content-page';
import { experience, teaching, type Experience, profile } from '@/content/profile';

export const metadata: Metadata = { title: 'Experience — Javeria Zaheer', description: 'Full-stack engineering at Noor Quran, backend infrastructure at Motive, internships, and teaching.' };

function ExperienceEntry({ entry }: { entry: Experience }) {
  return <section className="experience-entry" id={entry.company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}><header><div><h2>{entry.company}</h2><p className="experience-role">{entry.role}</p></div><p className="entry-dates">{entry.dates}</p></header><p>{entry.context}</p><ul>{entry.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}</ul><ul className="technology-list" aria-label={`${entry.company} technologies`}>{entry.stack.map(item => <li key={item}>{item}</li>)}</ul></section>;
}

export default function ExperiencePage() {
  return <ContentPage title="Experience" eyebrow={`Work record / Updated ${profile.updated}`} introduction="Product features, backend infrastructure, and the work of making software reliable.">
    {experience.map(entry => <ExperienceEntry key={entry.company} entry={entry} />)}
    <section className="section-introduction"><p className="archive-kicker">Additional experience</p><h2>Teaching technical ideas</h2></section>
    <ExperienceEntry entry={teaching} />
  </ContentPage>;
}
