import React, { useState, useRef, useEffect } from "react";
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
import GlobalMap from "./GlobalMap";
import NewsSection from "./NewsSection";
import http from "../service/http";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);

  const sliderRef = useRef(null);
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const [slides, setSlider] = useState([]);
  const [abouts, setAbouts] = useState([]);
  const [architech, setArchitech] = useState([]);
  const [section, setSection] = useState([]);
  const [tabsall, setTabsAll] = useState([]);
  const [active, setActive] = useState(null);

  const fetchData = async () => {
    try {
      const response = await http.get(`/common`);
      console.log("Fetched data:", response.data);
      const Alldata = response.data?.data;
      setSlider(Alldata?.banners);
      setAbouts(Alldata?.about);
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
    fetchData();
  }, []);

  const activeTab = tabsall.find((t) => t.id === active);

  // Show loader until data arrives
  if (!activeTab) {
    return <div className="text-center py-10">Loading...</div>;
  }

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
                style={{ backgroundImage: `url(${slide.image_url})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
                  <div className="max-w-xl text-white">
                    <h1 className="text-4xl md:text-6xl font-bold ">
                      {slide.heading}
                    </h1>

                    <div className="flex gap-4 mb-6">
                      <div className="w-[3px] bg-[#40BD02] h-20 mt-2"></div>
                      <p
                        className="text-gray-200 mt-2 text-sm md:text-base leading-relaxed max-w-md"
                        dangerouslySetInnerHTML={{ __html: slide?.description }}
                      ></p>
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
                      src={item.image_url}
                      alt="thumb"
                      className="w-full h-24 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="block lg:hidden absolute bottom-8 right-8 w-[105px] z-20">
          <Swiper
            modules={[Navigation, Thumbs, Controller]}
            slidesPerView={2}
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
                      src={item.image_url}
                      alt="thumb"
                      className="w-full h-12 object-cover rounded-xl"
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

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {abouts?.title?.split(" ")?.map((word, index) =>
                (index + 1) % 3 === 0 ? (
                  <>
                    {word} <br />
                  </>
                ) : (
                  word + " "
                )
              )}
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p
              className="text-gray-600 text-base leading-relaxed mt-4 max-w-lg"
              dangerouslySetInnerHTML={{ __html: abouts?.summary }}
            ></p>
          </div>

          {/* LEFT SIDE IMAGE */}
          <div>
            <img
              src={abouts?.image_url || "/img/Free Assessment.png"}
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
                  {abouts?.companies_count}
                  <span className="text-[#40BD02]">+</span>
                </h3>
                <p className="text-gray-500 text-sm">COMPANIES</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  {abouts?.employee_count}
                  <span className="text-[#40BD02]">+</span>
                </h3>
                <p className="text-gray-500 text-sm">Employees</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  {abouts?.nations_count}
                  <span className="text-[#40BD02]">+</span>
                </h3>
                <p className="text-gray-500 text-sm">Nations strong</p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p
              className="text-gray-700 text-sm md:text-base leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: abouts?.description }}
            ></p>

            {/* BUTTON */}
            <button className="bg-gradient-to-r from-[#40BD02] to-[#37B8E1] hover:bg-[#2FA000] text-white px-6 py-3 rounded-sm text-sm font-semibold w-fit shadow-md transition">
              READ MORE
            </button>
          </div>
        </div>
      </section>

      {/* Busness SECTION */}

      <section className="w-full py-10">
        {/* Heading */}
        <div className="max-w-6xl mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
          <div className="flex flex-col justify-center">
            <p className="text-[#40BD02] font-semibold text-sm tracking-widest">
              BUSINESS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {section?.title?.split(" ")?.map((word, index) =>
                (index + 1) % 3 === 0 ? (
                  <>
                    {word} <br />
                  </>
                ) : (
                  word + " "
                )
              )}
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p
              className="text-gray-600 text-base leading-relaxed mt-4 max-w-lg"
              dangerouslySetInnerHTML={{ __html: section?.description }}
            ></p>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex w-full max-w-7xl mx-auto px-6">
          {/* Left Tabs */}
        </div>
      </section>

      <section className="relative h-[300px] md:h-[550px] w-full">
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${activeTab?.image_url})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 hidden md:block"></div>

        {/* DESKTOP */}
        {/* Desktop code here */}
        {/* DESKTOP VIEW */}
        <div className="hidden md:flex relative z-10 h-full">
          {/* LEFT TABS */}
          <div className="flex h-full">
            {tabsall.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`
          cursor-pointer flex flex-col items-center justify-between 
          h-full w-[90px] border-r border-white/20
          transition-all duration-300
          ${
            active === tab.id
              ? "bg-transparent"
              : "bg-gradient-to-b from-[#40BD02] to-[#37B8E1]"
          }
        `}
              >
                {/* Vertical Title */}
                <div
                  className="text-white text-sm font-medium rotate-180"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {tab.title}
                </div>

                {/* Bottom Number */}
                <div className="w-full py-3 flex items-center justify-center">
                  <span
                    className={`text-white text-xs px-3 py-1 rounded-full
            ${active === tab.id ? "bg-white/30" : "bg-black/30"}`}
                  >
                    0{tab.id}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 flex items-end p-10">
            <div className="bg-black/50 text-white p-6 rounded-lg max-w-md">
              <p
                className="text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: activeTab?.description }}
              ></p>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        {/* Mobile code here */}
        {/* MOBILE VIEW */}
         <div
          className="absolute inset-0 bg-cover bg-center block md:hidden"
          style={{ backgroundImage: `url(${activeTab?.image_url})` }}
        ></div>
        <div className="block md:hidden relative z-10 h-full">
          <div className="flex h-full">
            {/* LEFT COLOR STRIPS */}
            <div className="flex h-full">
              {tabsall.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`
            cursor-pointer flex flex-col items-center justify-between
            w-[30px] h-full
            ${tab.color}
            border-r border-white/30
            transition-all duration-300
             ${
                active === tab.id
                  ? "bg-transparent" 
                  : "bg-gradient-to-b from-[#40BD02] to-[#37B8E1]"
              }
            `}
                >
                  {/* VERTICAL TEXT */}
                  <div
                    className="text-white text-xs font-semibold mt-4"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {tab.title}
                  </div>

                  {/* NUMBER */}
                  <div className="mb-4">
                    <span className="bg-black/40 text-white text-[10px] px-2 py-1 rounded-full">
                      0{tab.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </section>
      


      {/* Chairman's Message */}
      <section className="w-full bg-white pb-20 relative">
        {/* Background subtle vertical lines */}
        <div className="absolute inset-0 pointer-events-none bg-[url('/img/vertical-lines.png')] opacity-20"></div>

        {/* TOP BLUE BAR */}
        <div className="w-full bg-[#0A5A9C] py-10 px-6 md:px-14">
          <h2 className="text-white text-3xl md:text-[32px] font-bold tracking-wide uppercase">
            CHAIRMAN’S MESSAGE
          </h2>
        </div>

        {/* CONTENT SECTION */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-14 mt-14 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT SIDE TEXT */}
          <div className="flex flex-col justify-center">
            <p className="text-[#4A4A4A] text-[17px] leading-[30px]">
              At Premier Group, our guiding principle is “Growth with Purpose.”
              This ethos underpins our steadfast commitment to creating
              sustainable value and generating a positive impact across our
              diverse endeavours. From our origins as a significant player in
              the global apparel sector, Premier Group’s journey has been one of
              continuous and strategic growth. Our vision remains resolute: to
              create lasting value and make a meaningful difference in every
              industry we engage with.
            </p>

            {/* GREEN LINE */}

            <div className="flex items-center gap-4 mt-8">
              {/* GREEN LINE + ANGLE */}
              <div className="relative">
                <div className="h-[6px] w-[110px] bg-[#8CC900]"></div>

                {/* angled edge */}
                <div
                  className="absolute right-[-10px] top-0 
                 border-t-[6px] border-t-[#8CC900]
                 border-r-[10px] border-r-transparent"
                ></div>
              </div>

              {/* NAME */}
              <p className="text-[22px] font-semibold tracking-wide text-[#000000]">
                Mohammad Jamaluddin
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="  -mt-[35px] md:-mt-[140px]  ">
              <img
                src="/img/chairmanimg.png"
                alt="Chairman"
                className="w-[420px] h-auto object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        <img src="/img/line.png" className=" mt-10" />
      </section>

      {/* Architects of Growth */}
      <section className="w-full bg-white py-6 px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-green-600 font-semibold tracking-wide">COMPANY</p>
          <h2 className="text-4xl font-bold mt-2">Architects of Growth</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Block 1 */}
          {architech?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white shadow-lg"
            >
              {/* LEFT IMAGE */}
              <img
                src={item?.image_url || "/img/image1.png"}
                alt={item?.name}
                className="w-full md:w-1/2 object-cover"
              />

              {/* RIGHT SIDE CONTENT */}
              <div className="p-6 bg-gray-900 text-white flex flex-col justify-center">
                {/* DESCRIPTION (HTML from API) */}
                <div
                  className="text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></div>

                {/* DESIGNATION */}
                <p className="mt-4 font-bold text-green-400">
                  {item?.designation}
                </p>

                {/* NAME */}
                <p className="font-semibold mt-1 uppercase">{item?.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Update */}
      <NewsSection />

      <GlobalMap />

      <Footer />
    </>
  );
};

export default Home;
