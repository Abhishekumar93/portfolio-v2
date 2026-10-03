import type { ReactNode } from "react";

interface ActionLinkProps {
  href: string;
  label: string;
  icon?: ReactNode;
  className?: string;
  download?: boolean | string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
}

const defaultClassName =
  "inline-flex min-h-11 items-center font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

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
      className={className ?? defaultClassName}
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
