function TimelineItem({
  title,
  subtitle,
  image,
  content,
  reverse,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  content: string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`relative w-1/2 py-12 after:absolute after:top-12 after:z-10 after:h-8 after:w-8 after:rounded-full after:border-4 after:border-border after:bg-primary max-md:w-full ${reverse ? "left-1/2 pl-8 after:left-[-1rem] max-md:left-0" : "left-0 pr-8 after:right-[-1rem] max-md:pl-8 max-md:pr-0 max-md:after:left-[-1rem]"}`}
    >
      <article className="space-y-4 rounded-xl border-b-4 border-l-4 border-border bg-card p-4">
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded-xl shadow-lg shadow-accent"
          />
        )}

        <header>
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>

          {subtitle && (
            <h4 className="text-sm text-muted-foreground">{subtitle}</h4>
          )}
        </header>

        <hr className="h-1 w-1/2 rounded-full border-none bg-border text-border" />

        <div className="space-y-2">
          {content.map((paragraph, index) => (
            <p key={index} className="text-sm text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}

export default TimelineItem;
