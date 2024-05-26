import INavigationItem from "../interfaces/INavigationItem";
import IAboutUsCards from "@/interfaces/IAboutUsCards";
import IServices from "../interfaces/IServices";
import Eduardo from "../assets/Eduardo.jpeg";
import Nelson from "../assets/Nelson.jpeg";
import switchgear from "../assets/switchgear.jpg";

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
    text: "Eduardo é um Profissional formado em Eletrotécnica com mais de 20 anos de experiência no mercado, registrado no CRT RJ.",
    picture: Eduardo,
  },
];

export const services: IServices[] = [
  {
    id: 0,

    title: "Manutenção em Geral",
    text: "Executamos a instalação de bombas elétricas, chuveiros, tomadas, interruptores three-way, além da instalação e troca de disjuntores.",
    image: switchgear,
  },
  {
    id: 1,
    title: "Instalação Residencial",
    text: "Cuidamos da montagem completa da instalação elétrica, abrangendo o painel de disjuntores, cabeamento e distribuição do circuito.",
    image: switchgear,
  },
  {
    id: 2,

    title: "Instalação de Medidor Padrão Light",
    text: "Realizamos a instalação de caixas CM1 e CM3, CDJ1 e CDJ3, além das hastes de aterramento, deixando o ambiente completamente preparado para a instalação do medidor.",
    image: switchgear,
  },
  {
    id: 3,
    title: "Aumento de Carga",
    text: "Efetuamos a conversão de sistema monofásico para trifásico e aumentamos a amperagem do circuito, incluindo a troca do ramal de entrada.",
    image: switchgear,
  },
];

export const whatsAppMessage: string =
  "Olá! Gostaria de saber mais sobre os serviços da empresa.";
