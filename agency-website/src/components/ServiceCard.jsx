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
  SiMailchimp
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
  FaCompass
} from "react-icons/fa6";

// Map names to React Icons safely with clean gray styling
const iconMap = {
  "React": <SiReact className="text-slate-400" />,
  "Next.js": <SiNextdotjs className="text-slate-400" />,
  "Tailwind": <SiTailwindcss className="text-slate-400" />,
  "Vite": <SiVite className="text-slate-400" />,
  "Figma": <SiFigma className="text-slate-400" />,
  "Notion": <SiNotion className="text-slate-400" />,
  "Miro": <FaDiagramProject className="text-slate-400" />,
  "Analytics": <SiGoogleanalytics className="text-slate-400" />,
  "Illustrator": <FaPenNib className="text-slate-400" />,
  "Photoshop": <FaImage className="text-slate-400" />,
  "Indesign": <FaLayerGroup className="text-slate-400" />,
  "Meta": <FaMeta className="text-slate-400" />,
  "Google": <SiGoogle className="text-slate-400" />,
  "HubSpot": <SiHubspot className="text-slate-400" />,
  "Mailchimp": <SiMailchimp className="text-slate-400" />
};

// Map service titles to professional orange icons
const serviceIconMap = {
  "Brand Strategy": <FaCompass className="text-orange-500" size={24} />,
  "Brand Design": <FaPenNib className="text-orange-500" size={24} />,
  "Web Development": <FaLaptopCode className="text-orange-500" size={24} />,
  "Growth Marketing": <FaBullhorn className="text-orange-500" size={24} />
};

function ServiceCard({ title, description, technologies = [] }) {
  const serviceIcon = serviceIconMap[title] || <FaLaptopCode className="text-orange-500" size={24} />;

  return (
    <div 
      className="flex flex-col justify-between rounded-[1.75rem] border border-white/5 bg-gradient-to-b from-[#161619]/90 to-[#0c0d0f]/90 p-8 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/25 group"
      style={{
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
      }}
    >
      <div>
        {/* Sleek icon wrapper */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 transition-transform duration-300 group-hover:scale-105">
          {serviceIcon}
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-400">
          {description}
        </p>
      </div>

      {technologies.length > 0 && (
        <div className="mt-8 border-t border-white/5 pt-6">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3.5">
            Stack & Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <div 
                key={tech} 
                className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-slate-300"
                title={tech}
              >
                <span className="text-sm">{iconMap[tech] || <span>🛠️</span>}</span>
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
