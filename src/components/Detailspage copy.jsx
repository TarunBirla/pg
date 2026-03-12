import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import http from "../service/http";
import JourneyTimeline from "./JourneyTimeline";
import { useParams } from "react-router-dom";

const Detailspage = () => {
  const { title } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />

      <section
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[85vh] bg-cover md:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/besiness.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
          <div className="max-w-4xl text-white">
            <div className="flex items-center gap-2">
              <span className="w-15 h-[2px] bg-[#40BD02]"></span>
              <p className="text-sm text-gray-200">business</p>
            </div>

            <h1 className=" text-[30px] leading-[36px] sm:text-[40px] sm:leading-[48px] font-bold mb-4">{title}</h1>

            <div className="flex gap-3 items-start">
              <div className="w-[2px] bg-[#40BD02] h-20 mt-4"></div>

              <p className="text-gray-200 leading-relaxed  text-[14px] leading-[20px] sm:text-[18px] sm:leading-[25px] max-w-md">
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
          alt="Contact Banner"
          className="w-full object-cover"
        />
      </section>

      <section className="w-full py-12  mx-auto px-5 max-w-6xl">
        <div className="mb-10">
          <h2 className=" text-[30px] leading-[36px] sm:text-[40px] sm:leading-[48px] font-bold">Lorem Ipsum</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      <section className="w-full py-12 mx-auto px-5 max-w-6xl relative">
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="flex justify-start">
            <img src="/dp1.png" className="w-[350px] h-[250px] object-cover" />
          </div>

          <div className="relative">
            {/* <div className="absolute -left-6 top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-blue-500"></div> */}

            <h3 className="text-xl font-semibold mb-2">
              Lorem Ipsum is simply
            </h3>
            <p className="text-gray-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="text-left relative">
            {/* <div className="absolute -right-6 top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-green-500"></div> */}

            <h3 className="text-xl font-semibold mb-2">
              Lorem Ipsum is simply
            </h3>
            <p className="text-gray-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className="flex justify-end">
            <img src="/dp2.png" className="w-[350px] h-[250px] object-cover" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="flex justify-start">
            <img src="/dp1.png" className="w-[350px] h-[250px] object-cover " />
          </div>

          <div className="relative">
            {/* <div className="absolute -left-6 top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-blue-500"></div> */}

            <h3 className="text-xl font-semibold mb-2">
              Lorem Ipsum is simply
            </h3>
            <p className="text-gray-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-left relative">
            {/* <div className="absolute -right-6 top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-green-500"></div> */}

            <h3 className="text-xl font-semibold mb-2">
              Lorem Ipsum is simply
            </h3>
            <p className="text-gray-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="flex justify-end">
            <img src="/dp2.png" className="w-[350px] h-[250px] object-cover " />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="flex justify-start">
            <img src="/dp1.png" className="w-[350px] h-[250px] object-cover " />
          </div>

          <div className="relative">
            {/* <div className="absolute -left-6 top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-blue-500"></div> */}

            <h3 className="text-xl font-semibold mb-2">
              Lorem Ipsum is simply
            </h3>
            <p className="text-gray-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className=" w-full h-[2px] bg-black "></div>
      </section>

     <section className="w-full py-12 mx-auto px-5 max-w-6xl">

  <div className="grid md:grid-cols-12 gap-6 items-center">

    {/* Left Section */}
    <div className="md:col-span-8 bg-gray-100 p-6">
      <div className="grid md:grid-cols-2 gap-6 items-center">

        {/* Image */}
        <div>
          <img
            src="/dp1.png"
            className="w-full h-[220px] object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Lorem Ipsum is simply
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type.
          </p>
        </div>

      </div>
    </div>

    {/* Right Image Section */}
    <div className="md:col-span-4 relative">

      <img
        src="/dp3.png"
        className="w-full h-[270px] "
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <h3 className="text-lg font-semibold">
          Lorem Ipsum is simply
        </h3>

        <p className="text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

    </div>

  </div>
  <div className="grid md:grid-cols-12 mt-5 gap-6 items-center">

  {/* Right Image Section */}
    <div className="md:col-span-4 relative">

      <img
        src="/dp3.png"
        className="w-full h-[270px] "
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <h3 className="text-lg font-semibold">
          Lorem Ipsum is simply
        </h3>

        <p className="text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

    </div>
    {/* Left Section */}
    <div className="md:col-span-8 bg-gray-100 p-6">
      <div className="grid md:grid-cols-2 gap-6 items-center">

        {/* Image */}
        <div>
          <img
            src="/dp1.png"
            className="w-full h-[220px] object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Lorem Ipsum is simply
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type.
          </p>
        </div>

      </div>
    </div>

  

  </div>

</section>

      <Footer />
    </>
  );
};

export default Detailspage;
