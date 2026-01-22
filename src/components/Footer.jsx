import { Facebook, Instagram, Linkedin, X, Youtube, Mail } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full relative">
        <img src="/img/line.png" />
        {/* TOP FOOTER WITH BG IMAGE */}
        <div
          className="w-full bg-cover bg-center bg-no-repeat py-16"
          style={{ backgroundImage: 'url("/footer.png")' }}
        >
          <div className="max-w-6xl mb-5 md:mb-20 mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* LEFT LARGE COLUMN - COL 4 */}
            <div className="md:col-span-4">
              <img
                src="/img/Logo.png"
                alt="PG Logo"
                className="h-[80px] w-[150px] mb-4"
              />

              <p className="text-[#CCCCCC]  mb-20 md:mb-0 text-sm leading-relaxed max-w-xs">
                Premier Group unites under a shared vision to drive sustainable
                growth, empower communities, and inspire progress for future
                generations.
              </p>
            </div>

            {/* RIGHT COLUMNS (Quick Links + Legal + Contact) - COL 8 */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-4 gap-10 items-start">
              {/* QUICK LINK */}
        
              <div className="hidden lg:block">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Quick Link
                </h4>
                <ul className="space-y-2 text-[#CCCCCC] text-sm">
                  <li className="hover:text-[#40BD02] cursor-pointer">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:text-[#40BD02] cursor-pointer">
                    {" "}
                    <Link to="/abouts">About Us</Link>
                  </li>
                  <li className="hover:text-[#40BD02] cursor-pointer">
                    {" "}
                    <Link to="/besiness">Businesses</Link>
                  </li>
                  <li className="hover:text-[#40BD02] cursor-pointer">
                    {" "}
                    <Link to="/news">News & Updates</Link>
                  </li>
                  <li className="hover:text-[#40BD02] cursor-pointer">
                    {" "}
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>

              {/* LEGAL */}
              <div className="hidden lg:block">
                <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-[#CCCCCC] text-sm">
                  <li className="hover:text-[#40BD02] cursor-pointer">
                    Terms & Conditions
                  </li>
                  <li className="hover:text-[#40BD02] cursor-pointer">
                    Privacy Policy
                  </li>
                </ul>
              </div>

              {/* SOCIAL + SUBSCRIBE */}
              <div className=" flex items-center border-l pl-4 border-[#98C20B]">
                {/* <div className="h-30 w-[1px] bg-[#98C20B] " /> */}

                <div>
                  <h4 className="font-semibold text-white mb-4">
                    Social Media Link
                  </h4>

                  <div className="flex space-x-4 mb-6 text-white">
                    <Facebook size={18} />
                    <Instagram size={18} />
                    <Linkedin size={18} />
                    <X size={18} />
                    <Youtube size={18} />
                    <Mail size={18} />
                  </div>

                  <div className="flex border border-[#98C20B]">
                    <input
                      placeholder="Enter your email to subscribe"
                      className="bg-transparent px-3 py-2 text-sm outline-none text-white w-full"
                    />
                    <button className="bg-[#98C20B] px-4 flex items-center justify-center">
                      →
                    </button>
                  </div>
                </div>
              </div>

           
            </div>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="w-full bg-black text-center py-4 text-gray-400 text-sm">
          Copyright © 2025{" "}
          <span className="text-[#40BD02] font-semibold cursor-pointer">
            Premier Group
          </span>
          . All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
