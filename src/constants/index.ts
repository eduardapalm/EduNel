import INavigationItem from "../interfaces/INavigationItem";
import IAboutUsCards from "@/interfaces/IAboutUsCards";
import IServices from "../interfaces/IServices";
import Eduardo from "../assets/Eduardo.jpeg";
import Nelson from "../assets/Nelson.jpeg";

export const navigation: INavigationItem[] = [
  {
    id: "0",
    title: "Início",
    url: "#banner",
  },
  {
    id: "1",
    title: "Nossos Serviços",
    url: "#services",
  },
  {
    id: "2",
    title: "Sobre Nós",
    url: "#about",
  },
  {
    id: "3",
    title: "Entre em Contato",
    url: "#contact",
    onlyMobile: true,
  },
];

export const aboutUs: IAboutUsCards[] = [
  {
    id: 0,
    name: "Nelson",
    position: "Co-Fundador e Eletricista",
    text: "Nelson is a seasoned entrepreneur with a passion for technology. He has over 10 years of experience in the tech industry.",
    picture: Nelson,
  },
  {
    id: 1,
    name: "Eduardo",
    position: "Co-Fundador e Eletricista",
    text: "Eduardo is a seasoned entrepreneur with a passion for technology. He has over 10 years of experience in the tech industry.",
    picture: Eduardo,
  },
];

export const services: IServices[] = [
  {
    id: 0,
    title: "Desenvolvimento Web",
    text: "Desenvolvemos websites responsivos e otimizados para SEO, com foco na experiência do usuário.",
  },
  {
    id: 1,
    title: "Desenvolvimento Mobile",
    text: "Desenvolvemos aplicativos mobile para Android e iOS, com foco na experiência do usuário.",
  },
  {
    id: 2,
    title: "Consultoria",
    text: "Oferecemos consultoria para empresas que desejam melhorar sua presença online.",
  },
  {
    id: 3,
    title: "Marketing Digital",
    text: "Desenvolvemos estratégias de marketing digital para empresas que desejam aumentar sua presença online.",
  },
];

export const whatsAppMessage: string =
  "Olá! Gostaria de saber mais sobre os serviços da empresa.";
