import './globals.css';
import type { Metadata } from 'next';
import AppShell from '@/components/layout/AppShell';

// Global SEO metadata (applies to all pages unless overridden)
// TODO: Client components (use client) such as RootLayout and AllBooksPage: They cannot have metadata. "use client or use server"
export const metadata: Metadata = {
  metadataBase: new URL('https://yoursite.com'),

  title: {
    default: 'Book Library',
    template: '%s | Book Library',
  },

  description:
    'Book Library is a modern web application built with Next.js and Tailwind CSS, focused on performance, accessibility, and clean UI.',

  openGraph: {
    title: 'Book Library',
    description: 'Book Library is a modern web application built with Next.js and Tailwind CSS.',
    url: 'https://yoursite.com',
    siteName: 'Book Library',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Book Library',
      },
    ],
  },

  icons: {
    icon: '/favicon.ico',
  },
};

// Main container component for the app with grid layout and font styles applied to the body
// This layout will be used across all pages in the app, providing a consistent structure and styling
type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        {/* Method manually setting the favicon in Next.js */}
        {/* <head>
          <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
          <title>Book Library</title>
        </head> */}
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
