import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useLocation } from "react-router-dom";
import { navigation } from "../constants";
import { useState } from "react";
import edunelLogo from "../assets/edunelLogo.png";
import { Button } from "./ui/button";
import { TextAlignJustifyIcon, Cross1Icon } from "@radix-ui/react-icons";
import mobileMenuBg from "../assets/svg/mobileMenuBg.svg";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b lg:backdrop-blur-sm ${
        openNavigation ? "" : "backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#banner" className="block w-[4rem] xl:mr-8">
          <img src={edunelLogo} alt="EduNel Logo" width={60} height={60} />
        </a>

        <nav
          className={`${
            openNavigation
              ? "flex flex-col text-center h-full pt-[12rem]"
              : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0  lg:static lg:flex lg:mx-auto lg:bg-transparent text-neutral-700 overflow-hidden`}
        >
          {openNavigation && (
            <img
              className="absolute top-0 opacity-50"
              src={mobileMenuBg}
              alt=""
            />
          )}

          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className={`block relative text-2xl uppercase transition-colors ${
                item.onlyMobile ? "lg:hidden" : ""
              } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs font-semibold ${
                item.url === pathName.hash ? "z-2" : ""
              } lg:leading-5 xl:px-12`}
              onClick={handleClick}
            >
              {item.title}
            </a>
          ))}
        </nav>

        <Button className="hidden lg:flex">Entre em Contato</Button>
        <Button onClick={toggleNavigation} className="lg:hidden" size="icon">
          {openNavigation ? <Cross1Icon /> : <TextAlignJustifyIcon />}
        </Button>
      </div>
    </div>
  );
};

export default Header;
