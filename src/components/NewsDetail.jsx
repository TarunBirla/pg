import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Calendar } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const NewsDetail = () => {
  const { id } = useParams();
  const location = useLocation();
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // Get object from navigation state
  const news = location.state;

  if (!news) {
    return (
      <>
        <Header />
        <div className="pt-40 text-center">
          News not found. Please go back.
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Banner */}
     <section
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[85vh] bg-cover md:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/news.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
          <div className="max-w-xl text-white">
           

            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>

            <div className="flex gap-3 items-start">
              {/* <div className="w-[2px] bg-[#40BD02] h-20 mt-4"></div> */}

              {/* <p className="text-gray-200 leading-relaxed text-sm md:text-base max-w-md">
                Building upon its international expertise, Premier Group has
                diversified its presence in India across multiple high-growth
                sectors, aligned with its philosophy of purpose-driven progress
                and community upliftment
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full  mb-8"
        />

        <h3 className="font-bold text-2xl leading-snug">
                  {news.title}
                </h3>


        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: news.description }}
        />
        <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                          <Calendar size={16} />{" "}
                          {new Date(news.createdAt).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </div>
      </section>

      <Footer />
    </>
  );
};

export default NewsDetail;
