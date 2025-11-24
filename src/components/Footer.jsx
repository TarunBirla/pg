import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="w-full relative">

        {/* TOP FOOTER WITH BG IMAGE */}
        <div
          className="w-full bg-cover bg-center bg-no-repeat py-16"
          style={{ backgroundImage: 'url("/img/footerbgimage.png")' }}
        >
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* LEFT LARGE COLUMN - COL 4 */}
            <div className="md:col-span-5">
              <img
                src="/img/Logo.png"
                alt="PG Logo"
                className="h-[80px] w-[150px] mb-4"
              />

              <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                Premier Group unites under a shared vision to drive sustainable growth,
                empower communities, and inspire progress for future generations.
              </p>
            </div>

            {/* RIGHT COLUMNS (Quick Links + Legal + Contact) - COL 8 */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">

              {/* QUICK LINKS */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Link</h4>

                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="hover:text-[#40BD02] cursor-pointer">Home</li>
                  <li className="hover:text-[#40BD02] cursor-pointer">About Us</li>
                  <li className="hover:text-[#40BD02] cursor-pointer">Businesses</li>
                  <li className="hover:text-[#40BD02] cursor-pointer">News & Updates</li>
                  <li className="hover:text-[#40BD02] cursor-pointer">Contact Us</li>
                </ul>
              </div>

              {/* LEGAL */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>

                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="hover:text-[#40BD02] cursor-pointer">Terms & Conditions</li>
                  <li className="hover:text-[#40BD02] cursor-pointer">Privacy Policy</li>
                </ul>
              </div>

              {/* CONTACT INFO */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>

                <div className="text-gray-700 text-sm space-y-3">

                  <div>
                    <p className="text-gray-500">Phone :</p>
                    <p className="text-[#40BD02] font-semibold">+9103340896344</p>
                  </div>

                  <div>
                    <p className="text-gray-500">Email :</p>
                    <p className="text-[#40BD02] font-semibold">contact@premiergroup.co</p>
                  </div>

                  <div className="flex items-center gap-4 pt-2 text-2xl">
                    <a href="#" className="text-[#40BD02] hover:text-[#37B8E1] transition">
                      <FaInstagram />
                    </a>

                    <a href="#" className="text-[#40BD02] hover:text-[#37B8E1] transition">
                      <FaLinkedin />
                    </a>
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
