import type { ReactNode } from 'react';

interface ActionLinkProps {
  href: string;
  label: string;
  icon?: ReactNode;
  className?: string;
  download?: boolean | string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  rel?: string;
}

const defaultClassName =
  'inline-flex items-center font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded-full px-4 hover:scale-103 transition-transform duration-200 ease-in-out';

const ActionLink = ({
  href,
  label,
  icon,
  className,
  download,
  target,
  rel,
}: ActionLinkProps) => {
  return (
    <a
      href={href}
      className={`${className} ${defaultClassName}${icon ? ' gap-2' : ''}`}
      download={download}
      target={target}
      rel={rel}
    >
      {label}
      {icon}
    </a>
  );
};

export default ActionLink;
