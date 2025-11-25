import React from "react";
import { Calendar, Search, Instagram, Linkedin } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const NewUpdate = () => {
  const recent = [
    {
      img: "/img/s3.png",
      title: "Growth with Purpose: The Journey of Premier Group",
      date: "September 28, 2025"
    },
    {
      img: "/img/s2.png",
      title: "Integrated Townships: Premier Group’s Vision",
      date: "September 26, 2025"
    },
    {
      img: "/img/s1.png",
      title: "Premier Global School Unveils New Hub",
      date: "September 24, 2025"
    },
  ];

  const posts = [
    { img: "/img/s1.png", title: "Lorem Ipsum is simply dummy the printing.", date: "5 Dec 2025" },
    { img: "/img/s2.png", title: "Lorem Ipsum is simply dummy the printing.", date: "5 Dec 2025" },
    { img: "/img/s3.png", title: "Lorem Ipsum is simply dummy the printing.", date: "5 Dec 2025" },
  ];

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
<div>
          <h2 className="text-3xl font-bold leading-snug">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h2>

          {/* DATE */}
          <div className="flex items-center text-gray-600 gap-2 text-sm">
            <Calendar size={18} /> <span>5 Dec 2025</span>
          </div>

          {/* TEXT */}
          <p className="text-gray-700 text-[15px] leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since when an unknown.
          </p>
</div>
          {/* FEATURED IMAGE */}
          <div>
          <img
            src="/img/s2.png"
            className="rounded-xl  w-full h-70 object-cover"
          />
          </div>
          </div>

          {/* BOTTOM GRID OF NEWS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-3">
            {posts.map((i, index) => (
              <div key={index} className=" rounded-xl ">
                <img src={i.img} className="rounded-lg mb-3" />
                <h3 className="font-semibold text-[15px] leading-snug">
                  {i.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                  <Calendar size={16} /> {i.date}
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
              {recent.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <img
                    src={item.img}
                    className="w-20 h-16 rounded-md object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium leading-tight">{item.title}</p>
                    <p className="text-xs text-green-600 mt-1">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Me */}
          <div>
            <h4 className="font-semibold mb-3">Follow Me</h4>

            <div className="flex gap-2">
              <Instagram
                size={22}
                className=" text-[#37B8E1]"
              />
              <Linkedin
                size={22}
                className="text-[#37B8E1] "
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default NewUpdate;
