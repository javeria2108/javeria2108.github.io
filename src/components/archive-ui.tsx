import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Label({ children }: { children: ReactNode }) {
  return <span className="archive-label">{children}</span>;
}

export function Divider({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return <div className="section-heading"><h2>{children}</h2>{aside}</div>;
}

export function ArchiveButton({ children, href }: { children: ReactNode; href: string }) {
  return <a className="archive-button" href={href}><span>[</span>{children}<ArrowUpRight size={15} aria-hidden="true" /><span>]</span></a>;
}
