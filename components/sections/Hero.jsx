import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
const Hero = ({ data }) => {
  return (
    <section className="relative lg:h-[88vh] h-[500px] flex items-center bg-black">
      <Image
        src={data.image}
        alt={"Hero Image"}
        className={"h-full w-full absolute object-cover opacity-50"}
        fill
        sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        priority={100}
        quality={100}
      />
      <div className="z-20 text-soft-white paddings w-full flex flex-col gap-y-6">
        <h1 className="text-3xl md:text-4xl text-soft-white lg:text-5xl text-center md:text-start">
          The #1 mental health <br />
          benefit
        </h1>
        <p className="lg:text-xl text-lg font-semibold text-center md:text-start text-pretty md:max-w-[60%]">
          {data.description}
        </p>
        <Button
          className="rounded-full self-center md:self-start"
          size="xl"
          asChild
        >
          <Link href="/demo">Request a demo</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
