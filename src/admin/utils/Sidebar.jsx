// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Home,
//   Image,
//   FileText,
//   Users,
//   Settings,
//   ChevronDown,
//   Wrench,
// } from "lucide-react";

// const Sidebar = ({ isOpen, setIsOpen }) => {
//   const [openMenu, setOpenMenu] = useState("");

//   const menuItems = [
//     {
//       id: "dashboard",
//       label: "Dashboard",
//       icon: Home,
//       options: [
//         { name: "Overview", link: "/dashboard/home" },
//         { name: "Analytics", link: "/dashboard/analytics" },
//         { name: "Reports", link: "/dashboard/reports" },
//       ],
//     },
//     {
//       id: "banners",
//       label: "Banners",
//       icon: Image,
//       options: [
//         { name: "Banners", link: "/dashboard/banners" },
//         { name: "Add Banner", link: "/dashboard/banners/add" },
//       ],
//     },
//     {
//       id: "aboutus",
//       label: "About Us",
//       icon: FileText,
//       options: [
//         { name: "About Us", link: "/dashboard/aboutus" },
//         { name: "Add About Us", link: "/dashboard/aboutus/add" },
//       ],
//     },
//     {
//       id: "service",
//       label: "Service",
//       icon: Wrench,
//       options: [
//         { name: "Service List", link: "/dashboard/service" },
//         { name: "Add Service", link: "/dashboard/service/add" },
//         { name: "Service Bar", link: "/dashboard/servicebar" },
//         { name: "Add Service Bar", link: "/dashboard/servicebar/add" },
//       ],
//     },
//     {
//       id: "settings",
//       label: "Settings",
//       icon: Settings,
//       options: [
//         { name: "Profile", link: "/dashboard/settings/profile" },
//         { name: "Site Settings", link: "/dashboard/settings/site" },
//         { name: "Security", link: "/dashboard/settings/security" },
//       ],
//     },
//   ];

//   const toggleMenu = (id) => {
//     setOpenMenu(openMenu === id ? "" : id);
//   };

//   return (
//     <aside
//       className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 ${
//         isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//       }`}
//     >
//       <div className="flex flex-col h-full">
//         {/* Header */}
//         <div className="p-4 border-b border-gray-800 flex justify-between items-center">
//           <span className="text-lg font-semibold">Admin Panel</span>
//           <button className="lg:hidden" onClick={() => setIsOpen(false)}>
//             ✖
//           </button>
//         </div>

//         {/* Menu */}
//         <nav className="flex-1 overflow-y-auto p-4">
//           <ul className="space-y-2">
//             {menuItems.map(({ id, label, icon: Icon, options }) => (
//               <li key={id}>
//                 {/* Main Menu */}
//                 <button
//                   onClick={() => toggleMenu(id)}
//                   className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
//                     openMenu === id ? "bg-gray-800" : "hover:bg-gray-800"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <Icon size={20} />
//                     <span>{label}</span>
//                   </div>
//                   <ChevronDown
//                     size={18}
//                     className={`transition-transform ${
//                       openMenu === id ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* Submenu */}
//                 {openMenu === id && (
//                   <div className="bg-gray-800 mt-2 rounded-lg p-3">
//                     <p className="text-xs uppercase text-gray-400 mb-2">
//                       {label} Options:
//                     </p>

//                     {options.map((opt) => (
//                       <Link
//                         to={opt.link}
//                         key={opt.name}
//                         className="block text-gray-300 hover:text-white py-1 pl-2 text-sm"
//                       >
//                         {opt.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Footer */}
//         <div className="p-4 border-t border-gray-800 text-gray-400 text-xs text-center">
//           © 2025 Admin Panel
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

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
  LogOut,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [openMenu, setOpenMenu] = useState("");
  const [activeLink, setActiveLink] = useState("/dashboard/home");

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
        { name: "All Banners", link: "/dashboard/banners" },
        { name: "Add Banner", link: "/dashboard/banners/add" },
      ],
    },
    {
      id: "aboutus",
      label: "About Us",
      icon: FileText,
      options: [
        { name: "Content", link: "/dashboard/aboutus" },
        { name: "Add Content", link: "/dashboard/aboutus/add" },
      ],
    },
    {
      id: "service",
      label: "Services",
      icon: Wrench,
      options: [
        { name: "All Services", link: "/dashboard/service" },
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

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  const [search, setSearch] = useState("");
  const filteredMenuItems = menuItems
    .map((item) => {
      const matchMain = item.label.toLowerCase().includes(search.toLowerCase());

      const filteredOptions = item.options.filter((opt) =>
        opt.name.toLowerCase().includes(search.toLowerCase())
      );

      // If search matches main menu OR any submenu — include item
      if (matchMain || filteredOptions.length > 0) {
        return {
          ...item,
          options: search ? filteredOptions : item.options,
        };
      }

      return null;
    })
    .filter(Boolean);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white transform transition-all duration-300 ease-in-out shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <style>
          {`
          /* Sidebar Scrollbar */
aside nav::-webkit-scrollbar {
  width: 4px;      /* thin */
}

aside nav::-webkit-scrollbar-track {
  background: transparent;
}

aside nav::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.20);
  border-radius: 10px;
}

aside nav::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.35);
}

/* Firefox */
aside nav {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
}

          `}
        </style>
        <div className="flex flex-col h-full">
          {/* Header with Logo */}
          <div className="p-6 border-b border-slate-700/50 backdrop-blur-sm bg-slate-800/50">
            {/* <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold">A</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Admin Panel
                  </h1>
                  <p className="text-xs text-slate-400">Management System</p>
                </div>
              </div>
              <button
                className="lg:hidden p-2 hover:bg-slate-700 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </button>
            </div> */}
            <img
              src="/img/Logo.png"
              alt=""
              className="w-full h-20 object-contain"
            />
          </div>

          {/* Search Bar */}
          <div className="p-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search menu..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto px-4 pb-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">
              Main Menu
            </div>
            <ul className="space-y-1">
              {filteredMenuItems.map(({ id, label, icon: Icon, options }) => (
                <li key={id}>
                  {/* Main Menu Button */}
                  <button
                    onClick={() => toggleMenu(id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                      openMenu === id
                        ? "bg-gray-50 text-[#212446] shadow-lg shadow-blue-500/30"
                        : "hover:bg-slate-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-1.5 rounded-lg ${
                          openMenu === id
                            ? "bg-white/20"
                            : "bg-slate-800/50 group-hover:bg-slate-700/50"
                        } transition-colors`}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="font-medium text-sm">{label}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openMenu === id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Submenu with Animation */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openMenu === id ? "max-h-96 mt-1" : "max-h-0"
                    }`}
                  >
                    <div className="bg-slate-800/30 rounded-xl p-2 ml-4 border-l-2 border-blue-500/30">
                      {options.map((opt) => (
                        <Link
                          to={opt.link}
                          key={opt.name}
                          onClick={() => handleLinkClick(opt.link)}
                          className={`block px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                            activeLink === opt.link
                              ? "bg-blue-500/20 text-blue-300 font-medium"
                              : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                activeLink === opt.link
                                  ? "bg-blue-400"
                                  : "bg-slate-500"
                              }`}
                            />
                            {opt.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Profile Section */}
          <div className="p-4 border-t border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors cursor-pointer group">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center font-semibold shadow-lg">
                JD
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-slate-400">Administrator</p>
              </div>
              <LogOut
                size={18}
                className="text-slate-400 group-hover:text-red-400 transition-colors"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 text-center border-t border-slate-700/50">
            <p className="text-xs text-slate-500">© 2025 Admin Panel v2.0</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
