import { useRef } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  AcademicCapIcon,
  AdjustmentsVerticalIcon,
  ArchiveBoxIcon,
  ArrowPathIcon,
} from "@heroicons/react/16/solid";

export const Advantages = () => {
  const scrollRef = useRef(null);

  const cardData = [
    {
      id: 1,
      title: "Schnelle Analyse",
      text: "Erhalten Sie eine schnelle und präzise Analyse Ihrer aktuellen Situation, um fundierte Entscheidungen zu treffen.",
      img: <AcademicCapIcon className="size-6" />,
    },
    {
      id: 2,
      title: "Individuelle Beratung",
      text: "Unsere Experten entwickeln maßgeschneiderte Lösungen, die perfekt auf Ihre spezifischen Bedürfnisse und Ziele abgestimmt sind.",
      img: <AdjustmentsVerticalIcon className="size-6" />,
    },
    {
      id: 3,
      title: "Maximale Effizienz",
      text: "Optimieren Sie Ihre Prozesse mit innovativen Strategien und sparen wertvolle Zeit sowie Ressourcen für nachhaltigen Erfolg.",
      img: <ArchiveBoxIcon className="size-6" />,
    },
    {
      id: 4,
      title: "Innovative Strategien",
      text: "Nutzen Sie kreative und zukunftsorientierte Strategien, um nachhaltiges Wachstum und langfristigen Erfolg sicherzustellen.",
      img: <ArrowPathIcon className="size-6" />,
    },
    {
      id: 5,
      title: "Höchste Qualität",
      text: "Profitieren Sie von erstklassigen Standards und bewährten Methoden, die exzellente Ergebnisse und nachhaltige Zufriedenheit garantieren.",
      img: <ArrowPathIcon className="size-6" />,
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = scrollRef.current.children[0].offsetWidth; // Dynamische Breite der Karte ermitteln
      const scrollAmount = cardWidth + 16; // Berücksichtigt den Abstand zwischen den Karten

      const targetScrollLeft =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="flex flex-col px-4 py-16" id="advantages">
      <h2 className="text-center font-semibold mb-10">Ihre Vorteile</h2>

      <div className="relative w-full">
        <div
          className="flex gap-4 overflow-x-auto no-scrollbar px-4 py-4 scrollbar-hide"
          ref={scrollRef}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              className="min-w-[90%] sm:min-w-[70%] md:min-w-[45%] lg:min-w-[30%] h-[300px] md:h-[200px] rounded-2xl bg-white shadow-lg flex flex-col p-6 mx-2"
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
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <ChevronRightIcon className="size-6" />
        </button>
      </div>
    </section>
  );
};
