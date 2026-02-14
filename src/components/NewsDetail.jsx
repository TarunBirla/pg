import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Calendar } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const NewsDetail = () => {
  const { id } = useParams();
  const location = useLocation();

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
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${news.image_url})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold">
              {news.title}
            </h1>

            <div className="flex items-center gap-2 mt-4 text-sm">
              <Calendar size={18} />
              <span>
                {new Date(news.createdAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full rounded-xl mb-8"
        />

        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: news.description }}
        />
      </section>

      <Footer />
    </>
  );
};

export default NewsDetail;
