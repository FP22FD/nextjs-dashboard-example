import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import AppShell from '@/components/layout/AppShell';
import { poppins, playfair } from '@/utils/fonts';

// const poppins = localFont({
//   src: [
//     { path: '../../public/fonts/poppins/Poppins-Regular.ttf', weight: '400', style: 'normal' },
//     { path: '../../public/fonts/poppins/Poppins-Italic.ttf', weight: '400', style: 'italic' },
//     { path: '../../public/fonts/poppins/Poppins-Medium.ttf', weight: '500', style: 'normal' },
//     { path: '../../public/fonts/poppins/Poppins-SemiBold.ttf', weight: '600', style: 'normal' },
//     { path: '../../public/fonts/poppins/Poppins-Bold.ttf', weight: '700', style: 'normal' },
//   ],
//   variable: '--font-sans',
//   display: 'swap',
// });

// const playfair = localFont({
//   src: [
//     {
//       path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Medium.ttf',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-SemiBold.ttf',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-ExtraBold.ttf',
//       weight: '800',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-playfair',
//   display: 'swap',
// });

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
      <body className={`${poppins.variable} ${playfair.variable} font-sans`}>
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
