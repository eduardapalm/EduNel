import Section from "./Section";
import EduNel from "../assets/EduNel.jpeg";
import { aboutUs } from "@/constants";

const AboutUs = () => {
  return (
    <div>
      <Section className="flex items-left m-10">
        <h2 className="sectionTitle">Sobre Nós</h2>
        <div className="relative z-1 grid gap-10 lg:grid-cols-2">
          <div className="relative min-h-[39rem] border border-n-1/10 rounded-lg overflow-hidden">
            <div className="inset-0">
              <img
                src={EduNel}
                className="h-full w-full object-fill"
                width={630}
                alt="Robot Face Half"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 font-header">
              <div className="backdrop-blur-sm">
                <h4 className="h4 mb-2 text-n-1">Nosso objetivo</h4>
                <p className="p mb-[3rem] text-n-3">
                  We are a team of passionate individuals dedicated to creating
                  innovative solutions that empower our clients to achieve their
                  goals. Our mission is to provide our clients with the tools
                  and support they need to succeed in the digital landscape.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-10">
            {aboutUs.map((card) => (
              <div className="flex items-center border rounded-lg backdrop-blur p-5">
                <div className="">
                  <img
                    src={card.picture}
                    className="rounded-full mx-5"
                    width={500}
                    alt=""
                  />
                </div>

                <div className="flex flex-col ml-14">
                  <h4 className="h4 text-color-2 font-semibold">{card.name}</h4>
                  <p className="p bg-color-1 w-fit px-3 rounded text-n-1 font-bold">
                    {card.position}
                  </p>
                  <p className="p mt-5 text-n-9">{card.text}</p>
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
