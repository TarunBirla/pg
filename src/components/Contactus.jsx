// Contactus.jsx
import React from "react";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";
import Header from "./Header";


const Contactus = () => {
  return (
    <>
      <Header />

      {/* TOP HERO BANNER */}
      <section
        className="relative w-full h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/contact.png')"
        }}
      >
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
      </section>

      {/* SECOND IMAGE */}
      <section className="w-full">
        <img src="/img/image.png" alt="Contact Banner" className="w-full object-cover" />
      </section>

      {/* ✅ NEED MORE HELP SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">

          {/* LEFT IMAGE */}
          <div>
            <img
              src="/img/Needhelp.png"
              className="rounded-md shadow-lg"
              alt="Contact Support"
            />
          </div>

          {/* RIGHT FORM AREA */}
          <div>
            <h2 className="text-4xl font-bold mb-3 text-black">Need more help?</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Whether you're looking to buy, sell,
              or invest in real estate, our team is here to guide you every
              step of the way.
            </p>

            <h4 className="text-xl font-semibold mb-4 text-black">Get in touch with us.</h4>

            <form className="space-y-5">

              {/* NAME & EMAIL */}
              <div className="grid md:grid-cols-2 gap-4">
               <div>
  <label className="block text-sm mb-1">
    Name <span className="text-red-500">*</span>
  </label>

  <div className="p-[2px] rounded bg-gradient-to-r from-[#37B8E1] to-[#40BD02]">
    <input
      type="text"
      placeholder="Jams"
      className="w-full bg-white px-4 py-2 rounded outline-none"
    />
  </div>
</div>


               <div>
  <label className="block text-sm mb-1">
    Email Address <span className="text-red-500">*</span>
  </label>

  <div className="p-[2px] rounded bg-gradient-to-r from-[#37B8E1] to-[#40BD02]">
    <input
      type="email"
      placeholder="@gmail.com"
      className="w-full bg-white px-4 py-2 rounded outline-none"
    />
  </div>
</div>

              </div>

              {/* PHONE */}
             <div>
  <label className="block text-sm mb-1">
    Phone Number <span className="text-red-500">*</span>
  </label>

  <div className="p-[2px] rounded bg-gradient-to-r from-[#37B8E1] to-[#40BD02]">
    <input
      type="tel"
      placeholder="9999999999"
      className="w-full bg-white px-4 py-2 rounded outline-none"
    />
  </div>
</div>


              {/* MESSAGE */}
              <div>
  <label className="block text-sm mb-1">
    Message <span className="text-red-500">*</span>
  </label>

  <div className="p-[2px] rounded bg-gradient-to-r from-[#37B8E1] to-[#40BD02]">
    <input
      type="text"
       placeholder="Message..."
      className="w-full bg-white px-4 py-2 rounded outline-none h-[80px]"
    />
  </div>
</div>


              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="px-6 py-2 text-white font-semibold rounded bg-gradient-to-r from-[#37B8E1] to-[#40BD02] hover:scale-105 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* CONTACT INFO FOOTER */}
        <div className="max-w-4xl mx-auto mt-12 flex flex-wrap justify-between gap-6 px-4  pt-6">

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-[#37B8E1] to-[#40BD02] p-3 rounded-md">
              <Phone className="text-white" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="font-semibold text-black">+91 03348096344</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-[#37B8E1] to-[#40BD02] p-3 rounded-md">
              <Mail className="text-white" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="font-semibold text-black">contact@premiergroup.co</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold mb-2 text-black">Follow Our Social Media</p>
            <div className="flex space-x-3">
              <div className="bg-gradient-to-r from-[#37B8E1] to-[#40BD02] p-2 rounded">
                <Instagram className="text-white" size={18} />
              </div>
              <div className="bg-gradient-to-r from-[#37B8E1] to-[#40BD02] p-2 rounded">
                <Linkedin className="text-white" size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
