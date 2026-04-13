import Link from 'next/link';
import Stars from './Starts';
import type { Book } from './types/book';

type Props = {
  book: Book;
};

export default function BookRow({ book }: Props) {

  return (

    <tr className="transition-colors hover:bg-light-bg3">
      {/* Normal version */}
      <td className="py-4 px-4">

        <Link href={`/books/${book.id}`}>
          <p className="font-medium hover:text-light-purple">{book.title}</p>
        </Link>

        <p className="text-sm text-light-text2">{book.author}</p>

      </td>

      {/* To use useMemo, replace the above cell with {titleCell} */}
      {/* {titleCell} */}

      <td className="text-sm text-light-text2 align-middle text-center">
        <span className="bg-light-bg3 border rounded-xl px-2 py-0.5 inline-flex items-center justify-center">
          {book.genre}
        </span>
      </td>
      <td className="text-sm text-light-text2 text-center">
        <Stars rating={book.rating} />
      </td>
      <td className="text-sm text-light-text2 text-center">{book.pages}</td>
      <td className="text-sm text-light-text2 text-center">{book.year}</td>

      {/*
      <td className="text-sm text-light-text2 text-center">
        <span className="text-xs px-2 py-1 rounded-md bg-muted">
          {book.status}
        </span>
      </td>
      */}
    </tr>
  );
}
