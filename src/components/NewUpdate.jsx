import React, { useEffect, useState } from "react";
import { Calendar, Search, Instagram, Linkedin } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import http from "../service/http";

const NewUpdate = () => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await http.get(`/common`);
      const Alldata = response.data?.data;
      setNews(Alldata?.news || []);
    } catch (err) {
      console.error("Error fetching common data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section
        className="w-full h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/newupdate.png')" }}
      />

      {/* Middle Image */}
      <section>
        <img src="/img/image.png" className="w-full  object-cover" />
      </section>

      {/* Main Blog Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* LEFT MAIN POST */}
        <div className="md:col-span-8 space-y-6">

          {/* TOP: FIRST NEWS ITEM AS FEATURED */}
          {news.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">

              {/* Left Text Side */}
              <div>
                <h2 className="text-3xl font-bold leading-snug">
                  {news[0]?.title}
                </h2>

                <div className="flex items-center text-gray-600 gap-2 text-sm">
                  <Calendar size={18} /> 
                  <span>
                    {new Date(news[0]?.createdAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <p
                  className="text-gray-700 text-[15px] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: news[0]?.description }}
                ></p>
              </div>

              {/* Right Image Side */}
              <div>
                <img
                  src={news[0]?.image_url}
                  className="rounded-xl w-full h-70 object-cover"
                />
              </div>
            </div>
          )}

          {/* BOTTOM GRID OF NEWS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-3">

            {news.slice(1, 4).map((item, index) => (
              <div key={index} className="rounded-xl">
                <img src={item.image_url} className="rounded-lg mb-3 w-full h-32 object-cover" />

                <h3 className="font-semibold text-[15px] leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                  <Calendar size={16} />{" "}
                  {new Date(item.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="md:col-span-4 space-y-10">

          {/* Search Box */}
          <div>
            <h4 className="font-semibold mb-2">Search</h4>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" size={18} />
            </div>
          </div>

          {/* Recent News */}
          <div>
            <h4 className="font-semibold mb-4">Recent News & Updates</h4>
            <div className="space-y-4">

              {news.slice(0, 3).map((item, index) => (
                <div key={index} className="flex gap-3">
                  <img
                    src={item.image_url}
                    className="w-20 h-16 rounded-md object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium leading-tight">{item.title}</p>
                    <p className="text-xs text-green-600 mt-1">
                      {new Date(item.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Follow Me */}
          <div>
            <h4 className="font-semibold mb-3">Follow Me</h4>
            <div className="flex gap-2">
              <Instagram size={22} className="text-[#37B8E1]" />
              <Linkedin size={22} className="text-[#37B8E1]" />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default NewUpdate;
