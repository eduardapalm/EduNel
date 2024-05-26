import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useLocation } from "react-router-dom";
import { navigation } from "../constants";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { TextAlignJustifyIcon, Cross1Icon } from "@radix-ui/react-icons";

import { IoFlashSharp } from "react-icons/io5";
import mobileMenuBg from "../assets/svg/mobileMenuBg.svg";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  useEffect(() => {
    enablePageScroll();
  }, []);

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
      className={`fixed top-0 left-0 w-full z-50 border-b lg:backdrop-blur-lg font-header text-color-2 ${
        openNavigation ? "bg-white" : "backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#banner" className="xl:mr-8 flex items-center justify-center">
          <IoFlashSharp className="text-2xl pt-1" color="#EC651D" />
          <h1 className="text-color-1 text-2xl font-extrabold">EduNel</h1>
        </a>

        <nav
          className={`${
            openNavigation
              ? "flex flex-col text-center h-full lg:flex-row lg:pt-0 top-0 pb-10"
              : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0  lg:static lg:flex lg:ml-auto lg:mr-4 lg:bg-transparent text-neutral-700 overflow-hidden bg-white`}
        >
          {openNavigation && (
            <img
              className="absolute top-0 opacity-20 lg:hidden"
              src={mobileMenuBg}
              alt=""
            />
          )}

          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className={`relative transition-colors ${
                item.onlyMobile ? "lg:hidden" : ""
              } px-6 py-6 md:py-8 lg:-mr-0.25 text-md font-semibold ${
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
