import React, { useState } from "react";
import Image from "next/image";
import travelImages from "../pages/travel_images.js";

import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = travelImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      <BiLeftArrow className="left-arrow" onClick={prevSlide} />
      <BiRightArrow className="right-arrow" onClick={nextSlide} />

      {travelImages.map((image, key) => {
        return (
          <div
            key={image.index}
            className={key === current ? "slide active" : "slide"}
          >
            {key === current && (
              <div className="photoContainer">
                <Image
                  src={image.image}
                  alt=""
                  width={640}
                  height={480}
                  className="carouselItem"
                />
                <div className="photoInfo flex justify-between items-end">
                  <div className="location">
                    <p className="sm:text-4xl sm:font-semibold">{image.city}</p>
                    <p>{image.country}</p>
                  </div>
                  <div className="year sm:text-2xl sm:font-extrabold">
                    <p>{image.year}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
