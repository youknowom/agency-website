import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";
import Button from "../components/Button";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { testimonials } from "../data/testimonials";

function Home() {
  return (
    <>
      <Hero />

      {/* Intro Section */}
      <section
        id="intro"
        className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 border-t border-[var(--line)]"
      >
        <SectionTitle
          eyebrow="What we do"
          title="Your website should do more than look good."
          description="It should explain what you do, build trust, and make it easy for people to choose you. We combine strategy, design, and development to create digital experiences that do exactly that."
        />

        {/* 3 Capabilities */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-8">
            <p className="text-sm font-bold text-orange-500 uppercase tracking-widest">
              01 &mdash; Strategy
            </p>
            <h3 className="mt-4 text-xl font-bold text-[var(--text)]">
              Clear positioning
            </h3>
            <p className="mt-2.5 text-sm text-[var(--muted)] leading-relaxed">
              Clear positioning, structure, and user journeys.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-8">
            <p className="text-sm font-bold text-orange-500 uppercase tracking-widest">
              02 &mdash; Design
            </p>
            <h3 className="mt-4 text-xl font-bold text-[var(--text)]">
              Modern interfaces
            </h3>
            <p className="mt-2.5 text-sm text-[var(--muted)] leading-relaxed">
              Modern interfaces built around your brand and audience.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-8">
            <p className="text-sm font-bold text-orange-500 uppercase tracking-widest">
              03 &mdash; Development
            </p>
            <h3 className="mt-4 text-xl font-bold text-[var(--text)]">
              Production-ready builds
            </h3>
            <p className="mt-2.5 text-sm text-[var(--muted)] leading-relaxed">
              Fast, responsive, production-ready websites and web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 border-t border-[var(--line)]"
      >
        <SectionTitle
          eyebrow="Our services"
          title="Everything you need to build a better digital presence."
          description="We provide comprehensive digital solutions tailored to elevate your brand's authority and user experience."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 border-t border-[var(--line)]"
      >
        <SectionTitle
          eyebrow="Our process"
          title="From idea to launch, without the agency headache."
          description="We use a transparent, collaborative roadmap to ensure your project stays on track and launches cleanly."
        />

        {/* 4 Process steps */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <div className="text-4xl font-black text-orange-500/20 mb-4">01</div>
            <h3 className="text-lg font-bold text-[var(--text)]">Discover</h3>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
              We understand your business, audience, goals, and what needs to be solved.
            </p>
          </div>

          <div className="relative">
            <div className="text-4xl font-black text-orange-500/20 mb-4">02</div>
            <h3 className="text-lg font-bold text-[var(--text)]">Design</h3>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
              We create the visual direction, user experience, and interface.
            </p>
          </div>

          <div className="relative">
            <div className="text-4xl font-black text-orange-500/20 mb-4">03</div>
            <h3 className="text-lg font-bold text-[var(--text)]">Build</h3>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
              We turn the approved design into a fast, responsive, production-ready website or application.
            </p>
          </div>

          <div className="relative">
            <div className="text-4xl font-black text-orange-500/20 mb-4">04</div>
            <h3 className="text-lg font-bold text-[var(--text)]">Launch</h3>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
              We test everything, deploy it, and make sure your new digital experience is ready for the real world.
            </p>
          </div>
        </div>
      </section>

      {/* Why WebCraft Section */}
      <section
        id="why"
        className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 border-t border-[var(--line)]"
      >
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column Description */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-3">
              Why WebCraft
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text)] tracking-tight leading-tight">
              Small team.
              <br />
              Better communication.
              <br />
              Better work.
            </h2>
            <p className="mt-4 text-base text-[var(--muted)] leading-relaxed">
              You don't need another agency that disappears after the kickoff call. You work directly with the people designing and building your project.
            </p>
          </div>

          {/* Right Column Points */}
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
              <h3 className="text-base font-bold text-[var(--text)]">Direct collaboration</h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                Work directly with the designers and developers handling your project.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
              <h3 className="text-base font-bold text-[var(--text)]">Design + Development</h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                One team handles the entire digital experience instead of passing your project between vendors.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
              <h3 className="text-base font-bold text-[var(--text)]">Built for performance</h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                Clean code, responsive layouts, fast loading times, and a strong user experience.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
              <h3 className="text-base font-bold text-[var(--text)]">Business-focused</h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                Every design and development decision has a reason behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 border-t border-[var(--line)]"
      >
        <SectionTitle
          eyebrow="Selected work"
          title="A few projects we're proud of."
          description="A curated showcase of branding systems, landing pages, and web applications built for business impact."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-28 border-y border-[var(--line)]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Clients"
            title="Good work. Happy clients."
            description="What founders and marketing directors say about collaborating with WebCraft Studio."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8"
      >
        <SectionTitle
          eyebrow="FAQ"
          title="Before we start."
          description="Clear answers to common questions about starting a design or development project with us."
        />
        <FAQ />
      </section>

      
    </>
  );
}

export default Home;
