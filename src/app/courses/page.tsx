import type { Metadata } from 'next';
import { ContentPage } from '@/components/content-page';
import { certificates, universityCourses, learningSource } from '@/content/courses';

export const metadata: Metadata = { title: 'Courses & Certificates — Javeria Zaheer', description: 'Courses and certifications listed on Javeria Zaheer’s LinkedIn profile.' };

export default function CoursesPage() {
  return <ContentPage title="Courses & certificates" eyebrow="Learning record" introduction="Structured learning in programming, machine learning, interface design, and computer engineering.">
    <section className="certificate-section"><h2>Certificates</h2><div className="certificate-list">{certificates.map(certificate => <article key={certificate.title}><h3>{certificate.title}</h3><p>{certificate.issuer}{'issued' in certificate && <span> · {certificate.issued}</span>}</p></article>)}</div></section>
    <section className="prose-section"><h2>University courses</h2><p>Coursework at the University of Engineering and Technology, Lahore.</p><ul className="course-list">{universityCourses.map(course => <li key={course}>{course}</li>)}</ul></section>
    <p className="filing-note"><a href={learningSource}>Listed on my LinkedIn profile ↗</a></p>
  </ContentPage>;
}
