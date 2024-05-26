import { services, whatsAppMessage } from "@/constants";
import Section from "./Section";

const Services = () => {
  const message = encodeURIComponent(whatsAppMessage);
  console.log(message);

  return (
    <div id="services">
      <Section>
        <h2 className="sectionTitle text-color-2">Nossos Serviços</h2>
        <div className="grid gap-10 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center border rounded-lg p-5 bg-color-3 border-n-2 backdrop-blur"
            >
              <h4 className="h4 text-color-2 font-semibold">{service.title}</h4>
              <p className="text-sm mt-5 text-n-9">{service.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <a href={`https://wa.me/5521986107215?text=${message}`}>Teste</a>
    </div>
  );
};

export default Services;
