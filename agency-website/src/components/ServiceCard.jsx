import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiVite, 
  SiFigma, 
  SiNotion,
  SiGoogleanalytics,
  SiGoogle,
  SiHubspot,
  SiMailchimp,
  SiFramer,
  SiTypescript,
  SiPostgresql,
  SiGraphql
} from "react-icons/si";
import {
  FaPenNib,
  FaImage,
  FaLayerGroup,
  FaMeta,
  FaDiagramProject,
  FaChartLine,
  FaBullhorn,
  FaLaptopCode,
  FaCompass,
  FaPalette,
  FaRulerCombined,
  FaNetworkWired,
  FaWindowMaximize,
  FaSitemap
} from "react-icons/fa6";

// Map tool names to real vector logos with subtle styling
const iconMap = {
  "React": <SiReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-white dark:text-white" />,
  "TypeScript": <SiTypescript className="text-[#3178C6]" />,
  "Tailwind": <SiTailwindcss className="text-[#06B6D4]" />,
  "Figma": <SiFigma className="text-[#F24E1E]" />,
  "Framer": <SiFramer className="text-[#0055FF]" />,
  "Design Systems": <FaRulerCombined className="text-[#ff5a1f]" />,
  "UI Systems": <FaLayerGroup className="text-[#ff5a1f]" />,
  "Brand Strategy": <FaCompass className="text-orange-500" />,
  "Visual Identity": <FaPalette className="text-orange-500" />,
  "UI Design": <FaPenNib className="text-orange-500" />,
  "Development": <FaLaptopCode className="text-orange-500" />,
  "Analytics": <SiGoogleanalytics className="text-[#E37400]" />,
  "Node.js": <SiReact className="text-[#339933]" />, // Fallback or import Node
  "PostgreSQL": <SiPostgresql className="text-[#4169E1]" />,
  "APIs": <FaNetworkWired className="text-slate-400" />
};

// Map service titles to professional orange icons
const serviceIconMap = {
  "Web Design": <FaPalette className="text-orange-500" size={24} />,
  "Web Development": <FaLaptopCode className="text-orange-500" size={24} />,
  "UI/UX Design": <FaRulerCombined className="text-orange-500" size={24} />,
  "Brand Identity": <FaPenNib className="text-orange-500" size={24} />,
  "Landing Pages": <FaWindowMaximize className="text-orange-500" size={24} />,
  "Custom Web Apps": <FaSitemap className="text-orange-500" size={24} />
};

function ServiceCard({ title, description, technologies = [] }) {
  const serviceIcon = serviceIconMap[title] || <FaLaptopCode className="text-orange-500" size={24} />;

  return (
    <div 
      className="flex flex-col justify-between rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/25 group"
    >
      <div>
        {/* Sleek icon wrapper */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 transition-transform duration-300 group-hover:scale-105">
          {serviceIcon}
        </div>
        <h3 className="text-xl font-bold text-[var(--text)] tracking-tight">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          {description}
        </p>
      </div>

      {technologies.length > 0 && (
        <div className="mt-8 border-t border-[var(--line)] pt-6">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] opacity-70 mb-3.5">
            Stack & Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <div 
                key={tech} 
                className="flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--panel-alt)] px-2.5 py-1.5 text-xs font-semibold text-[var(--text)]"
                title={tech}
              >
                <span className="flex items-center">{iconMap[tech] || <span>🛠️</span>}</span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceCard;
