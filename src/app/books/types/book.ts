// src/app/books/types/book.ts

/**
 * Represents the possible reading statuses for a book.
 */
export type BookStatus = 'Reading' | 'Finished' | 'Want';

/**
 * Represents a book in the library system.
 */
export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  pages: number;
  rating: number;
  status: BookStatus;
  progress: number; // Percentage of book completed (0-100)
  accent: string; // Tailwind color or accent identifier
}
