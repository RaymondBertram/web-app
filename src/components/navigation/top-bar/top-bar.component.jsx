import React, { useState, useEffect } from "react";
import { BurgerMenu } from "../../index";
import logo_ipsum from "../../../assets/logos/logoipsum-362.svg";
import burger_menu from "../../../assets/icons/burger.png";
import close from "../../../assets/icons/close.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [flashBackground, setFlashBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Beim Runterscrollen ausblenden
      } else {
        setIsVisible(true); // Beim Hochscrollen einblenden
        setFlashBackground(true); // Hintergrundfarbe kurz auf Weiß setzen
        setTimeout(() => setFlashBackground(false), 2000); // Nach 1000ms smooth ausblenden
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      id="navigation"
      className={`fixed top-0 left-0 w-full z-[100] px-6 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
      } ${
        flashBackground
          ? "bg-white transition-colors duration-1000"
          : "bg-[#f5f7fa] transition-colors duration-1000"
      }`}
    >
      <div className="flex flex-row w-full justify-between items-center py-4">
        <div className="logo-wrapper">
          <a href="#home">
            <img src={logo_ipsum} alt="logo" className="w-[170px] h-[60px]" />
          </a>
        </div>
        <ul className="hidden lg:flex lg:flex-row lg:gap-6 list-none m-0 p-0 overflow-hidden">
          {["home", "services", "process", "advantages", "team", "contact"].map(
            (id) => (
              <li className="py-4" key={id}>
                <a
                  className={`relative font-semibold text-black cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:bg-[#8247ff] after:transition-all after:duration-300 after:transform after:skew-y-[-2deg] ${
                    activeNavItem === id ? "after:w-full" : "after:w-0"
                  } hover:after:w-full`}
                  href={`#${id}`}
                  onClick={() => setActiveNavItem(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>
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
            <div className="fixed inset-0 bg-white z-[1000] flex flex-col min-h-screen w-full">
              <div className="flex justify-between items-center bg-white p-[2em] sticky top-0 z-50">
                <a href="#home">
                  <img
                    src={logo_ipsum}
                    alt="logo"
                    className="w-[150px] h-auto"
                  />
                </a>

                <button onClick={() => setIsMenuOpen(false)}>
                  <img src={close} alt="close-menu" width={20} height={20} />
                </button>
              </div>

              <ul className="flex flex-col items-center space-y-4 mt-10">
                {[
                  "home",
                  "services",
                  "process",
                  "advantages",
                  "team",
                  "contact",
                ].map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-lg font-semibold text-gray-700 hover:text-[#8247ff]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      </div>
    </nav>
  );
};
