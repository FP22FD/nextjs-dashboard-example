'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';

type Props = {
  children: React.ReactNode;
};

export default function AppShell({ children }: Props) {
  const pathname = usePathname();

  const lightBgRoutes = ['/books'];

  const useLightBg = lightBgRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  const mainClass = useLightBg
    ? 'min-w-0 p-3 sm:p-4 md:p-6 bg-light-bg0'
    : 'min-w-0 p-3 sm:p-4 md:p-6 bg-light-surfaceGlow';

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] grid-cols-1 min-[820px]:grid-cols-[250px_minmax(0,1fr)]">
      {/* <Header className="hidden min-[820px]:flex min-[820px]:col-span-2" /> */}
      <Header className="col-span-1 min-[820px]:col-span-2" />

      <div className="hidden min-[820px]:block">
        <Sidebar />
      </div>

      <main className={mainClass}>{children}</main>

      <Footer className="hidden min-[820px]:flex min-[820px]:col-span-2" />
    </div>
  );
}
