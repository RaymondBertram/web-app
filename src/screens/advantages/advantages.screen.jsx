import { useRef, useState, useEffect } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ArchiveBoxIcon,
  ArrowPathIcon,
  ForwardIcon,
  MapPinIcon,
  AcademicCapIcon,
} from "@heroicons/react/16/solid";
import { UnderlineSVG } from "../../components";

export const Advantages = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cardData = [
    {
      id: 1,
      title: "Schneller Zugang zu Entscheidungsdaten",
      text: "Standortdaten wie Fahrzeug- und Passantenfrequenzen in Sekunden abrufbar – ohne langes Warten auf externe Gutachten.",
      img: <ForwardIcon className="size-6" />,
    },
    {
      id: 2,
      title: "Bessere Standortentscheidungen",
      text: "Zuverlässige Frequenzdaten helfen, Potenziale zu erkennen, Risiken zu minimieren und fundierte Entscheidungen für Anmietung oder Entwicklung zu treffen.",
      img: <MapPinIcon className="size-6" />,
    },
    {
      id: 3,
      title: "Wettbewerbsvorteil sichern",
      text: "Mit aktuellen Frequenzdaten können Nutzer schneller und gezielter auf attraktive Lagen zugreifen – bevor es die Konkurrenz tut.",
      img: <ArchiveBoxIcon className="size-6" />,
    },
    {
      id: 4,
      title: "Optimierte Vermarktungschancen",
      text: "Makler und Eigentümer belegen mit objektiven Zahlen die Attraktivität ihrer Immobilien – ein starkes Argument in jedem Exposé oder Pitch.",
      img: <ArrowPathIcon className="size-6" />,
    },
    {
      id: 5,
      title: "Keine Fachkenntnisse nötig",
      text: "Intuitive Oberfläche, leicht verständliche Auswertungen – ideal für alle, die keine Analysten sind, aber schnell belastbare Insights brauchen.",
      img: <AcademicCapIcon className="size-6" />,
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      const scrollAmount = cardWidth + 16;

      const targetScrollLeft =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 300);
    }
  };

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateScrollButtons();
  }, []);

  return (
    <section className="flex flex-col px-0 py-25" id="vorteile">
      <h2 className=" text-center font-medium mb-10 text-black">
        <span className="relative text-[39px] text-black lg:text-5xl font-medium">
          Ihre Vorteile
          <UnderlineSVG />
        </span>
      </h2>

      <div className="flex items-center relative w-full overflow-x-auto md:overflow-hidden">
        {/* Left fade */}
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-[#f5f7fa] to-transparent z-10" />
        {/* Right fade */}
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-[#f5f7fa] to-transparent z-10" />

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-4 py-4 scrollbar-hide relative"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] h-[300px] lg:h-[250px] rounded-2xl bg-white shadow-lg flex flex-col p-6 mx-2"
            >
              <div>{card.img}</div>
              <h3 className="text-lg font-bold text-gray-900 mt-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4 md:flex">
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
          disabled={!canScrollLeft}
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
          disabled={!canScrollRight}
        >
          <ChevronRightIcon className="size-6" />
        </button>
      </div>
    </section>
  );
};
