import { useEffect, useRef } from "react";

export default function InfiniteCarousel({ images }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageWidth = container.firstElementChild.clientWidth;
    const threshold = imageWidth * (container.children.length / 4);
    if (!container) return;

    function createImageStrip() {
      const imageElements = Array.from(container.children);
      for (let i = 0; i < 3; i++) {
        imageElements.forEach((img) => {
          let clone = img.cloneNode(true);
          container.appendChild(clone);
        });
      }
    }

    createImageStrip();

    container.style.display = "flex";
    container.style.position = "absolute";
    container.style.whiteSpace = "nowrap";
    container.style.left = "0";

    let speed = 0.2;

    let position = 0;

    function animate() {
      position -= speed;
      container.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= threshold) {
        position = 0; // Zurücksetzen der Position, um Stottern zu vermeiden
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, [images]);

  return (
    <div className="flex items-center relative w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-[#f5f7fa] to-transparent z-10" />
      <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-[#f5f7fa] to-transparent z-10" />

      <div
        ref={containerRef}
        className="flex whitespace-nowrap gap-x-[100px] w-max relative"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="md:w-8 md:h-8 sm:w-[20px] sm:[20px] mx-1 grayscale brightness-110"
            alt="carousel"
          />
        ))}
      </div>
    </div>
  );
}
