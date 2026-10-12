import { navigationItems } from './navigation';

const navigationLinkClassName =
  'flex min-h-11 items-center rounded-sm text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none';

const DesktopNavigation = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-6 lg:flex"
    >
      {navigationItems.map(({ label, id }) => (
        <a key={id} href={`/#${id}`} className={navigationLinkClassName}>
          {label}
        </a>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
