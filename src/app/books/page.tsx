import type { Metadata } from 'next';
import AllBooksPage from './AllBooksPage';

export const metadata: Metadata = {
  metadataBase: new URL('https://yoursite.com'),

  title: 'All Books | Book Library',
  description:
    'Browse all books in the Book Library. Search, filter by genre, and explore ratings, pages, and publication year.',

  openGraph: {
    title: 'All Books | Book Library',
    description:
      'Browse all books in the Book Library. Search, filter by genre, and explore ratings, pages, and publication year.',
    url: 'https://yoursite.com/books',
    siteName: 'Book Library',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Book Library all books page',
      },
    ],
  },
};

export default function BooksPage() {
  return <AllBooksPage />;
}

