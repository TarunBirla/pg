import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import http from "../service/http";
import JourneyTimeline from "./JourneyTimeline";
import { useParams } from "react-router-dom";

const Detailspage = () => {

  const { slug } = useParams();

  const [business, setBusiness] = useState([]);
  const [singlebusiness, setSinglebusiness] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // slug generator
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");
  };

  const fetchData = async () => {
    try {

      const response = await http.get(`/common`);
      const Alldata = response.data?.data;

      const businessData = Alldata?.business || [];
      setBusiness(businessData);

      // match slug
      const matched = businessData.find(
        (item) => createSlug(item.title) === slug
      );

      setSinglebusiness(matched);

    } catch (err) {
      console.error("Error fetching common data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  if (!singlebusiness) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center h-[60vh] text-xl font-semibold">
          Loading...
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[85vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/besiness.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
          <div className="max-w-4xl text-white mt-10 md:mt-0">

            <div className="flex items-center gap-2">
              <span className="w-15 h-[2px] bg-[#40BD02]"></span>
              <p className="text-sm text-gray-200">Businesses</p>
            </div>

            <h1 className="text-[30px] leading-[36px] sm:text-[40px] sm:leading-[48px] font-bold mb-4">
              {singlebusiness.title}
            </h1>

            <div className="flex gap-3 items-start">
              <div className="w-[2px] bg-[#40BD02] h-20 mt-4"></div>

              <p className="text-gray-200 text-[14px] sm:text-[18px] leading-[20px] sm:leading-[25px] max-w-md">
                {singlebusiness.description ||
                  "Building upon its international expertise, Premier Group has diversified its presence in India across multiple high-growth sectors aligned with its philosophy of purpose-driven progress and community upliftment."}
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

      {/* TITLE SECTION */}
      <section className="w-full mt-10 mx-auto px-5 max-w-6xl">

        <div className="mb-10">
          <h2 className="text-[30px] sm:text-[40px] font-bold">
            {singlebusiness.title}
          </h2>
        </div>

      </section>

      {/* CONTENT SECTION */}
      <section className="w-full mb-10 mx-auto px-5 max-w-6xl">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="flex justify-start">
            <img
              src={singlebusiness.image_url || "/dp1.png"}
              alt={singlebusiness.title}
              className="w-[350px] h-[250px] object-cover"
            />
          </div>

          <div>
            <p className="text-gray-600 text-[14px] sm:text-[18px] leading-[20px] sm:leading-[25px]">
              {singlebusiness.description ||
                "Building upon its international expertise, Premier Group has diversified its presence in India across multiple high-growth sectors aligned with its philosophy of purpose-driven progress and community upliftment."}
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Detailspage;