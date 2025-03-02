import React from "react";
import { BurgerMenu } from "../../index";

import logo_ipsum from "../../../assets/logos/logoipsum-362.svg";

export const Navigation = () => {
  return (
    <nav className="flex flex-row sticky top-0 z-[100] px-4">
      <div className="flex flex-row w-full justify-between items-center py-4">
        <div className="logo-wrapper">
          <a href="#home">
            <img src={logo_ipsum} alt="logo" className="w-[150px] h-auto" />
          </a>
        </div>
        <ul className="hidden lg:flex lg:flex-row lg:gap-6 list-none m-0 p-0 overflow-hidden">
          <li>
            <a
              className="underline decoration-[#8247ff] link-text relative font-semibold cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#8247ff] after:transition-all after:duration-300 hover:after:w-full"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="link-text relative font-semibold cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#8247ff] after:transition-all after:duration-300 hover:after:w-full"
              href="#services"
            >
              Leistungen
            </a>
          </li>
          <li>
            <a
              className="link-text relative font-semibold cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#8247ff] after:transition-all after:duration-300 hover:after:w-full"
              href="#process"
            >
              Prozess
            </a>
          </li>
          <li>
            <a
              className="link-text relative font-semibold cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#8247ff] after:transition-all after:duration-300 hover:after:w-full"
              href="#advantages"
            >
              Vorteile
            </a>
          </li>
          <li>
            <a
              className="link-text relative font-semibold cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#8247ff] after:transition-all after:duration-300 hover:after:w-full"
              href="#team"
            >
              Team
            </a>
          </li>
          <li>
            <a
              className="link-text relative font-semibold cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#8247ff] after:transition-all after:duration-300 hover:after:w-full"
              href="#contact"
            >
              Kontakt
            </a>
          </li>
        </ul>
        <>
          <BurgerMenu />
        </>
      </div>
    </nav>
  );
};
