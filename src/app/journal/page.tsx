import type { Metadata } from 'next';
import { ContentPage } from '@/components/content-page';
import { JournalIndex } from '@/components/journal-index';

export const metadata: Metadata = { title: 'Journal — Javeria Zaheer', description: 'Posts shared on LinkedIn about coding interviews, engineering habits, learning with AI, JavaScript, and problem solving.' };

export default function JournalPage() {
  return <ContentPage title="Journal" eyebrow="From my LinkedIn" introduction="Thoughts I’ve shared on problem solving, programming, and the books I read."><JournalIndex /></ContentPage>;
}
