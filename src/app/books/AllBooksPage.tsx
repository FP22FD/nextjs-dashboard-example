'use client';

import { useMemo, useState } from 'react';
import BookRow from './BookRow';
import { ALL_BOOKS } from '@/utils/data';
import { PiArrowLeftLight, PiMagnifyingGlassLight } from 'react-icons/pi';
import Dialog from '@/components/layout/Dialog';
import AddBookForm from '@/components/home/AddBookForm';
import Link from 'next/link';

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

        setOpen(false);
    }

    return (
        <section className={`min-w-0 flex flex-col text-sm sm:text-base ${className ?? ''}`}>
            {/* Header */}
            <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 ${className ?? ''}`}>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold">All Books</h1>
                    <Link
                        href={'/'}
                        className="inline-flex place-items-center gap-2 cursor-pointer whitespace-nowrap transition-transform duration-200 ease-out hover:scale-105 active:scale-95 text-light-text2 hover:text-light-purple"
                    >
                        <PiArrowLeftLight />
                        <span>Back to home</span>
                    </Link>
                </div>

                {/* Add Book Button */}
                <>
                    <button
                        type="button"
                        aria-label="Add Book"
                        className="bg-light-text0 hover:bg-light-accentBorder hover:text-light-purple text-light-bg1 font-bold px-4 rounded h-8 text-sm self-start sm:self-auto"
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
            <p className="mt-1 text-light-text2 text-sm place-self-start sm:place-self-end sm:mr-2">
                <span className="font-semibold mr-1 text-light-text0">{filtered.length}</span>
                of {ALL_BOOKS.length} books
            </p>

            <div className="flex flex-col lg:flex-row lg:items-center mb-6 sm:mb-8 rounded-lg gap-4 sm:gap-6 border px-3 sm:px-4 pt-4 pb-6 sm:pb-8 lg:pb-4 bg-light-bg1">
                <div className="flex items-center gap-2 bg-light-bg2 border border-light-border rounded-lg py-[7px] px-4 w-full md:w-[min(380px,50vw)] lg:w-[min(280px,40vw)] cursor-text transition-all duration-200 hover:shadow-sm hover:border-light-borderSoft focus-within:shadow-md focus-within:border-light-tag1t">
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

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4">
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
            <div className="rounded-lg border bg-light-bg1 overflow-x-auto">
                <table className="w-full min-w-[720px] text-left border">
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
