import { ExternalLink, Star } from "lucide-react";

function Project({
  star,
  title,
  image,
  description,
  website,
  code,
  tags,
}: {
  star?: boolean;
  title: string;
  image?: string;
  description: string[];
  website?: string;
  code?: string;
  tags: string[];
}) {
  return (
    <article className="relative w-full space-y-4 rounded-xl border-b-4 border-l-4 border-border bg-card p-4 md:max-w-[35.5rem]">
      {star && (
        <span className="absolute right-[-8px] top-[-8px] animate-pulse rounded-full bg-yellow-500 p-2">
          <Star size={18} />
        </span>
      )}

      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-xl shadow-lg shadow-accent"
        />
      )}

      <h3 className="text-2xl font-semibold text-foreground">{title}</h3>

      <hr className="h-1 w-1/2 rounded-full border-none bg-border text-border" />

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

      <div className="flex justify-end gap-4">
        {website && (
          <a
            href={website}
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-1 text-primary-foreground"
          >
            Website
            <ExternalLink size={18} />
          </a>
        )}

        {code && (
          <a
            href={code}
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-1 text-primary-foreground"
          >
            Code
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </article>
  );
}

export default Project;
