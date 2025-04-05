import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicators,
} from "../ui/carousel";
import Image from "next/image";

const OurPartners = () => {
  const logos = [
    "https://assets.betterhelp.com/bhorg/bpa-health.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/canopy.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/corpcare.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/lifematters.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/magellan.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/mines.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/mutual-of-omaha.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/national.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/lucet.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/perspectives.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/pas.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/workpartners.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/wellspring.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/vital.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/ada-academy.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/acore.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/15five.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/alvotech.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/city-harvest.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/epic.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/fostersource.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/gallagher.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/o-hub.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/lockton.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/mci.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/melita.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/noom.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/peckham.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/right-networks.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/rmu.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/sandy-hook.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/sew.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/sicpa.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/teach-for-america.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/huel.png?v=71aae1049dcd",
    "https://assets.betterhelp.com/bhorg/mgc.png?v=71aae1049dcd",
  ];

  return (
    <section className="w-full py-16 bg-soft-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative group">
          <Carousel
            opts={{
              loop: true,
              align: "center",
              duration: 50,
              slidesToScroll: 6
            }}
            className="relative px-8"
          >
            <CarouselContent>
              {logos.map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="p-4">
                    <div className="relative h-20 w-full">
                      <Image
                        src={logo}
                        alt={`Partner Logo ${index + 1}`}
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-md"
                        sizes="(max-width: 768px) 100px, 150px"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
            <div className="mt-8">
              <CarouselIndicators />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
