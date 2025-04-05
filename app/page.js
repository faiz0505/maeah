import ClinicalApproach from "@/components/sections/ClinicalApproach";
import Hero from "@/components/sections/Hero";
import HitrustCertification from "@/components/sections/HitrustCertification";
import IndustryStandard from "@/components/sections/IndustryStandard";
import OurPartners from "@/components/sections/OurPartners";
import Reviews from "@/components/sections/Reviews";
import React from "react";
import Footer from "@/components/sections/Footer";
import { homeHero } from "./utils/dummyData";
const Page = () => {
  return (
    <div className="">
      <Hero data={homeHero} />
      <OurPartners />
      <ClinicalApproach />
      <IndustryStandard />
      <HitrustCertification />
      <Reviews/>
      <Footer/>
    </div>
  );
};

export default Page;
