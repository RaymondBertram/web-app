import { useEffect, useRef } from "react";

export default function InfiniteCarousel({ images }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
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

    let speed = window.innerWidth < 768 ? 0.05 : 0.1; // Langsamer auf mobilen Geräten

    function animate() {
      let currentLeft = parseFloat(container.style.left);
      container.style.left = currentLeft - speed + "px";

      if (
        Math.abs(currentLeft) >=
        container.firstElementChild.clientWidth *
          (container.children.length / 4)
      ) {
        let imagesToMove = Array.from(container.children).slice(
          0,
          container.children.length / 4
        );
        imagesToMove.forEach((img) => {
          let clone = img.cloneNode(true);
          container.appendChild(clone);
          container.removeChild(img);
        });
        container.style.left = "0px";
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, [images]);

  return (
    <div className="flex items-center relative w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent z-10" />
      <div
        ref={containerRef}
        className="flex whitespace-nowrap gap-x-6 w-max relative"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="md:w-20 md:h-20 sm:w-40 sm:h-40 object-cover mx-1 grayscale"
            alt="carousel"
          />
        ))}
      </div>
    </div>
  );
}
