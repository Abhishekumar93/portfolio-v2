import type { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  testId?: string;
  ariaLabel?: string;
  extraContent?: ReactNode;
  className?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  btnRef?: React.Ref<HTMLButtonElement>;
}

const defaultClassName =
  'min-h-11 rounded-lg border border-border bg-white px-4 py-2 text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:opacity-50 dark:bg-neutral-950 dark:text-neutral-50';

const Button = ({
  title,
  type = 'button',
  onClick,
  disabled = false,
  testId,
  ariaLabel,
  extraContent,
  className,
  ariaExpanded,
  ariaControls,
  btnRef,
}: ButtonProps) => {
  return (
    <button
      ref={btnRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-testid={testId}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      className={className ?? defaultClassName}
    >
      {extraContent}
      {title}
    </button>
  );
};

export default Button;
