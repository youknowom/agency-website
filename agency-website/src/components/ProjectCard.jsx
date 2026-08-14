import Button from "./Button";

function ProjectCard({
  title,
  category,
  description,
  image,
  technologies = [],
  liveUrl,
}) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-orange-500/25 flex flex-col justify-between">
      <div>
        <img src={image} alt={title} className="h-56 w-full object-cover" />
        <div className="p-7 pb-0">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-orange-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
              {category}
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-bold text-[var(--text)] tracking-tight">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--line)] bg-[var(--panel-alt)] px-3 py-1 text-[10px] font-semibold text-[var(--muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-7 pt-6">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-[var(--line)] bg-[var(--panel-alt)] py-3 text-sm font-bold text-[var(--text)] hover:bg-[var(--line)] transition-colors"
        >
          <span>View Project</span>
          <span className="text-orange-500">↗</span>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
