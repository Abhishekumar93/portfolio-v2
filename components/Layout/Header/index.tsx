import MobileMenu from '@/components/Layout/MobileMenu';
import ThemeToggle from '@/components/Theme/Toggle';
import { navigationItems } from './navigation';

const navigationLinkClassName =
  'flex min-h-11 items-center rounded-sm text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background px-3 font-sans text-foreground md:px-8 lg:px-12 xl:px-0">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4">
        <span className="text-xl font-bold tracking-tight">AK</span>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {navigationItems.map(({ label, id }) => (
            <a key={id} href={`#${id}`} className={navigationLinkClassName}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
