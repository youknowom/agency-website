import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

// Real brand icons mapped to technology names
const iconMap = {
  "Next.js": <SiNextdotjs />,
  "React": <SiReact className="text-[#61DAFB]" />,
  "Tailwind": <SiTailwindcss className="text-[#06B6D4]" />,
  "TypeScript": <SiTypescript className="text-[#3178C6]" />,
  "Figma": <SiFigma className="text-[#F24E1E]" />,
  "Strategy": null,
  "UI/UX": null,
  "Design": null,
  "Development": null,
  "AI/ML": null,
};

function ProjectCard({
  title,
  category,
  description,
  image,
  technologies = [],
  liveUrl,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-orange-500/20 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category */}
        <span className="self-start text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
          {category}
        </span>

        {/* Title */}
        <h3 className="mt-3 text-xl font-bold text-[var(--text)] tracking-tight leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)] flex-1">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.map((tech) => {
            const icon = iconMap[tech];
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--panel-alt)] border border-[var(--line)] px-2.5 py-1 text-[10px] font-semibold text-[var(--muted)] tracking-wide"
              >
                {icon && <span className="text-xs leading-none">{icon}</span>}
                {tech}
              </span>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-5">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-orange-600 hover:shadow-md hover:shadow-orange-500/20"
          >
            Live Preview
            <FaArrowUpRightFromSquare className="text-[11px]" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
