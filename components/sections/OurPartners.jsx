import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const OurPartners = () => {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", // Apple
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Netflix_2015_logo.svg", // Netflix
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Amazon_icon.svg", // Amazon
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Noom_logo.svg", // Noom
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Uber_logo_2018.svg", // Uber
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Tesla_Motors.svg", // Tesla
  ];

  return (
    <div className="w-full py-10 paddings">
      <Carousel
        opts={{ loop: true, auto: true, autoSpeed: 4000, align: "start" }}
        className="relative"
      >
        <CarouselContent>
          {logos.map((logo, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/6 md:basis-1/4 basis-1/3 flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                width={50}
                height={50}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="md:block hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>

        <CarouselIndicators />
      </Carousel>
    </div>
  );
};

export default OurPartners;
