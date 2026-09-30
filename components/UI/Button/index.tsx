import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset";
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  testId?: string;
  ariaLabel?: string;
}

const Button = ({
  title,
  type = "button",
  onClick,
  disabled = false,
  testId,
  ariaLabel,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-testid={testId}
      aria-label={ariaLabel}
      className="min-h-11 rounded-lg border border-border bg-white px-4 py-2 text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:opacity-50 dark:bg-neutral-950 dark:text-neutral-50"
    >
      {title}
    </button>
  );
};

export default Button;
