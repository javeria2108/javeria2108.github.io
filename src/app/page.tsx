import Link from 'next/link';
import { ArchiveButton, Divider } from '@/components/archive-ui';
import { Astronomy } from '@/components/astronomy';
import { ProjectCard } from '@/components/project-card';
import { WindowHeader } from '@/components/window-header';
import { Entrance } from '@/components/entrance';
import { Sidebar } from '@/components/sidebar';
import { featuredProjects } from '@/content/projects';
import { profile } from '@/content/profile';
import { ContactLinks } from '@/components/contact-links';

export default function Home() {
  return (
    <main id="home" className="desktop">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Entrance>
        <WindowHeader />
        <div className="window-body">
          <Sidebar />
          <div className="main-content" id="main-content" tabIndex={-1}>
            <section className="hero" aria-labelledby="intro-title">
              <div className="intro">
                <p className="eyebrow">Software Engineer · Lahore, Pakistan</p>
                <h1 id="intro-title">Javeria<br />Zaheer<span className="cursor">_</span></h1>
                <p className="intro-copy">{profile.introduction}</p>
                <ArchiveButton href="#featured">View my work</ArchiveButton>
                <Link className="intro-secondary" href="/experience">Experience ↗</Link>
              </div>
              <figure className="hero-art">
                <Astronomy />
                <figcaption>Same sky, different day.<a href="https://svs.gsfc.nasa.gov/5001/">Lunar mosaic · NASA / SVS</a></figcaption>
              </figure>
            </section>
            <section id="featured" className="featured" aria-labelledby="featured-title">
              <Divider aside={<Link className="section-meta" href="/projects">View all projects ↗</Link>}><span id="featured-title">Projects</span></Divider>
              <div className="project-grid">{featuredProjects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>
            </section>
            <section className="home-experience" aria-labelledby="experience-heading"><Divider aside={<Link className="section-meta" href="/experience">View all experiences ↗</Link>}><span id="experience-heading">Experiences</span></Divider><div className="home-work-summary"><p><strong><Link href="/experience#noor-quran">Noor Quran ↗</Link></strong><span>Software Engineer, Full Stack · Sep 2026 — Present</span>Scheduling, billing, messaging, and administrative workflows, from PostgreSQL schema to Next.js interfaces.</p><p><strong><Link href="/experience#motive">Motive ↗</Link></strong><span>Software Engineer · Sep 2025 — Aug 2026</span>Java API infrastructure, reusable webhook validation, and multi-region safety workflows.</p></div></section>
            <footer id="archive-notice" className="archive-notice" tabIndex={-1}>
              <span>Let’s talk about software.</span>
              <ContactLinks />
            </footer>
          </div>
        </div>
      </Entrance>
    </main>
  );
}
