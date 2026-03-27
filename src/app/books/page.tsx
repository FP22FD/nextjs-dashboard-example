'use client';

import { useMemo, useState } from 'react';
import BookRow from './BookRow';
import { ALL_BOOKS } from '@/utils/data';
import { PiArrowLeftLight, PiMagnifyingGlassLight } from 'react-icons/pi';
import Dialog from '@/components/layout/Dialog';
import AddBookForm from '@/components/home/AddBookForm';
import type { Metadata } from 'next';
import Link from 'next/link';


// Global SEO metadata for All Books page
// TODO: Client components (use client) such as Rootlayout and AllBooksPage: They cannot have metadata. "use client or use server"
const metadata: Metadata = {
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

/**
 * Genre type
 */
type Genre = {
  name: string;
  count: number;
};

/**
 * Predefined genres list
 */
const genres: Genre[] = [
  { name: 'Fiction', count: 2 },
  { name: 'Mystery', count: 4 },
  { name: 'Biography', count: 6 },
  { name: 'History', count: 3 },
  { name: 'Philosophy', count: 5 },
  { name: 'Poetry', count: 8 },
  { name: 'Fantasy', count: 1 },
];

type Props = {
  className?: string;
};

/**
 * AllBooksPage - Displays all books with search, filter, and add functionality
 *
 * Versions explained:
 * 1. Normal: useState + direct filtering/rendering
 *    - Simple client-side rendering
 *    - Good for small datasets
 *    - Reference: https://react.dev/learn/thinking-in-react
 *
 * 2. With useMemo
 *    - Memoizes filtered list to prevent unnecessary recalculation on unrelated state changes
 *    - Useful when filtering large datasets
 *    - Reference: https://react.dev/reference/react/useMemo
 *
 * 3. React Compiler (Next.js experimental)
 *    - Automatically memoizes JSX to prevent unnecessary re-renders
 *    - Reference:
 *        React Compiler: https://react.dev/learn/react-compiler
 *        Next.js: https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler
 */
export default function AllBooksPage({ className }: Props) {
  const [search, setSearch] = useState('');
  const [genreFilter, setGenreFilter] = useState('All');
  const [open, setOpen] = useState(false);

  // -----------------------
  // Client-side filtering with useMemo
  // -----------------------
  const filtered = useMemo(() => {
    return ALL_BOOKS.filter(
      (book) =>
        (book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())) &&
        (genreFilter === 'All' || book.genre === genreFilter),
    );
  }, [search, genreFilter]);

  function handleAddBook(data: { title: string; author: string }) {
    // TODO: Integrate with server in future (POST request)
    setOpen(false);
  }

  return (
    <section className={`flex flex-col text-base ${className ?? ''}`}>
      {/* Header */}
      <div className={`flex justify-between mb-8 align-middle pb-8 ${className ?? ''}`}>
        <div>
          <h1 className="text-3xl font-bold">All Books</h1>
          <Link
            href={"/"} className="flex place-items-center gap-2 cursor-pointer whitespace-nowrap transition-transform duration-200 ease-out hover:scale-105 active:scale-95 text-light-text2 hover:text-light-purple">
            <PiArrowLeftLight />
            <span>Back to home</span>
          </Link>
        </div>

        {/* Add Book Button */}
        <>
          <button
            type="button"
            aria-label="Add Book"
            className="bg-light-text0 hover:bg-light-accentBorder hover:text-light-purple text-light-bg1 font-bold px-4 rounded h-8 text-sm"
            onClick={() => setOpen(true)}
          >
            + Add Book
          </button>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <h2 className="text-xl font-bold mb-4">Add a new book</h2>
            <AddBookForm onSubmit={handleAddBook} onCancel={() => setOpen(false)} />
          </Dialog>
        </>
      </div>

      {/* Search and Genre Filter */}
      <p className="mt-1 text-light-text2 text-sm place-self-end mr-2">
        <span className="font-semibold mr-1 text-light-text0">{filtered.length}</span>
        of {ALL_BOOKS.length} books
      </p>

      <div className="flex mb-8 items-center rounded-lg gap-6 border px-4 pt-4 pb-12 bg-light-bg1">
        <div className="flex items-center gap-2 bg-light-bg2 border border-light-border rounded-lg py-[7px] px-4 w-[min(280px,40vw)] cursor-text transition-all duration-200 hover:shadow-sm hover:border-light-borderSoft focus-within:shadow-md focus-within:border-light-tag1t">
          <input
            type="text"
            placeholder="Search books…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm transition-colors duration-200"
            aria-label="Search"
          />
          <span className="text-light-tag3t shrink-0 cursor-pointer">
            <PiMagnifyingGlassLight />
          </span>
        </div>

        <div className="flex content-center space-x-4">
          <button
            type="button"
            onClick={() => setGenreFilter('All')}
            className={`py-1 px-2 rounded-lg text-sm transition-colors ${genreFilter === 'All' ? 'bg-light-bgActive text-light-bg1 ' : 'bg-light-bg3'}`}
          >
            All
          </button>
          {genres.map((genre) => (
            <button
              key={genre.count} // TODO: Replace with unique ID in future
              type="button"
              onClick={() => setGenreFilter(genre.name)}
              className={`py-1 px-2 rounded-lg text-sm transition-colors whitespace-nowrap ${genreFilter === genre.name ? 'bg-light-bgActive text-light-bg1' : 'bg-light-bg3 transition-colors hover:bg-light-bg1'}`}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>

      {/* Books Table */}
      <div className="rounded-lg overflow-hidden border bg-light-bg1">
        <table className="w-full text-left border">
          <thead className="text-light-text2 text-xs text-muted-foreground bg-light-bg2">
            <tr>
              <th className="py-2 px-4">Title</th>
              <th className="text-center">Genre</th>
              <th className="text-center">Rating</th>
              <th className="text-center">Pages</th>
              <th className="text-center">Year</th>
            </tr>
          </thead>
          <tbody className="bg-transparent">
            {filtered.map((book) => (
              <BookRow key={book.id} book={book} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/**
 * Notes for next steps:
 *
 * 1. React Compiler:
 *    - Enable experimental.reactCompiler in next.config.js
 *    - Automatic memoization, no code changes required
 *
 * 2. Server Component Migration:
 *    - Move ALL_BOOKS fetching to a Server Component
 *    - Pass filtered data as props to a Client Component
 *    - Reference: https://nextjs.org/docs/getting-started/react-essentials#server-and-client-components
 *
 * 3. Server-side Filtering:
 *    - For large datasets, use API route or database query
 *    - Example: /api/books?search=xxx&genre=yyy
 *
 * 4. AddBookForm Integration:
 *    - Currently closes modal only
 *    - In future, POST to API and update state
 *
 * 5. Keys in Map:
 *    - Use unique and stable keys (avoid counts)
 *    - Reference: https://react.dev/learn/rendering-lists#keys
 */
