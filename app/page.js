import ClinicalApproach from "@/components/sections/ClinicalApproach";
import Hero from "@/components/sections/Hero";
import HitrustCertification from "@/components/sections/HitrustCertification";
import IndustryStandard from "@/components/sections/IndustryStandard";
import OurPartners from "@/components/sections/OurPartners";
import Reviews from "@/components/sections/Reviews";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Hero />
      <OurPartners />
      <ClinicalApproach />
      <IndustryStandard />
      <HitrustCertification />
      <Reviews/>
    </div>
  );
};

export default page;
