import React from "react";
import Header from "./Header";


const Besiness = () => {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/besiness.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT OVER IMAGE */}
        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
          <div className="max-w-xl text-white">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2">
              <span className="w-15 h-[2px] bg-[#40BD02]"></span>
              <p className="text-sm text-gray-200">Home / Businesses</p>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Businesses
            </h1>

            {/* Green line left */}
            <div className="flex gap-3 items-start">
              <div className="w-[2px] bg-[#40BD02] h-20 mt-4"></div>

              {/* Description */}
              <p className="text-gray-200 leading-relaxed text-sm md:text-base max-w-md">
                Building upon its international expertise, Premier Group has
                diversified its presence in India across multiple high-growth
                sectors, aligned with its philosophy of purpose-driven progress
                and community upliftment
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* SECOND IMAGE */}
      <section className="w-full">
        <img
          src="/img/image.png"
          alt="Banner"
          className="w-full object-cover"
        />
      </section>
    </>
  );
};

export default Besiness;
