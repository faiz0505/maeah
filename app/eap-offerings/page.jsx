import React from 'react'
import Hero from "@/components/sections/Hero";
import { eapHero } from "../utils/dummyData";
import OurPartners from "@/components/sections/OurPartners";
import SupportMetrics from "@/components/SupportMetrics";
import UserBenefits from "@/components/UserBenefits";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/sections/Footer";
const Page = () => {
  return (
    <div>
      <div>
        <Hero data={eapHero}/>
        <OurPartners/>
        <SupportMetrics/>
        <UserBenefits />
        <Testimonial/>
        <Footer/>
      </div>
    </div>
  )
}

export default Page
