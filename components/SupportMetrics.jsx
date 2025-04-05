import React from "react";

const SupportMetrics = () => {
  return (
    <div className="pb-12 bg-beige">
      <div className="max-w-6xl gap-10 px-6 m-auto text-center lg:grid lg:grid-cols-3 text-dark-purple">
        <div className="pb-12">
          <h1 className="text-8xl">60+</h1>
          <p className="text-2xl font-[Overpass]">EAP partners</p>
        </div>
        <div className="pb-12">
          <h1 className="text-8xl">24 hrs</h1>
          <p className="text-2xl font-[Overpass]">
            <span className="block mb-2">Connect with a therapist</span>
            <span>within 24-hours</span>
          </p>
        </div>
        <div className="pb-12">
          <h1 className="text-8xl">30k+</h1>
          <p className="text-2xl font-[Overpass]">
            EAP sessions <br className="hidden sm:inline" />
            every month
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportMetrics;
