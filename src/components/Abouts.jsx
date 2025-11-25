
import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const Abouts = () => {
    return (
        <>
      <Header />

      {/* TOP HERO BANNER */}
      <section
        className="relative w-full h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/about.png')"
        }}
      >
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
      </section>

      {/* SECOND IMAGE */}
      <section className="w-full">
        <img src="/img/image.png" alt="Contact Banner" className="w-full object-cover" />
      </section>


     

      <section className="w-full flex flex-col md:flex-row mt-10">
  {/* LEFT SIDE IMAGE WITH BLUE BACKGROUND */}
  <div className="md:w-1/2 bg-blue-700 flex items-center justify-center p-0 md:h-[550px]">
    <img
      src="/img/mohammad.png"
      alt="Mohammad Jamaluddin"
      className="w-full h-full "
    />
  </div>

  {/* RIGHT SIDE CONTENT */}
  <div className="md:w-1/2 bg-[#EEF5D7] p-10 md:p-16 flex flex-col justify-center md:h-[550px]">
    <p className="text-green-600 font-semibold tracking-wide mb-2">
      CHAIRMAN
    </p>

    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Mohammad Jamaluddin
    </h2>

    <p className="text-gray-700 leading-relaxed mb-6">
      As Chairman at Premier Group, Mr. Mohammad Jamaluddin strategically
      drives growth and cultivates key partnerships across its diverse
      operations, including property development and integrated townships.
      His focus on business development and market penetration is instrumental
      in expanding the Group's impact in these crucial sectors. Committed to
      Premier Group’s “Growth with Purpose” ethos, Mr. Mohammad Jamaluddin
      plays a key role in realising the vision of developing thriving and
      sustainable communities.
    </p>

    <p className="text-gray-900 font-semibold italic leading-relaxed">
      “I have never looked at the balance sheet of any company I took over.
      It was pure gut-feel and I never went wrong. The moment I ignored the
      gut reaction, I made a mistake.”
    </p>
  </div>

</section>
    <img src="/img/line.png" className=""/>


    <section className="w-full py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <p className="text-[#98C20B] font-semibold tracking-wide">GROWTH</p>
      <h2 className="text-4xl font-bold mt-2 mb-12">
        Growth in the Last Decade
      </h2>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-2">
        
        {/* LEFT BLUE BOX */}
        <div className="bg-[#0B5394] text-white p-8 md:p-12 rounded-md flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Commitment to Purposeful Growth
          </h3>

          <p className="leading-relaxed mb-4">
            From its beginnings in global apparel manufacturing to its diversified 
            ventures across industries, <span className="font-semibold">Premier Group</span> has remained committed 
            to combining <span className="font-semibold">innovation, integrity, and impact.</span>
          </p>

          <p className="leading-relaxed mb-4">
            Under the visionary leadership of 
            <span className="font-semibold"> Chairman Mohammad Jamaluddin</span>, the Group continues 
            to invest in initiatives that 
            <span className="font-semibold"> create economic opportunity, promote education,</span> 
            and uplift communities — staying true to its enduring principle:
          </p>

          <p className="italic font-semibold text-lg">
            “Growth with Purpose.”
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src="/img/Group 230.png"
            alt="Growth illustration"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

      </div>
    </section>

<Footer/>
    </>

    )
    ;
};

export default Abouts;