import type { ReactNode } from 'react';
import { PaperArchive } from './paper-archive';

export function ContentPage({ title, eyebrow, introduction, children }: { title: string; eyebrow: string; introduction: string; children: ReactNode }) {
  return <PaperArchive title={title}><article className="content-page"><header className="content-heading"><p className="archive-kicker">{eyebrow}</p><h1>{title}</h1><p className="page-introduction">{introduction}</p></header>{children}</article></PaperArchive>;
}
