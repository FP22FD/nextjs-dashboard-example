import { ALL_BOOKS } from '@/utils/data';
import { notFound } from 'next/navigation'
import BookDetailsPage from '../BookDetailsPage';
import BookDetailPageHead from './BookDetailPageHead';
import { Metadata } from 'next';

// Next.js dynamic route: /books/[id]
// Fetches book by id and renders BookDetailsPage

export const metadata: Metadata = {
    metadataBase: new URL('https://yoursite.com'),

    title: 'Book Library | Book Details',
    description:
        'This book will take you on a journey through the life of Kvothe, a gifted musician and magician, as he navigates a world filled with danger, magic, and mystery.',

    openGraph: {
        title: 'Book Library | Book Details',
        description:
            'This book will take you on a journey through the life of Kvothe, a gifted musician and magician, as he navigates a world filled with danger, magic, and mystery.',
        url: 'https://yoursite.com/about',
        siteName: 'Book Library',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Book Library book details page',
            },
        ],
    },
};

type Props = {
    params: {
        id: string;
    }
    className?: string;
};

export default async function BookDetails({ params, className }: Props) {
    // const id = Number(params.id);
    // Convert params.id (string) to string for comparison
    // const book = ALL_BOOKS.find((b) => Number(b.id) === Number(id));
    // const book = ALL_BOOKS.find((b) => String(b.id) === params.id);
    // const book = ALL_BOOKS.find((b) => b.id === id);

    const resolvedParams = await params;

    const id = String(resolvedParams.id);
    const book = ALL_BOOKS.find((b) => String(b.id) === id);


    console.log('ALL_BOOKS:', ALL_BOOKS);
    console.log('params.id:', params.id, 'converted:', id);

    if (!book) return notFound();

    return (
        <section
            className={['flex flex-col text-base p-3', className].filter(Boolean).join(' ')}
        >
            <BookDetailPageHead className="mb-6" />

            <div className="flex flex-col gap-4 text-light-bg">

                <BookDetailsPage {...book} />

            </div>

        </section>

    );
}