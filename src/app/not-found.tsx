import Link from 'next/link';
import { ContentPage } from '@/components/content-page';

export default function NotFound() {
  return <ContentPage title="Record not found" eyebrow="404 / Archive index" introduction="This address does not point to a record in the archive."><div className="case-links"><Link className="paper-button" href="/">Back home</Link><Link className="paper-button" href="/projects">Browse projects</Link></div></ContentPage>;
}
