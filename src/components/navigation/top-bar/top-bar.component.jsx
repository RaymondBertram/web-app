import React, { useState, useEffect } from "react";
import { BurgerMenu } from "../../index";
import company_logo from "../../../assets/logos/company_logo.png";
import burger_menu from "../../../assets/icons/burger.png";
import close from "../../../assets/icons/close.png";
import { motion, AnimatePresence } from "framer-motion";

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
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveNavItem(id);
          }
        });
      },
      {
        threshold: 0.6, // Triggert wenn 60% der Section sichtbar sind
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

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
      <div className="flex flex-row w-full justify-between items-center md:pt-4">
        <div className="logo-wrapper">
          <a href="/">
            <img src={company_logo} alt="logo" className="w-auto h-[80px]" />
          </a>
        </div>
        <ul className="hidden lg:flex lg:flex-row lg:gap-6 list-none m-0 p-0 overflow-hidden">
          {["start", "services", "prozess", "vorteile", "team", "kontakt"].map(
            (id) => (
              <li className="py-4" key={id}>
                <a
                  className={`relative font-medium text-black cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:bg-[#112233] after:transition-all after:duration-300 after:transform after:skew-y-[-2deg] ${
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

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: "10%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "10%" }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-white z-[1000] flex flex-col min-h-screen w-full"
              >
                <div className="flex justify-between items-center bg-white px-6 py-4 sticky top-0 z-50">
                  <a href="/">
                    <img
                      src={company_logo}
                      alt="logo"
                      className="w-auto h-[80px]"
                    />
                  </a>

                  <button onClick={() => setIsMenuOpen(false)}>
                    <img src={close} alt="close-menu" width={20} height={20} />
                  </button>
                </div>

                <motion.ul
                  className="flex flex-col items-center space-y-4 mt-10"
                  initial="hidden"
                  animate="visible"
                  variants={listVariants}
                >
                  {[
                    "start",
                    "services",
                    "prozess",
                    "vorteile",
                    "team",
                    "kontakt",
                  ].map((id) => (
                    <motion.li key={id} variants={itemVariants}>
                      <a
                        href={`#${id}`}
                        className="text-lg font-medium text-gray-700 hover:text-[#8247ff]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      </div>
    </nav>
  );
};
