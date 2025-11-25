import { Instagram, Linkedin } from "lucide-react";
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
          style={{ backgroundImage: 'url("/img/footerbgimg.png")' }}
        >
          <div className="max-w-6xl mb-20  mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* LEFT LARGE COLUMN - COL 4 */}
            <div className="md:col-span-4">
              <img
                src="/img/Logo.png"
                alt="PG Logo"
                className="h-[80px] w-[150px] mb-4"
              />

              <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                Premier Group unites under a shared vision to drive sustainable
                growth, empower communities, and inspire progress for future
                generations.
              </p>
            </div>

            {/* RIGHT COLUMNS (Quick Links + Legal + Contact) - COL 8 */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-4 gap-10 items-start">
              {/* QUICK LINK */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Link</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
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
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="hover:text-[#40BD02] cursor-pointer">
                    Terms & Conditions
                  </li>
                  <li className="hover:text-[#40BD02] cursor-pointer">
                    Privacy Policy
                  </li>
                </ul>
              </div>

              {/* CONTACT INFO */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>

                <div className="text-gray-700 text-sm space-y-4">
                  <div>
                    <p className="text-[#2295CA]">Phone :</p>
                    <p className=" font-semibold">+9103340896344</p>
                  </div>

                  <div>
                    <p className="text-[#2295CA]">Email :</p>
                    <p className="font-semibold">contact@premiergroup.co</p>
                  </div>
                </div>
              </div>

              {/* DIVIDER + SOCIAL ICONS */}
              <div className="flex items-center space-x-6">
                {/* VERTICAL LINE */}
                <div className="h-30 w-[1px] bg-black/40"></div>

                {/* SOCIAL ICONS */}

                {/* <div className="flex space-x-1">
      <div className="p-2 rounded">
        <Instagram
          size={24}
          className=" text-gradient-to-br from-[#37B8E1] to-[#40BD02]"
        />
      </div>

      <div className="p-2 rounded">
        <Linkedin
          size={24}
          className=" text-gradient-to-br from-[#37B8E1] to-[#40BD02]"
        />
      </div>
    </div> */}
                <div className="flex space-x-1">
                  <div className="p-2 rounded">
                    <Instagram size={24} className="text-[#37B8E1] " />
                  </div>

                  <div className="p-2 rounded">
                    <Linkedin size={24} className="text-[#37B8E1]  " />
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
