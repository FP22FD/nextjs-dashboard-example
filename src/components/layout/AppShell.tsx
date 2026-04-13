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

  const mainClass = useLightBg ? 'p-6 bg-light-bg0' : 'p-6 bg-light-surfaceGlow';

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] grid-cols-[250px_1fr]">
      <Header className="col-span-2" />
      <Sidebar />
      <main className={mainClass}>{children}</main>
      <Footer className="col-span-2" />
    </div>
  );
}
