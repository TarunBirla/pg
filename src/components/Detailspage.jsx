import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import http from "../service/http";
import JourneyTimeline from "./JourneyTimeline";
import { useParams } from "react-router-dom";

const Detailspage = () => {
  const { id } = useParams();
  const [business, setbusiness] = useState([]);
  const [singlebusiness, setSinglebusiness] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    try {
      const response = await http.get(`/common`);
      const Alldata = response.data?.data;

      const businessData = Alldata?.business || [];
      setbusiness(businessData);

      // id match
      const matched = businessData.find((item) => item.id === Number(id));
      setSinglebusiness(matched);

    } catch (err) {
      console.error("Error fetching commen data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
   if (!singlebusiness) return <p>Loading...</p>;
  return (
    <>
      <Header />

      <section
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[85vh] bg-cover md:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/besiness.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
          <div className="max-w-4xl text-white mt-10 md:mt-0">
            <div className="flex items-center gap-2">
              <span className="w-15 h-[2px] bg-[#40BD02]"></span>
              <p className="text-sm text-gray-200">Businesses</p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{singlebusiness.title}</h1>

            <div className="flex gap-3 items-start">
              <div className="w-[2px] bg-[#40BD02] h-20 mt-4"></div>

              <p className="text-gray-200 leading-relaxed text-sm md:text-base max-w-md">
                {singlebusiness.description || "Building upon its international expertise, Premier Group has diversified its presence in India across multiple high-growth sectors, aligned with its philosophy of purpose-driven progress and community upliftment"}
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

      <section className="w-full mt-10  mx-auto px-5 max-w-6xl">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">{singlebusiness.title}</h2>
       
        </div>
      </section>

      <section className="w-full mb-5  mx-auto px-5 max-w-6xl relative">
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="flex justify-start">
            <img  src={singlebusiness.image_url || "/dp1.png"} className="w-[350px] h-[250px] object-cover" />
          </div>

          <div className="relative">
           
            <p className="text-gray-600 text-sm">
                             {singlebusiness.description || "Building upon its international expertise, Premier Group has diversified its presence in India across multiple high-growth sectors, aligned with its philosophy of purpose-driven progress and community upliftment"}

            </p>
          </div>
        </div>

       
        
      </section>

  

      <Footer />
    </>
  );
};

export default Detailspage;
