import Section from "./Section";
import bannerSvg from "../assets/svg/bannerSvg.svg";

const Banner = () => {
  return (
    <Section id="banner" className="w-full">
      <div className="px-7 flex flex-col items-center justify-center h-full pt-10 text-color-2 text-center">
        <h1 className="font-bold font-main text-4xl">
          Serviços Elétricos
          <br />
          Residenciais e Comerciais
        </h1>
        <p className="text-xl pt-5">
          Soluções de Qualidade para Problemas Urgentes.
        </p>
      </div>
      <img
        className="mt-[1%] p-10 border-2 rounded-sm backdrop-blur-lg lg:w-[50%] xl:w-[45%] 2xl:w-[30%] bg-slate-50"
        src={bannerSvg}
        width={470}
      />
    </Section>
  );
};

export default Banner;
