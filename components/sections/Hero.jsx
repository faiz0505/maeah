import React from "react";
import CustomImage from "../CustomImage";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative lg:h-[88vh] h-[500px] bg-black flex items-center">
      <Image
        src={"/assets/hero.jpg"}
        alt={"Hero Image"}
        className={"h-full w-full absolute object-cover opacity-40"}
        fill
        sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        priority={100}
        quality={100}
      />
      <div className="z-20 text-soft-white paddings w-full flex flex-col gap-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-start">
          The #1 mental health <br />
          benefit
        </h1>
        <p className="lg:text-xl text-lg font-semibold text-center md:text-start text-pretty md:max-w-[60%]">
          BetterHelp is the largest provider in the space with 1000s of
          partners. We're the answer to avoiding employee burnout, improving
          productivity, and overall well-being in the workplace.
        </p>
        <Button
          className="w-fit rounded-full self-center md:self-start"
          size="xl"
        >
          Request A Demo
        </Button>
      </div>
    </section>
  );
};

export default Hero;
