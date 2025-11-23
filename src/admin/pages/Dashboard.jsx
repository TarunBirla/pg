import React, { useEffect, useState } from "react";

import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { FaSignOutAlt } from "react-icons/fa";

import { CircularProgress } from "@mui/material";

import { RotatingLines } from "react-loader-spinner";

import { Create } from "@mui/icons-material";
import Sidebar from "../utils/Sidebar";
import Header from "../utils/Header";
import DashboardPage from "./DashboardPage";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Dashboard");
  const user = JSON.parse(localStorage.getItem("userData"));
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("create-ticket")) setTitle("Create Ticket");
    else if (path.includes("tickets")) setTitle("My Tickets");
    else setTitle("Dashboard");
  }, [location]);

  return (
    <div className="flex h-screen bg-[#FFFFFF] overflow-hidden">
      {/* Sidebar Drawer */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col">
        <Header title={title} setIsOpen={setIsOpen} />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full">
              <Routes>
                <Route path="/" element={<Navigate to="home" replace />} />
                <Route path="home" element={<DashboardPage />} />
                <Route path="*" element={<Navigate to="home" replace />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
