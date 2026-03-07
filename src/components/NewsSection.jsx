import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import http from "../service/http";
import { useNavigate } from "react-router-dom";

export default function NewsSection() {
  const sliderRef = useRef(null);
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = async () => {
    try {
      const response = await http.get(`/common`);
      console.log("Fetched data:", response.data);
      const Alldata = response.data?.data;

      setNews(Alldata?.news);
    } catch (err) {
      console.error("Error fetching commen data:", err);
    }
  };
  useEffect(() => {
  const isMobile = window.innerWidth < 768;

  if (!isMobile || news.length === 0) return;

  const interval = setInterval(() => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % news.length;

      const cardWidth = sliderRef.current.children[0].offsetWidth;

      sliderRef.current.scrollTo({
        left: next * cardWidth,
        behavior: "smooth",
      });

      return next;
    });
  }, 3000);

  return () => clearInterval(interval);
}, [news]);

useEffect(() => {
  const slider = sliderRef.current;

  const handleScroll = () => {
    const slides = Array.from(slider.children);

    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const distance = Math.abs(rect.left);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  };

  slider.addEventListener("scroll", handleScroll);

  return () => slider.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
    fetchData();
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);

    const cardWidth = sliderRef.current.children[0].offsetWidth;

    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };
  const scrollLeft = () => {
    const cardWidth = sliderRef.current.children[0].offsetWidth;

    sliderRef.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const cardWidth = sliderRef.current.children[0].offsetWidth;

    sliderRef.current.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();
  const displayNews =
    news.length >= 3 ? news : [...news, ...Array(3 - news.length).fill(null)];

  return (
    <section className="w-full bg-white py-16  max-w-6xl mx-auto px-5">
      {/* Heading */}
      <div className="mb-12">
        <p className="text-green-600 font-semibold tracking-wide">BLOG</p>
        <h2 className="text-4xl font-bold mt-2">News & Updates</h2>
      </div>

      {/* Slider Row */}
      <div className="relative w-full max-w-7xl mx-auto">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth"
        >
          
          {displayNews.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (!item) return;

                if (item.id === 2) {
                  window.open(
                    "https://theprint.in/ani-press-releases/premier-global-school-unveils-ambitious-plans-for-state-of-the-art-education-hub-in-sonarpur-west-bengal/1921389/",
                    "_blank",
                  );
                } else if (item.id === 3) {
                  window.open(
                    "https://apacentrepreneur.com/mohammad-jamaluddin-razvi/",
                    "_blank",
                  );
                } else {
                  navigate(`/news/${item.id}`, { state: item });
                }
              }}
              className="snap-start min-w-full md:min-w-[33.33%] transition p-4"
              // className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar"
            >
              {item ? (
                <>
                  <img
                    src={item.image_url || "/Mohammad-Jamaluddin-Razvi.jpg"}
                    alt={item.title}
                    className="w-full h-48 object-cover mb-4"
                  />

                  <p className="text-gray-500 text-sm mb-2">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>

                  <h3 className="font-bold text-lg mb-3 leading-tight">
                    {item.title}
                  </h3>

                  <div
                    className="text-gray-600 text-sm leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </>
              ) : (
                <div className="w-full h-[220px] bg-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex justify-center gap-1 mt-6">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={scrollRight}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <FaChevronRight />
          </button>
        </div>
        {/* Mobile Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {news.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                currentIndex === index ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <style>
        {`
          /* Hide scrollbar for Chrome, Safari, Edge */

          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }


            `}
      </style>
    </section>
  );
}
