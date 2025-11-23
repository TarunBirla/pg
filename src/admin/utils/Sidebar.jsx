// Sidebar.jsx
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
const Sidebar = ({ isOpen, setIsOpen }) => {
  const linkClasses =
    "flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition";
  const activeClasses = "bg-white text-black font-semibold shadow";

  return (
    <>
      <div
        className={`fixed inset-0 bg-[#212529]/50 bg-opacity-40 z-40 lg:hidden transition ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-[#212529] text-[#FFFFFF] flex flex-col z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex px-4 py-2">
          <img
            src="/Construction-Logo.jpg"
            alt=""
            className="w-[126.99px] h-[75px] rounded"
          />
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          <NavLink
            to="/dashboard/home"
            end
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeClasses}` : linkClasses
            }
            onClick={() => setIsOpen(false)}
          >
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
