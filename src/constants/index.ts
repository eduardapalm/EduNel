import IAboutUsCards from "@/interfaces/IAboutUsCards";
import INavigationItem from "../interfaces/INavigationItem";
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
    title: "Sobre Nós",
    url: "#about",
  },
  {
    id: "2",
    title: "Nossos Serviços",
    url: "#services",
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
    name: "Nelson",
    position: "Eletricista e Co-Fundador",
    text: "Nelson is a seasoned entrepreneur with a passion for technology. He has over 10 years of experience in the tech industry.",
    picture: Nelson,
  },
  {
    name: "Eduardo",
    position: "Eletricista e Co-Fundador",
    text: "Eduardo is a seasoned entrepreneur with a passion for technology. He has over 10 years of experience in the tech industry.",
    picture: Eduardo,
  },
];
