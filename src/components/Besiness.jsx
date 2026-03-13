import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalMap from "./GlobalMap";
import http from "../service/http";
import { Link } from "react-router-dom";

const Besiness = () => {
  const [business, setbusiness] = useState([]);

  const fetchData = async () => {
    try {
      const response = await http.get(`/common`);
      console.log("Fetched data:", response.data);
      const Alldata = response.data?.data;
      setbusiness(Alldata?.business);
    } catch (err) {
      console.error("Error fetching commen data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, "-");
  };
  return (
    <>
      <Header />


      <section
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[85vh] bg-cover md:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/besiness.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
          <div className="max-w-xl text-white mt-10 md:mt-0">
            {/* <div className="flex items-center gap-2">
              <span className="w-15 h-[2px] bg-[#40BD02]"></span>
              <p className="text-sm text-gray-200">business</p>
            </div> */}

            <h1 className=" text-[30px] leading-[36px] sm:text-[40px] sm:leading-[48px] font-bold mb-4">Businesses</h1>

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

      <section className="w-full">
        <img
          src="/img/image.png"
          alt="Banner"
          className="w-full object-cover"
        />
      </section>

      <section className="w-full py-12 mb-5 mx-auto px-5 max-w-6xl">
        <div className="mb-10">
          <p className="text-[#86C200] font-semibold tracking-wide">Businesses</p>
          <h2 className=" text-[30px] leading-[36px] sm:text-[40px] sm:leading-[48px] font-bold">Businesses</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {business.slice(0, 5).map((item, index) => {
                const slug = createSlug(item.title);

                return (
                  <div
                    key={item.id}
                    className={`relative group cursor-pointer ${
                      index === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <Link to={`/businesses-details/${createSlug(item.title)}`}>
                      <img
                        src={item.image_url}
                        className="w-full h-48 object-cover"
                        alt={item.title}
                      />

                      <div className="absolute inset-0 bg-black/20 rounded"></div>

                      <p className="absolute bottom-6 left-3 text-white font-semibold text-lg">
                        {item.title}
                      </p>

                      <div className="absolute left-3 bottom-4 w-[75%] h-[1px] bg-gradient-to-r from-[#C1FF00] to-[#2295CA]"></div>

                      <span className="absolute bottom-2 right-3 text-white text-xl">
                        <img src="/img/icon.png" />
                      </span>
                    </Link>
                  </div>
                );
              })}
          </div>

          {business[5] && (
            <div className="relative h-full cursor-pointer">
              <img
                src={business[5].image_url}
                className="w-full h-full object-cover"
                alt={business[5].title}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <Link to={`/businesses-details/${business[5].id}`}>

              <p className="absolute bottom-12 left-6 text-white text-2xl font-semibold">
                {business[5].title}
              </p>

              <div className="absolute bottom-10 left-6 flex items-center">
                <div className="w-28 h-[2px] bg-gradient-to-r from-[#C1FF00] to-[#2295CA]"></div>
                <div className="w-[320px] hidden lg:block h-[2px] bg-white ml-1"></div>
                <div className="w-[200px] block lg:hidden h-[2px] bg-white ml-1"></div>
              </div>

              <div className="absolute bottom-3 left-6 flex items-center gap-2 text-white font-semibold text-lg">
                <span>Explore More</span>
                <span className="text-xl">⟶</span>
              </div>
                  </Link>

            </div>
          )}
        </div>
      </section>

      <img src="/img/line.png" />

      


      <Footer />
    </>
  );
};

export default Besiness;
