import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    text: `"Empathia began with BetterHelp at the start of the pandemic, and it is tough to say how we would have made it through without them. BetterHelp’s ability to provide timely virtual sessions and synchronous / asynchronous chat to our clients supplied a perfect complement to our existing EAP network/services. We have valued our partnership and their willingness to listen and provide quality mental health solutions to Empathia and our clients."`,
    logo: "https://assets.betterhelp.com/bhorg/lifematters-white.png?v=71aae1049dcd",
    alt: "Empathia",
  },
  {
    text: `"To supplement our telehealth network, Magellan Healthcare partnered with BetterHelp three years ago to ensure fast access to high-quality care for our members. BetterHelp’s matching algorithm that takes into consideration each member’s individual preferences and needs, and a diversified group of 30,000+ licensed therapists are a few of the many features that members mention when saying they are very satisfied with the services. The BetterHelp team makes it easy...`,
    logo: "https://assets.betterhelp.com/bhorg/magellan-white.png?v=71aae1049dcd",
    alt: "Magellan",
  },
  {
    text: `"BetterHelp has been a great partner to our company, based in Northern California. We have customers that are delighted with the easy access to numerous choices of counselors through BetterHelp network which is seamlessly integrated into our own digital platform. We were one of the first EAPs to innovate this sort of clean partnership with a traditional B2C company to work with us B2B. Customers love the self scheduling tool and quick turnaround times."`,
    logo: "https://assets.betterhelp.com/bhorg/concern-white.png?v=71aae1049dcd",
    alt: "Concern",
  },
];

const Testimonial = () => {
  return (
    <section
      className="relative w-full flex flex-col items-center gap-7 bg-purple-600 py-12 px-4"
    >
      <Carousel opts={{ loop: true }} className="w-full max-w-6xl mx-auto mb-4">
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 basis-full">
              <div className="lg:flex justify-center text-center lg:text-left items-center gap-20">
                <blockquote className="text-xl font-light text-white my-7 lg:py-0 max-w-2xl mx-auto leading-9">
                  {testimonial.text}
                </blockquote>
                <div className="relative mt-8 w-48 h-24 mx-auto">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 192px, 256px"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-4">
          <CarouselPrevious
            className="static -translate-x-0 text-primary-300 hover:text-gray-400"
            variant="ghost"
          />
          <CarouselNext
            className="static -translate-x-0 text-primary-300 hover:text-gray-400"
            variant="ghost"
          />
        </div>
        <CarouselIndicators
          className="mt-8"
        />
      </Carousel>
      <Link href="/demo" className="bg-soft-white py-4 px-6 mt-12 hover:bg-lavender-mist rounded-full text-black">
        Request a demo
      </Link>
    </section>
  );
};
export default Testimonial;
