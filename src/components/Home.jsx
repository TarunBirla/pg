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

const tabs = [
  {
    id: 1,
    title: "Manufacturing and Export",
    color: "bg-gradient-to-b from-[#40BD02] to-[#37B8E1]",
  },
  {
    id: 2,
    title: "Real Estate Division",
    color: "bg-gradient-to-b from-[#37B8E1] to-[#40BD02]",
  },
  {
    id: 3,
    title: "Township Development",
    color: "bg-gradient-to-b from-[#40BD02] to-[#37B8E1]",
  },
  {
    id: 4,
    title: "Fashion & Retail Division",
    color: "bg-gradient-to-b from-[#37B8E1] to-[#40BD02]",
  },
  {
    id: 5,
    title: "Education & Skill Development",
    color: "bg-gradient-to-b from-[#40BD02] to-[#37B8E1]",
  },
];

const news = [
  {
    id: 1,
    img:"/img/s1.png",
    title: "Premier Global School Unveils Ambitious Plans for State-of-the-Art Education Hub in Sonarpur, West Bengal",
    date:"November 2, 2025",
    desc:"Sonarpur (West Bengal) [India], January 12: Premier Global School,"


  },
  {
    id: 2,
    img:"/img/s2.png",

    title: "Integrated Townships: Premier Group’s Vision for Modern, Sustainable Living",
    date:"November 2, 2025",
    desc:"In today’s fast-paced world, urban spaces are no longer just about buildings—they are about creating communities where people can live, work, learn, and thrive."



  },
  {
    id: 3,
    img:"/img/s3.png",

    title: "Growth with Purpose: The Journey of Premier Group",
    date:"November 2, 2025",
    desc:"Premier Global School Unveils Ambitious Plans for State-of-the-Art Education Hub in Sonarpur, West Bengal"

  },
   {
    id: 1,
    img:"/img/s1.png",
    title: "Premier Global School Unveils Ambitious Plans for State-of-the-Art Education Hub in Sonarpur, West Bengal",
    date:"November 2, 2025",
    desc:"Sonarpur (West Bengal) [India], January 12: Premier Global School,"


  },
  {
    id: 2,
    img:"/img/s2.png",

    title: "Integrated Townships: Premier Group’s Vision for Modern, Sustainable Living",
    date:"November 2, 2025",
    desc:"In today’s fast-paced world, urban spaces are no longer just about buildings—they are about creating communities where people can live, work, learn, and thrive."



  },
  {
    id: 3,
    img:"/img/s3.png",

    title: "Growth with Purpose: The Journey of Premier Group",
    date:"November 2, 2025",
    desc:"Premier Global School Unveils Ambitious Plans for State-of-the-Art Education Hub in Sonarpur, West Bengal"

  },
 
];


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);
  const [active, setActive] = useState(2); // default open tab

  const activeTab = tabs.find((t) => t.id === active);

   const sliderRef = useRef(null);
    const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

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

      {/* Busness SECTION */}

      <section className="w-full py-10">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
        <div className="flex flex-col justify-center">
          <p className="text-[#40BD02] font-semibold text-sm tracking-widest">
            BUSINESS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            We provide <br /> the best service
          </h2>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-gray-600 text-base leading-relaxed mt-4 max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex w-full max-w-7xl mx-auto px-6">
        {/* Left Tabs */}
         
      </div>
    </section>

    <section className="relative w-full h-[550px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/img/home.png')` }}
      ></div>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex h-full">

       <div className="flex flex-col md:flex-row h-full">

  {tabs.map((tab) => (
    <div
      key={tab.id}
      onClick={() => setActive(tab.id)}
      className={`
        group cursor-pointer flex flex-col items-center justify-between 
        h-full md:w-[90px] border-r border-white/20
        transition-all duration-300
        ${active === tab.id ? "bg-transparent" : tab.color}
      `}
    >

      {/* TOP TITLE (VERTICAL) */}
      <div
        className="text-white text-sm font-medium rotate-180"
        style={{ writingMode: "vertical-rl" }}
      >
        {tab.title}
      </div>

      {/* BOTTOM NUMBER BOX */}
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


        {/* RIGHT TEXT CONTENT */}
        <div className="flex-1 flex items-end p-10">
          <div className="bg-black/50 text-white p-6 rounded-lg max-w-md">
            <p className="text-sm leading-relaxed">{activeTab.title}</p>
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
        At Premier Group, our guiding principle is “Growth with Purpose.” This ethos
        underpins our steadfast commitment to creating sustainable value and generating
        a positive impact across our diverse endeavours. From our origins as a
        significant player in the global apparel sector, Premier Group’s journey has
        been one of continuous and strategic growth.
        
        Our vision remains resolute: to create lasting value and make a meaningful
        difference in every industry we engage with.
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
      <div className="  -mt-[140px]   ">
        <img
          src="/img/chairmanimg.png"
          alt="Chairman"
          className="w-[420px] h-auto object-cover rounded-md"
        />
      </div>
    </div>

  </div>
    <img src="/img/line.png" className=" mt-10"/>

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
        <div className="flex flex-col md:flex-row bg-white shadow-lg">
          <img
            src="/img/image1.png"
            alt="Mohammad Jamaluddin"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 bg-gray-900 text-white flex flex-col justify-center">
            <p className="text-sm leading-relaxed">
              Founder and visionary leader of Premier Group, providing strategic
              direction and driving the Group's mission of purposeful,
              sustainable growth.
            </p>
            <p className="mt-4 font-bold text-green-400">Chairman</p>
            <p className="font-semibold mt-1">MOHAMMAD JAMALUDDIN</p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col md:flex-row bg-white shadow-lg">
          <img
            src="/img/image2.png"
            alt="Abdul Ahad"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 bg-lime-500 text-black flex flex-col justify-center">
            <p className="text-sm leading-relaxed">
              Oversees the Group's global operations, export strategy, and
              international business partnerships.
            </p>
            <p className="mt-4 font-bold">Managing Director (Hong Kong)</p>
            <p className="font-semibold mt-1">ABDUL AHAD</p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col md:flex-row bg-white shadow-lg">
          <img
            src="/img/image3.png"
            alt="Tanveer Siddiqui"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 bg-green-500 text-white flex flex-col justify-center">
            <p className="text-sm leading-relaxed">
              Founder and visionary leader of Premier Group, providing strategic
              direction and driving the Group's mission of purposeful,
              sustainable growth.
            </p>
            <p className="mt-4 font-bold">Managing Director & COO (India)</p>
            <p className="font-semibold mt-1">TANVEER SIDDIQUI</p>
          </div>
        </div>

        {/* Block 4 */}
        <div className="flex flex-col md:flex-row bg-white shadow-lg">
          <img
            src="/img/image4.png"
            alt="Farhan Raza"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 bg-blue-600 text-white flex flex-col justify-center">
            <p className="text-sm leading-relaxed">
              Oversees the Group's global operations, export strategy, and
              international business partnerships.
            </p>
            <p className="mt-4 font-bold">Managing Director (India)</p>
            <p className="font-semibold mt-1">FARHAN RAZA</p>
          </div>
        </div>
      </div>
    </section>

    {/* New Update */}
 <NewsSection/>

<GlobalMap/>

      <Footer />
    </>
  );
};

export default Home;
