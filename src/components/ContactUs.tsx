import { IoCall, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { socials } from "@/constants";
import Section from "./ui/Section";

const ContactUs = () => {
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case "whatsapp":
        return <IoLogoWhatsapp className="socialIcon" />;
      case "instagram":
        return <IoLogoInstagram className="socialIcon" />;
      case "phone":
        return <IoCall className="socialIcon" />;
      default:
        return;
    }
  };

  const phoneFormatted = (phoneNumber: string) => {
    return phoneNumber.slice(0, 5) + "-" + phoneNumber.slice(5);
  };

  return (
    <Section className="xl:items-start">
      <h2 className="sectionTitle text-color-2">Entre em Contato</h2>

      <p className="sectionSubtitle text-n-4">
        Entre em contato conosco para obter mais informações sobre nossos
        serviços.
      </p>

      <div className="grid md:grid-cols-3 gap-5 m-auto lg:m-0 lg:w-full">
        {socials.map((social) => (
          <div key={social.id} className="socialContainer">
            {iconSwitch(social.iconType)}
            <div className="flex flex-col w-4/5">
              <h4>{social.title}</h4>
              {social.list ? (
                <ul>
                  {social.list.map((phone, index) => (
                    <li key={index}>
                      <a
                        className="underline text-color-1 cursor-pointer"
                        href={`${social.link}+5521${phone}`}
                      >
                        (21) {phoneFormatted(phone)}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <a
                  className={`${!social.address && "underline text-color-1 cursor-pointer"}`}
                  href={social.link}
                  target="_blank"
                >
                  {social.text}
                  {social.address && (
                    <span className="underline text-color-1 cursor-pointer">
                      {social.address}
                    </span>
                  )}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ContactUs;
