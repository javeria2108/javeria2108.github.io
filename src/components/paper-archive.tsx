import type { ReactNode } from 'react';
import Link from 'next/link';
import { Entrance } from './entrance';
import { Sidebar } from './sidebar';
import { WindowHeader } from './window-header';

export function PaperArchive({ children, title = 'Project archive' }: { children: ReactNode; title?: string }) {
  return (
    <main className="desktop paper-archive">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Entrance>
        <WindowHeader active="projects" title={title} />
        <div className="window-body">
          <Sidebar />
          <div className="paper-main">
            <div id="main-content" tabIndex={-1}>{children}</div>
            <footer className="paper-footer"><Link href="/">← Back home</Link><span>JAVERIA ZAHEER / LAHORE, PAKISTAN</span><Link href="/about#contact">Get in touch ↗</Link></footer>
          </div>
        </div>
      </Entrance>
    </main>
  );
}
