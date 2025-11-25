import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Image,
  FileText,
  Users,
  Settings,
  ChevronDown,
  Wrench,
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [openMenu, setOpenMenu] = useState("");

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Home,
      options: [
        { name: "Overview", link: "/dashboard/home" },
        { name: "Analytics", link: "/dashboard/analytics" },
        { name: "Reports", link: "/dashboard/reports" },
      ],
    },
    {
      id: "banners",
      label: "Banners",
      icon: Image,
      options: [
        { name: "Banners", link: "/dashboard/banners" },
        { name: "Add Banner", link: "/dashboard/banners/add" },
      ],
    },
    {
      id: "aboutus",
      label: "About Us",
      icon: FileText,
      options: [
        { name: "About Us", link: "/dashboard/aboutus" },
        { name: "Add About Us", link: "/dashboard/aboutus/add" },
      ],
    },
    {
      id: "service",
      label: "Service",
      icon: Wrench,
      options: [
        { name: "Service List", link: "/dashboard/service" },
        { name: "Add Service", link: "/dashboard/service/add" },
        { name: "Service Bar", link: "/dashboard/servicebar" },
        { name: "Add Service Bar", link: "/dashboard/servicebar/add" },
      ],
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      options: [
        { name: "Profile", link: "/dashboard/settings/profile" },
        { name: "Site Settings", link: "/dashboard/settings/site" },
        { name: "Security", link: "/dashboard/settings/security" },
      ],
    },
  ];

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? "" : id);
  };

  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <span className="text-lg font-semibold">Admin Panel</span>
          <button className="lg:hidden" onClick={() => setIsOpen(false)}>
            ✖
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map(({ id, label, icon: Icon, options }) => (
              <li key={id}>
                {/* Main Menu */}
                <button
                  onClick={() => toggleMenu(id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    openMenu === id ? "bg-gray-800" : "hover:bg-gray-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <span>{label}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      openMenu === id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Submenu */}
                {openMenu === id && (
                  <div className="bg-gray-800 mt-2 rounded-lg p-3">
                    <p className="text-xs uppercase text-gray-400 mb-2">
                      {label} Options:
                    </p>

                    {options.map((opt) => (
                      <Link
                        to={opt.link}
                        key={opt.name}
                        className="block text-gray-300 hover:text-white py-1 pl-2 text-sm"
                      >
                        {opt.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 text-gray-400 text-xs text-center">
          © 2025 Admin Panel
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
