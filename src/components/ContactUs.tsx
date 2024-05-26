import { whatsAppMessage } from "@/constants";
import Section from "./ui/Section";

const ContactUs = () => {
  const message = encodeURIComponent(whatsAppMessage);
  return (
    <Section>
      <a href={`https://wa.me/5521986107215?text=${message}`}>Teste</a>
    </Section>
  );
};

export default ContactUs;
