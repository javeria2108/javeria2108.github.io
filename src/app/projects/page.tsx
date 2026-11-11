import type { Metadata } from 'next';
import { PaperArchive } from '@/components/paper-archive';
import { ProjectArchive } from '@/components/project-archive';

export const metadata: Metadata = { title: 'Projects — Javeria Zaheer', description: 'Browse Javeria Zaheer’s software project archive.' };

export default function ProjectsPage() {
  return <PaperArchive><ProjectArchive /></PaperArchive>;
}
