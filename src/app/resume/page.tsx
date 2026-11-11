import type { Metadata } from 'next';
import { ContentPage } from '@/components/content-page';
import { ContactLinks } from '@/components/contact-links';
import { PrintButton } from '@/components/print-button';
import { experience, teaching, profile } from '@/content/profile';

export const metadata: Metadata = { title: 'Résumé — Javeria Zaheer', description: 'Print-friendly software engineering résumé for Javeria Zaheer.' };

export default function ResumePage() {
  return <ContentPage title={profile.name} eyebrow={`Software Engineer / ${profile.location}`} introduction={profile.introduction}>
    <div className="resume-contact"><ContactLinks /><a href="tel:+923706152219">{profile.phone}</a><PrintButton /></div>
    <h2 className="resume-section-title">Professional experience</h2>
    {experience.map(entry => <section className="resume-entry" key={entry.company}><header><h3>{entry.company} · {entry.role}</h3><p>{entry.dates}</p></header><ul>{entry.contributions.slice(0, 2).map(item => <li key={item}>{item}</li>)}</ul></section>)}
    <h2 className="resume-section-title">Teaching</h2><section className="resume-entry"><h3>{teaching.company} · {teaching.role}</h3><p>{teaching.dates}</p><p>Taught eight students from five countries in JavaScript and Python. Earned Super Tutor recognition.</p></section>
    <h2 className="resume-section-title">Education</h2><section className="resume-entry"><h3>BS Computer Engineering · UET Lahore</h3><p>November 2021 — May 2025 · CGPA 3.86/4.00</p></section>
    <h2 className="resume-section-title">Selected technologies</h2><p className="resume-skills">TypeScript, Java, Python, NestJS, Next.js, PostgreSQL, REST APIs, webhooks, transactions, concurrency controls, TDD, Testcontainers, React Native, FastAPI, and RAG.</p>
  </ContentPage>;
}
