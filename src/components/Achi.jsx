import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Thumbs,
  Controller,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import GlobalMap from "./GlobalMap";
import NewsSection from "./NewsSection";
import http from "../service/http";

const Achi = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);

  const sliderRef = useRef(null);
  const [hoverTab, setHoverTab] = useState(null);

  const [slides, setSlider] = useState([]);
  const [abouts, setAbouts] = useState([]);
  const [abouts1, setAbouts1] = useState([]);
  const [architech, setArchitech] = useState([]);
  const [section, setSection] = useState([]);
  const [tabsall, setTabsAll] = useState([]);
  const [active, setActive] = useState(null);
  const [currentIndex1, setCurrentIndex1] = useState(0);

  const fetchData = async () => {
    try {
      const response = await http.get(`/common`);
      console.log("Fetched data:", response.data);
      const Alldata = response.data?.data;
      setSlider(Alldata?.banners);
      setAbouts(Alldata?.about);
      setAbouts1(Alldata?.chairmanmsg[0]);

      setArchitech(Alldata?.architech);
      setSection(Alldata?.sections[0]);
      setTabsAll(Alldata?.barSections || []);

      // Set first tab active
      if (Alldata?.barSections?.length > 0) {
        setActive(Alldata.barSections[0].id);
      }
    } catch (err) {
      console.error("Error fetching commen data:", err);
    }
  };

  useEffect(() => {
  const isMobile = window.innerWidth < 1024;

  if (!isMobile || architech.length === 0) return;

  const interval = setInterval(() => {
    setCurrentIndex1((prev) => {
      const next = (prev + 1) % architech.length;

      const cardWidth = sliderRef1.current.children[0].offsetWidth;

      sliderRef1.current.scrollTo({
        left: next * cardWidth,
        behavior: "smooth",
      });

      return next;
    });
  }, 3000);

  return () => clearInterval(interval);
}, [architech]);



  const goToSlide1 = (index) => {
    setCurrentIndex1(index);

    sliderRef1.current?.scrollTo({
      left: index * 360,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (mainSwiperRef.current && thumbSwiperRef.current) {
      mainSwiperRef.current.controller.control = thumbSwiperRef.current;
      thumbSwiperRef.current.controller.control = mainSwiperRef.current;
    }
  }, [slides]);

  const sliderRef1 = useRef(null);

  const scrollLeft1 = () => {
    sliderRef1.current.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight1 = () => {
    sliderRef1.current.scrollBy({ left: 360, behavior: "smooth" });
  };
  // const activeTab = tabsall.find((t) => t.id === active);
  const activeTab = tabsall.find((t) => t.id === (hoverTab ?? active));

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
  const slider = sliderRef1.current;
  if (!slider) return;

 const handleScroll = () => {
  const slides = Array.from(slider.children);
  const sliderRect = slider.getBoundingClientRect();

  let closestIndex = 0;
  let closestDistance = Infinity;

  slides.forEach((slide, index) => {
    const rect = slide.getBoundingClientRect();
    const distance = Math.abs(rect.left - sliderRect.left);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  setCurrentIndex1(closestIndex);
};

  slider.addEventListener("scroll", handleScroll);

  return () => slider.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>
      
      <section >
        {/* Heading */}
        <div className="mb-5">
          <p className="text-green-600 font-semibold tracking-wide">COMPANY</p>
          <h2 className="text-3xl  mt-2">Architects of Growth</h2>
        </div>

        {/* Slider Row */}
        <div className="relative w-full max-w-7xl mx-auto">
          <div
            ref={sliderRef1}
            // className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth"
            className="flex gap-2 overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth "
          >
            {architech.map((item, index) => (
              <div
                key={item.id}
                // className="min-w-[100%] bg-white  transition p-4"
                className="snap-center min-w-[100%]  bg-white transition p-4"
                // className="min-w-full bg-white transition p-4"
              >
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-48 object-cover  mb-4"
                />

                <div
              
                  className="p-6 text-black flex flex-col justify-center h-[240px]  bg-gradient-to-b from-[#FFFFFF] to-[#CCCCCC]"
  
                >
                  <div
                    className="text-sm leading-relaxed "
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></div>

                  {/* DESIGNATION */}
                  <p className="mt-4 font-bold text-[#034570]">
                    {item?.designation}
                  </p>

                  {/* NAME */}
                  <p className="font-semibold mt-1 uppercase">{item?.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          {/* <div className="flex justify-end gap-4 mt-6"> */}
          <div className="hidden lg:flex justify-end gap-4 mt-6">
            <button
              onClick={scrollLeft1}
              className="w-10 h-10 flex items-center justify-center  border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={scrollRight1}
              className="w-10 h-10 flex items-center justify-center  border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              <FaChevronRight />
            </button>
          </div>
          {/* Mobile Dots */}
          <div className="flex lg:hidden justify-center gap-2 mt-6">
            {architech.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide1(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  currentIndex1 === index ? "bg-green-600" : "bg-gray-300"
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

     
    </>
  );
};

export default Achi;
