import MobileMenu from '@/components/Layout/MobileMenu';
import ThemeToggle from '@/components/Theme/Toggle';
import DesktopNavigation from './DesktopNavigation';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background px-3 font-sans text-foreground md:px-8 lg:px-12 xl:px-0">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          AK
        </Link>
        <DesktopNavigation />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
