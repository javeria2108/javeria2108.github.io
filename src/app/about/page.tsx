import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/content-page';
import { ContactLinks } from '@/components/contact-links';
import { profile, skillGroups } from '@/content/profile';
import { engineeringApproach, personalIntroduction } from '@/content/about';

export const metadata: Metadata = { title: 'About — Javeria Zaheer', description: 'Software engineer in Lahore working across backend development, full-stack applications, testing infrastructure, and AI applications.' };

export default function AboutPage() {
  return <ContentPage title="About me" eyebrow="Javeria Zaheer / Lahore, Pakistan" introduction={profile.introduction}>
    <section className="prose-section" aria-labelledby="personal-introduction"><h2 id="personal-introduction">Raw Unfiltered Introduction</h2>{personalIntroduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>
    <section className="prose-section"><h2>How I work</h2><p>{engineeringApproach}</p><p>My experience spans an early-stage education platform, Motive’s safety-product infrastructure, full-stack internships, AI applications, and international tutoring. I use AI coding tools alongside tests and review, while keeping responsibility for understanding the architecture and implementation.</p><p>Backend engineering, distributed systems, machine learning, robotics, and compilers are areas I want to keep exploring. I’m drawn to practical applications in education, healthcare, and accessibility.</p><Link className="text-link" href="/experience">Read my experience →</Link></section>
    <section className="prose-section"><h2>Education</h2><p className="education-title">BS Computer Engineering</p><p>University of Engineering and Technology, Lahore<br />November 2021 — May 2025 · CGPA 3.86/4.00</p><p>My final-year project connected embedded sensors, machine-learning inference, a Python service, and a mobile application.</p><Link className="text-link" href="/projects/wearable-posture-monitoring">Wearable Posture Monitoring →</Link></section>
    <section className="prose-section"><h2>Tools & engineering practice</h2><p>The groups below distinguish professional use, project work, and internship exposure.</p><div className="skill-groups">{skillGroups.map(group => <section key={group.title}><h3>{group.title}</h3><p>{group.context}</p><ul className="technology-list">{group.items.map(item => <li key={item}>{item}</li>)}</ul></section>)}</div><Link className="text-link" href="/courses">Courses & certificates →</Link></section>
    <section className="prose-section contact-section" id="contact"><p className="archive-kicker">Start a conversation</p><h2>Get in touch</h2><p>For software engineering opportunities, project conversations, or technical questions:</p><ContactLinks /><a className="phone-link" href="tel:+923706152219">{profile.phone}</a><p className="contact-location">Based in {profile.location}.</p><Link className="text-link" href="/resume">Print-friendly résumé →</Link></section>
  </ContentPage>;
}
