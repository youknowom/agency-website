import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Services"
        title="Everything your brand needs to move faster"
        description="From strategy to launch, we help teams refine their positioning, digital presence, and customer journey."
      />
      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
