import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/content-page';
import { profile } from '@/content/profile';

export const metadata: Metadata = { title: 'Now — Javeria Zaheer', description: 'A dated snapshot of current engineering work, reading, and technical interests.' };

export default function NowPage() {
  return <ContentPage title="Now" eyebrow={`A snapshot / ${profile.updated}`} introduction="What I’m working on, learning, and paying attention to. This page reflects the update below, rather than a live status.">
    <section className="prose-section"><h2>Building at Noor Quran</h2><p>I’m working across the backend and frontend of a not-for-profit platform for one-to-one live Quran classes. Recent work includes scheduling, billing, teacher-family messaging, teacher applications, and administrative workflows.</p><Link className="text-link" href="/experience#noor-quran">More about my experience →</Link></section>
    <section className="prose-section"><h2>Reading & learning</h2><p>I’m currently reading The Effective Software Engineer and A Philosophy of Software Design. I’m paying particular attention to domain boundaries, database interactions, and implementation tradeoffs.</p><p>I use Claude agents and skills during development alongside automated tests and review. I want that assistance to support my engineering judgment, while I continue to understand the system I’m changing.</p><Link className="text-link" href="/reading-list">My reading list →</Link></section>
    <section className="prose-section"><h2>Longer threads</h2><p>Backend systems, AI applications, distributed systems, machine learning, robotics, and compilers. I’m particularly interested in software that can make education, healthcare, and accessibility more useful to people.</p></section>
    <p className="update-stamp">Last updated <time dateTime={profile.updatedISO}>{profile.updated}</time> · Lahore, Pakistan</p>
  </ContentPage>;
}
