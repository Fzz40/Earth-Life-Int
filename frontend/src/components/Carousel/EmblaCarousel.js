import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./EmblaCarousel.css";

export function EmblaCarousel({ images }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 2000,
    }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, index) => (
          <div key={index} className="embla__slide">
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
