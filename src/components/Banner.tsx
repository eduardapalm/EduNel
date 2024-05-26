import Section from "./Section";
import bannerImg from "../assets/bannerImg.png";
import bannerImgBg from "../assets/bannerImgBg.png";

const Banner = () => {
  return (
    <Section id="banner" className="w-full flex-col lg:flex-row">
      <div className="flex flex-col justify-center h-full w-full md:w-[60%] text-color-2 text-center lg:text-left font-header">
        <h1 className="h1 font-extrabold text-color-1">EduNel</h1>
        <h2 className="h2 font-semibold text-3xl md:text-5xl 2xl:text-7xl w-full">
          Serviços Elétricos
          <br />
          Residenciais e Comerciais
        </h2>
        <p className="lg:w-[23rem] pt-3 text-sm">
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
