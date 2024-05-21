import INavigationItem from "../interfaces/INavigationItem";

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
