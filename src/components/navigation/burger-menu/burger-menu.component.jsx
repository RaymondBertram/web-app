import React, { useState } from "react";

import burger_menu from "../../../assets/icons/burger.png";
import close from "../../../assets/icons/close.png";
import logo_ipsum from "../../../assets/logos/logoipsum-362.svg";

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <img
        src={burger_menu}
        alt="burger-menu"
        className="lg:hidden cursor-pointer relative"
        width={20}
        height={20}
        onClick={() => setIsMenuOpen(true)}
      />

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 animate-slide-down flex flex-col">
          <div className="flex justify-between items-center bg-white p-[2em] sticky top-0 z-50">
            <a href="#home">
              <img src={logo_ipsum} alt="logo" className="w-[150px] h-auto" />
            </a>

            <button onClick={() => setIsMenuOpen(false)}>
              <img src={close} alt="close-menu" width={20} height={20} />
            </button>
          </div>

          <ul className="flex flex-col items-center space-y-4 mt-10">
            {[
              { name: "Home", href: "#home" },
              { name: "Leistungen", href: "#services" },
              { name: "Prozess", href: "#process" },
              { name: "Vorteile", href: "#advantages" },
              { name: "Team", href: "#team" },
              { name: "Kontakt", href: "#contact" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-lg font-semibold text-gray-700 hover:text-[#8247ff]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
