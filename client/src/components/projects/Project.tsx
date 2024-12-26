function Project({
  title,
  image,
  description,
  website,
  code,
  tags,
}: {
  title: string;
  image: string;
  description: string[];
  website?: string;
  code?: string;
  tags: string[];
}) {
  return (
    <article className="w-full space-y-4 rounded-xl bg-card p-4 md:max-w-[35.5rem]">
      <img
        src={image}
        alt={title}
        className="rounded-xl shadow-lg shadow-accent"
      />

      <h3 className="w-1/2 border-b-4 border-border p-2 text-2xl font-semibold text-foreground">
        {title}
      </h3>

      <div className="space-y-2">
        {description.map((paragraph, index) => (
          <p key={index} className="text-sm text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="rounded-full bg-secondary px-4 py-1 text-sm text-secondary-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="flex justify-end gap-12">
        {website && (
          <a
            href={website}
            className="rounded-full bg-primary px-4 py-1 text-primary-foreground"
          >
            Website
          </a>
        )}

        {code && <a href={code}>Code</a>}
      </div>
    </article>
  );
}

export default Project;
