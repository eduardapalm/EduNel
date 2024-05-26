import { services } from "@/constants";
import Section from "./ui/Section";

const Services = () => {
  return (
    <div id="services">
      <Section>
        <h2 className="sectionTitle text-color-2">Nossos Serviços</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center border rounded-lg p-6 bg-color-4 border-n-2 backdrop-blur overflow-hidden"
            >
              <img
                src={service.image}
                className="absolute z-0 object-cover w-full h-full rounded-lg top-0 left-0 opacity-5 hover:opacity-30 transition-opacity duration-200"
                alt=""
              />

              <div className="backdrop-blur-sm p-2 rounded-md pointer-events-none h-full flex flex-col items-center justify-center">
                <h4 className="h4 text-n-1 text-start w-full font-semibold z-30">
                  {service.title}
                </h4>
                <p className="text-sm mt-5 text-n-2 z-20">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;
