import INavigationItem from "../interfaces/INavigationItem";
import IAboutUsCards from "@/interfaces/IAboutUsCards";
import IServices from "../interfaces/IServices";
import Eduardo from "../assets/Eduardo.jpeg";
import Nelson from "../assets/Nelson.jpeg";
import switchgear from "../assets/switchgear.jpg";
import ISocials from "@/interfaces/ISocials";

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
    text: "Nelson é um Profissional formado em Eletrotécnica, com mais de 10 anos de experiência no mercado e registro no CRT-RJ.",
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

export const whatsAppMessage: string = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre os serviços da empresa."
);

export const phoneNumbers: string[] = ["986107215", "979659680"];

export const socials: ISocials[] = [
  {
    id: 0,
    title: "WhatsApp",
    iconType: "whatsapp",
    link: `https://wa.me/5521986107215?text=${whatsAppMessage}`,
    text: "Envie uma mensagem!",
  },
  {
    id: 1,
    title: "Instagram",
    iconType: "instagram",
    link: "https://www.instagram.com/edunel.eletrica?igshid=cm9sNWRzbmZ0MG82",
    text: "Siga nossa página ",
    address: "@edunel.eletrica",
  },
  {
    id: 2,
    title: "Telefone",
    iconType: "phone",
    link: "tel:",
    list: phoneNumbers,
  },
];
