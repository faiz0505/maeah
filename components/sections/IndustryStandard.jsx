"use client";
import React from "react";
import { Button } from "../ui/button";
import { ShieldCheck, Lock, ClipboardList } from "lucide-react"; // Icons
import CustomImage from "../CustomImage";

const standards = [
  {
    title: "Privacy",
    description: "Our platform is secured by banking-grade 256-bit encryption.",
    icon: <Lock size={48} className="text-green-900" />,
  },
  {
    title: "Security",
    description: "BetterHelp is HITRUST Risk-based, 2-year (r2) Certified.",
    icon: <ShieldCheck size={48} className="text-green-900" />,
  },
  {
    title: "Quality",
    description:
      "Our platform is built on state-of-the-art technology, operations, and infrastructure.",
    icon: <ClipboardList size={48} className="text-green-900" />,
  },
];

const IndustryStandard = () => {
  return (
    <section className="py-16 bg-[#f5f1e9] paddings">
      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
        {/* Image */}
        <figure className="w-full flex justify-center">
          <CustomImage
            src="/assets/business-chat.svg"
            alt="Business Chat"
            width={300}
            height={300}
            className="max-w-[250px] md:max-w-[300px]"
          />
        </figure>

        {/* Text Content */}
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-900">
            We set the standard for the industry
          </h2>
          <p className="mt-4 text-gray-600 lg:text-lg max-w-2xl">
            As the gold standard of the online mental health industry, we
            proudly provide quality and clinically-proven results to our
            members. It is our goal to ensure total privacy, unparalleled
            security, and the highest-quality therapy for your employees.
          </p>
        </div>
      </div>

      {/* Icon Cards */}
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-12">
        {standards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xs space-y-4"
          >
            <div className="bg-dark-purple/10 p-5 rounded-full flex items-center justify-center w-20 h-20">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-dark-purple">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-12 flex justify-center">
        <Button size={"xl"} className={"rounded-full"}>Request a demo</Button>
      </div>
    </section>
  );
};

export default IndustryStandard;
