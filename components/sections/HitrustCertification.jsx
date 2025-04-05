"use client";
import React from "react";
import CustomImage from "../CustomImage";

const HitrustCertification = () => {
  return (
    <section className="py-10 w-full bg-dark-purple paddings flex items-center gap-10 justify-center flex-col sm:flex-row">
      <img
        src="https://assets.betterhelp.com/public_pages/betterhelporg/hitrust-2x.png?v=71aae1049dcd"
        alt=""
        height="100"
        width="100"
      />
      <p className="text-lg md:text-xl font-semibold text-soft-white text-center sm:text-start">
        Now more than ever it's crucially important to know who you can trust.
        <br />
        BetterHelp.com is now HITRUST certified.
      </p>
    </section>
  );
};

export default HitrustCertification;
