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
  'inline-flex items-center font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded-full px-4';

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
      className={`${className} ${defaultClassName}`}
      download={download}
      target={target}
      rel={rel}
    >
      {icon}
      {label}
    </a>
  );
};

export default ActionLink;
