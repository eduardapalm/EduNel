import Section from "./ui/Section";
import EduNel from "../assets/EduNel.jpeg";
import { aboutUs } from "@/constants";
import Tag from "./ui/Tag";

const AboutUs = () => {
  return (
    <div id="about" className="bg-color-5">
      <Section>
        <h2 className="sectionTitle text-n-1">Sobre Nós</h2>
        <div className="relative z-1 grid gap-10 lg:grid-cols-2">
          <div className="relative min-h-[39rem] border border-n-1/10 rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={EduNel}
                className="h-full w-full object-cover"
                width={630}
                alt="Robot Face Half"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 font-header">
              <div className="backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-2 text-n-1">
                  Nosso objetivo
                </h4>
                <p className="p mb-[3rem] text-n-2">
                  Our mission is to provide our clients with the tools and
                  support they need to succeed in the digital landscape.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {aboutUs.map((card) => (
              <div className="flex flex-col lg:flex-row items-center border rounded-lg backdrop-blur p-5 bg-color-3 backdrop-">
                <div className="">
                  <img
                    src={card.picture}
                    className="rounded-full mx-5 md:w-[8rem] lg:w-[15rem]"
                    width={100}
                    alt=""
                  />
                </div>

                <div className="flex flex-col lg:ml-10">
                  <h4 className="h4 text-color-2 font-semibold">{card.name}</h4>
                  <Tag content={card.position} />
                  <p className="text-sm mt-5 text-n-9">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutUs;
