import React from "react";
import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux";
const MyCarousel = () => {
  let sliders = [];
  sliders = useSelector((state) => state.sliders.sliders);
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {sliders.map((slider) => (
          <img key={slider.id}
            src={slider.image}
            alt="..."
          />
        ))}
        {/* <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        /> */}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
