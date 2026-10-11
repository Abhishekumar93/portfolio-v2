'use client';

import ArrowUpIcon from '@/components/Icons/ArrowUpIcon';
import Button from '@/components/UI/Button';

const Footer = () => {
  const handleScrollToTop = () => {
    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        '',
        window.location.pathname,
      );
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="px-6 py-4 text-[13px] text-text-secondary lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-border pt-4">
        <p>&copy; Abhishek Kumar</p>
        <Button
          title="Top"
          ariaLabel="Back to top"
          onClick={handleScrollToTop}
          extraContent={<ArrowUpIcon />}
          className="inline-flex min-h-11 flex-row-reverse items-center gap-2 bg-transparent font-medium transition-colors duration-150 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
        />
      </div>
    </footer>
  );
};

export default Footer;
