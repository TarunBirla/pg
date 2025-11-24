import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

const slides = [
  {
    image: "/img/home.png",
    title: "Growth With Purpose",
    desc: "Building a future where progress meets responsibility. Premier Group leads with purpose, innovation, and sustainable growth.",
  },
  {
    image: "/img/home2.png",
    title: "Innovation For Future",
    desc: "Driving change through cutting-edge innovation and smart solutions for tomorrow.",
  },
  {
    image: "/img/home3.png",
    title: "Sustainable Development",
    desc: "We focus on sustainable growth and community-driven progress for a better future.",
  },
  {
    image: "/img/home.png",
    title: "Growth With Purpose",
    desc: "Building a future where progress meets responsibility. Premier Group leads with purpose, innovation, and sustainable growth.",
  },
  {
    image: "/img/home2.png",
    title: "Innovation For Future",
    desc: "Driving change through cutting-edge innovation and smart solutions for tomorrow.",
  },
  {
    image: "/img/home3.png",
    title: "Sustainable Development",
    desc: "We focus on sustainable growth and community-driven progress for a better future.",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);

  return (
    <>
      <Header />

      <section className="relative w-full h-[90vh]">
        {/* MAIN SWIPER */}
        <Swiper
          modules={[Navigation, Pagination, Thumbs, Controller]}
          navigation={false}
          pagination={false}
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          controller={{ control: thumbSwiperRef.current }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
                  <div className="max-w-xl text-white">
                    <h1 className="text-4xl md:text-6xl font-bold ">
                      {slide.title}
                    </h1>

                    <div className="flex gap-4 mb-6">
                      <div className="w-[3px] bg-[#40BD02] h-20 mt-2"></div>
                      <p className="text-gray-200 mt-2 text-sm md:text-base leading-relaxed max-w-md">
                        {slide.desc}
                      </p>
                    </div>

                    <Link
                      to="/business"
                      className="inline-block px-6 py-2 ml-4  text-sm font-semibold text-white  bg-gradient-to-r from-[#40BD02] to-[#37B8E1] hover:scale-105 transition"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CENTERED NEXT / PREV BUTTONS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4">
          <button
            onClick={() => mainSwiperRef.current.slidePrev()}
            className="bg-[#C1FF00] hover:bg-white/40 p-3 rounded-full text-white transition"
          >
            <FaChevronLeft size={22} />
          </button>

          <button
            onClick={() => mainSwiperRef.current.slideNext()}
            className="bg-[#C1FF00] hover:bg-white/40 p-3 rounded-full text-white transition"
          >
            <FaChevronRight size={22} />
          </button>
        </div>

        {/* THUMBNAILS */}
        <div className="hidden lg:block absolute bottom-8 right-8 w-[500px] z-20">
          <Swiper
            modules={[Navigation, Thumbs, Controller]}
            slidesPerView={3}
            spaceBetween={15}
            onSwiper={(swiper) => (thumbSwiperRef.current = swiper)}
            controller={{ control: mainSwiperRef.current }}
            watchSlidesProgress={true}
            slideToClickedSlide={true}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => mainSwiperRef.current.slideTo(index)}
                  className={`cursor-pointer p-[3px] rounded-xl transition 
          ${
            currentIndex === index
              ? "bg-gradient-to-r from-[#37B8E1] to-[#40BD02] scale-105"
              : "bg-transparent"
          }`}
                >
                  <div className="bg-white/10 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt="thumb"
                      className="w-full h-24 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* SECOND IMAGE SECTION */}
      <section className="w-full">
        <img
          src="/img/image.png"
          alt="Banner"
          className="w-full object-cover"
        />
      </section>

      {/* Abouts SECTION */}

      <section className="w-full py-20  relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <p className="text-[#40BD02] font-semibold text-sm tracking-widest">
              ABOUT US
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight ">
              Building the future, <br /> leading the present
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-gray-600 text-base leading-relaxed mt-4 max-w-lg">
              Evolving from a global leader in apparel since 2008, Premier Group
              is now a dynamic conglomerate driving growth and creating positive
              impact across diverse sectors.
            </p>
          </div>

          {/* LEFT SIDE IMAGE */}
          <div>
            <img
              src="/img/Free Assessment.png"
              alt="About"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col justify-center">
            

            {/* STATS */}
            <div className="flex items-center gap-10 mb-6">
              <div>
                <h3 className="text-3xl font-bold">
                  15<span className="text-[#40BD02]">+</span>
                </h3>
                <p className="text-gray-500 text-sm">COMPANIES</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  200<span className="text-[#40BD02]">+</span>
                </h3>
                <p className="text-gray-500 text-sm">Employees</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  8<span className="text-[#40BD02]">+</span>
                </h3>
                <p className="text-gray-500 text-sm">Nations strong</p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              <span className="font-semibold text-[#37B8E1]">
                Premier Group:
              </span>
              Established in Vietnam in 2008, Premier Group began as a global
              leader in garment manufacturing and export and has since
              strategically evolved. Recognising opportunities to create wider
              impact and value, we’ve expanded into key sectors such as property
              development, building integrated townships with a focus on
              education and healthcare, engaging in fashion retail and
              e-commerce, and supporting communities through our non-profit arm.
              Our “Growth with Purpose” philosophy guides our diverse
              endeavours. Learn more about our journey.
            </p>

            {/* BUTTON */}
            <button className="bg-gradient-to-r from-[#40BD02] to-[#37B8E1] hover:bg-[#2FA000] text-white px-6 py-3 rounded-sm text-sm font-semibold w-fit shadow-md transition">
              READ MORE
            </button>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default Home;
