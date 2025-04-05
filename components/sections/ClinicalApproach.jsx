"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const ClinicalApproach = () => {
  return (
    <section className="paddings py-10 min-h-[500px] flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-4  items-center w-full">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-gray-900">
            A clinical approach that works
          </h2>
          <p className="mt-4 text-gray-600 lg:text-xl">
            Since 2013, BetterHelp has supported millions of clients and
            hundreds of organizations by providing clinically-proven and
            evidence-based results for companies seeking to improve employee
            wellbeing.
          </p>
          <Button
            className="w-fit rounded-full self-center md:self-start mt-6"
            size="xl"
          >
            Request A Demo
          </Button>
        </div>

        {/* Stats Section */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center relative">
            <div className="lg:absolute left-0 top-1/2 lg:-translate-y-[30%]">
              <StatCard
                percentage={69}
                label="report improved anxiety symptoms"
              />
            </div>
            <div className="lg:absolute right-4 lg:-translate-y-14">
              <StatCard
                percentage={73}
                label="report improved depression symptoms"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 text-center lg:translate-y-20 md:translate-y-5 mt-2">
        * After 6 weeks of therapy on BetterHelp.
      </p>
    </section>
  );
};

const StatCard = ({ percentage, label }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 h-64 w-72 text-center flex flex-col justify-center items-center">
      {/* Semi-Circle Progress Bar */}
      <div className="relative flex justify-center">
        <svg viewBox="0 0 36 18" className="w-60 h-32">
          <path
            d="M 3 18 A 15 15 0 0 1 33 18"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="5"
          />
          <path
            d="M 3 18 A 15 15 0 0 1 33 18"
            fill="none"
            stroke="#4b0082"
            strokeWidth="4"
            strokeDasharray="30 30"
            strokeDashoffset={`${30 - (percentage / 100) * 30}`}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute top-20 text-3xl font-bold text-dark-purple">
          {percentage}%
        </span>
      </div>
      <p className="text-gray-700 mt-2 text-lg font-semibold">{label}</p>
    </div>
  );
};

export default ClinicalApproach;
