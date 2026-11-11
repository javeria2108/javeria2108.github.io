import Link from 'next/link';
import { Astronomy } from './astronomy';
import { Navigation } from './navigation';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
      <div className="sidebar-masthead"><Astronomy small /><span>Personal archive</span></div>
      <Navigation />
      <section className="status-panel" aria-labelledby="status-title">
        <h2 id="status-title">Currently</h2>
        <p><span className="status-dot" />Full-stack engineering at Noor Quran.</p>
        <Link className="sidebar-now" href="/now">More from now ↗</Link>
      </section>
      </div>
    </aside>
  );
}
