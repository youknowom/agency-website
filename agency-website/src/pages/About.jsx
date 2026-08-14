import SectionTitle from "../components/SectionTitle";

const values = [
  "Strategic creativity over decoration",
  "Rapid iteration and transparent workflows",
  "High-performance technical engineering",
  "Data-driven product validation",
];

const credentials = [
  "Certified Google Cloud Partner",
  "HubSpot Agency Solutions Certification",
  "Awwwards Jury & Nominee Recognitions",
  "Interaction Design Foundation Corporate Partner",
];

const timeline = [
  {
    period: "2024 — Present",
    title: "Global Scale & Web3 Platforms",
    detail:
      "Expanded services to high-throughput cloud architectures, serverless frameworks, and integrated digital product launches.",
  },
  {
    period: "2021 — 2024",
    title: "Brand Systems & Web Development",
    detail:
      "Grew into a full-service team delivering robust, conversion-focused websites, design systems, and marketing frameworks.",
  },
  {
    period: "2019 — 2021",
    title: "Creative Production & Strategy",
    detail:
      "Founded as a design studio helping early-stage startups establish their visual presence and market authority.",
  },
];

const achievements = [
  "Successfully delivered 120+ digital systems worldwide",
  "Averaged a 40–180% increase in product conversions",
  "Trusted by product teams across North America, Europe, and Asia",
];

const capabilities = [
  "React & Next.js",
  "Tailwind CSS",
  "UI/UX Design",
  "High-Fidelity Prototyping",
  "Brand Architecture",
  "Growth Strategy",
  "SEO & Performance",
  "Figma Systems",
];

function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="About us"
        title="An agency built for clarity, craft, and conversion"
        description="We help teams move from scattered ideas to cohesive digital experiences that feel premium and perform under pressure."
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
          <p>
            WebCraft Studio partners with founders, marketing teams, and product
            leaders to shape digital experiences that look sharp and work
            harder.
          </p>
          <p>
            Our process balances research, storytelling, and technical precision
            so you can launch with confidence and scale with a clear direction.
          </p>
          <p>
            We combine strategy, design, and frontend execution to help
            ambitious companies turn ideas into products and campaigns that feel
            credible, modern, and measurable.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-[var(--text)]">
            Our Core Pillars
          </h3>
          <ul className="mt-6 space-y-4">
            {values.map((value) => (
              <li
                key={value}
                className="flex items-center gap-3 text-[var(--text)] opacity-90"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/10 text-sm font-bold text-orange-500">
                  ✓
                </span>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-8">
          <h3 className="text-2xl font-bold text-[var(--text)]">
            Agency Credentials
          </h3>
          <ul className="mt-6 space-y-4 text-[var(--muted)]">
            {credentials.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-8">
          <h3 className="text-2xl font-bold text-[var(--text)]">
            Our Journey
          </h3>
          <div className="mt-6 space-y-5">
            {timeline.map((item) => (
              <div
                key={item.title}
                className="border-l border-[var(--line)] pl-4"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                  {item.period}
                </p>
                <h4 className="mt-2 text-lg font-bold text-[var(--text)]">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-black text-[var(--text)]">
          Core Capabilities
        </h3>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-5 py-4 text-center font-bold text-[var(--text)] shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-[2rem] border border-white/5 bg-gradient-to-b from-[#161619]/90 to-[#0c0d0f]/90 p-8 text-white">
        <h3 className="text-2xl font-bold">Key Achievements</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {achievements.map((achievement) => (
            <div
              key={achievement}
              className="rounded-2xl border border-white/5 bg-white/5 p-5 text-sm leading-7 text-slate-200"
            >
              {achievement}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
