import type { ReactNode } from 'react';

interface EngineeringPracticeCardProps {
  title: string;
  description: string;
  extraContent?: ReactNode;
}

const EngineeringPracticeCard = ({
  title,
  description,
  extraContent,
}: EngineeringPracticeCardProps) => {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-surface p-6 lg:p-7">
      <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-4 flex-1 text-base leading-relaxed text-text-secondary">
        {description}
      </p>
      {extraContent && <div className="mt-8">{extraContent}</div>}
    </article>
  );
};

export default EngineeringPracticeCard;
