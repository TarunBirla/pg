
import React from "react";

const GlobalMap = () => {
    return (
    <>
   <section
      className="
        w-full 
        py-16 md:py-24 
        px-6 md:px-20 
        text-center 
        bg-gradient-to-b 
        from-[#DBF1FF] 
        to-[#FFFFFF]
      "
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Global Presence
      </h1>

      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-10 line-clamp-4">
        At Premier Group, our guiding principle is “Growth with Purpose.” 
        This ethos underpins our steadfast commitment to creating sustainable 
        value and generating a positive impact across our diverse endeavours. 
        From our origins as a significant player in the global apparel sector, 
        Premier Group’s journey has been one of continuous and strategic growth. 
        Our vision remains resolute: to create lasting value and make a meaningful 
        difference in every industry we engage with.
      </p>

      <img
        src="/img/mapimage.png"
        alt="Global Map"
        className="mx-auto w-full max-w-4xl"
      />
    </section>
        
    </>

    )
    ;
};

export default GlobalMap;