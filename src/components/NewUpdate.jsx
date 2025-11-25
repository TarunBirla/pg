
import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const NewUpdate = () => {
    return (
    <>
        <Header />

      {/* TOP HERO BANNER */}
      <section
        className="relative w-full h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/newupdate.png')"
        }}
      >
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
      </section>

      {/* SECOND IMAGE */}
      <section className="w-full">
        <img src="/img/image.png" alt="Contact Banner" className="w-full object-cover" />
      </section>

<Footer/>

    </>

    )
    ;
};

export default NewUpdate;