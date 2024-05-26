import Section from "./Section";
import bannerImg from "../assets/bannerImg.png";
import bannerImgBg from "../assets/bannerImgBg.png";

const Banner = () => {
  return (
    <Section id="banner" className="w-full flex-col lg:flex-row">
      <div className="lg:px-7 flex flex-col justify-center h-full w-full md:w-[60%] text-color-2 text-center lg:text-left 2xl:pl-40">
        <h1 className="font-bold font-main text-4xl md:text-5xl 2xl:text-7xl w-full">
          Serviços Elétricos
          <br />
          Residenciais e Comerciais
        </h1>
        <p className="text-2xl pt-3 2xl:w-[40rem] 2xl:text-2xl">
          Soluções de Qualidade para Problemas Urgentes. Profissionais
          competentes e capacitados para atender a sua necessidade.
        </p>
      </div>

      <div className="w-[50%] flex items-center justify-center pb-10 pt-10">
        <img
          src={bannerImgBg}
          className="absolute mx-auto 2xl:w-[45rem]"
          width={580}
        />

        <img
          className="rounded-sm backdrop-blur-0 border-transparent
          py-auto"
          src={bannerImg}
          width={250}
        />
      </div>
    </Section>
  );
};

export default Banner;
