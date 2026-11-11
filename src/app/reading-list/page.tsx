import type { Metadata } from 'next';
import { ContentPage } from '@/components/content-page';
import { books } from '@/content/profile';

export const metadata: Metadata = { title: 'Reading List — Javeria Zaheer', description: 'Books I have read, am reading now, and plan to read across software engineering, algorithms, and system design.' };
const shelves = ['Currently reading', 'Read', 'On the list'] as const;

export default function ReadingListPage() {
  return <ContentPage title="Reading list" eyebrow="My bookshelf" introduction="What I’m reading now, what I’ve finished, and what I’d like to pick up next.">
    {shelves.map(shelf => <section className="reading-shelf" key={shelf} aria-labelledby={`shelf-${shelf.replaceAll(' ', '-').toLowerCase()}`}><header><h2 id={`shelf-${shelf.replaceAll(' ', '-').toLowerCase()}`}>{shelf}</h2><span>{books.filter(book => book.status === shelf).length} books</span></header><ul>{books.filter(book => book.status === shelf).map(book => <li key={book.title}><span>{book.title}</span><span className="book-author">{book.author}</span></li>)}</ul></section>)}
  </ContentPage>;
}
