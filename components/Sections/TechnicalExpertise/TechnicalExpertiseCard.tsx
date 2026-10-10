interface TechnicalExpertiseCardProps {
  title: string;
  items: string[];
}

const TechnicalExpertiseCard = ({
  title,
  items,
}: TechnicalExpertiseCardProps) => {
  return (
    <article className="rounded-2xl border border-border bg-surface p-6 lg:p-7">
      <div className="h-1.5 w-12 rounded-full bg-accent" />
      <h3 className="mt-6 border-b border-border pb-4 text-2xl font-bold leading-tight tracking-tight text-foreground">
        {title}
      </h3>
      <ul className="mt-6 space-y-4 text-base leading-relaxed">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === 0
                ? 'font-semibold text-foreground'
                : 'font-normal text-text-secondary'
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default TechnicalExpertiseCard;
