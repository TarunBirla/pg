import React, { useEffect, useState } from "react";
import { Pencil, Trash2, Plus, Edit } from "lucide-react";
import http from "../../../service/http";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function BannersList() {
  const [entries, setEntries] = useState(10);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [banners, setBanners] = useState([]);
  const fetchBanners = async () => {
    try {
      const res = await http.get("/banners");
      setBanners(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };
  useEffect(() => {
    fetchBanners();
  }, []);

  // Sample data with more entries for pagination
  const allBanners = [
    {
      id: 10,
      title: "first",
      slug: "first",
      photo:
        "https://via.placeholder.com/150x80/ff6b9d/ffffff?text=First+Banner",
      status: "active",
    },
    {
      id: 11,
      title: "second",
      slug: "second",
      photo:
        "https://via.placeholder.com/150x80/4ecdc4/ffffff?text=Second+Banner",
      status: "active",
    },
    {
      id: 12,
      title: "third",
      slug: "third",
      photo:
        "https://via.placeholder.com/150x80/95e1d3/ffffff?text=Third+Banner",
      status: "active",
    },
    {
      id: 13,
      title: "fourth",
      slug: "fourth",
      photo:
        "https://via.placeholder.com/150x80/86af49/ffffff?text=Fourth+Banner",
      status: "active",
    },
    {
      id: 14,
      title: "fifth",
      slug: "fifth",
      photo:
        "https://via.placeholder.com/150x80/f38181/ffffff?text=Fifth+Banner",
      status: "active",
    },
    {
      id: 15,
      title: "sixth",
      slug: "sixth",
      photo:
        "https://via.placeholder.com/150x80/aa96da/ffffff?text=Sixth+Banner",
      status: "active",
    },
    {
      id: 16,
      title: "seventh",
      slug: "seventh",
      photo:
        "https://via.placeholder.com/150x80/fcbad3/ffffff?text=Seventh+Banner",
      status: "active",
    },
    {
      id: 17,
      title: "eighth",
      slug: "eighth",
      photo:
        "https://via.placeholder.com/150x80/ffffd2/333333?text=Eighth+Banner",
      status: "active",
    },
    {
      id: 18,
      title: "ninth",
      slug: "ninth",
      photo:
        "https://via.placeholder.com/150x80/a8d8ea/ffffff?text=Ninth+Banner",
      status: "active",
    },
    {
      id: 19,
      title: "tenth",
      slug: "tenth",
      photo:
        "https://via.placeholder.com/150x80/ffccb6/ffffff?text=Tenth+Banner",
      status: "active",
    },
    {
      id: 20,
      title: "eleventh",
      slug: "eleventh",
      photo:
        "https://via.placeholder.com/150x80/b8e0d2/ffffff?text=Eleventh+Banner",
      status: "active",
    },
    {
      id: 21,
      title: "twelfth",
      slug: "twelfth",
      photo:
        "https://via.placeholder.com/150x80/d6eadf/333333?text=Twelfth+Banner",
      status: "active",
    },
  ];

  const filteredBanners = banners.filter((banner) =>
    banner.heading.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination calculations
  const totalEntries = filteredBanners.length;
  const totalPages = Math.ceil(totalEntries / entries);
  const startIndex = (currentPage - 1) * entries;
  const endIndex = Math.min(startIndex + entries, totalEntries);
  const currentBanners = filteredBanners.slice(startIndex, endIndex);

  // Reset to first page when search or entries change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, entries]);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const handleDeleteBanner = async (id) => {
    if (!window.confirm("Are you sure you want to delete this banner?")) return;

    try {
      await http.delete(`/banners/${id}`);

      toast.success("Banner deleted successfully!");
      fetchBanners();
    } catch (error) {
      console.error("Delete error:", error);
      toast.error(error.response.data.message || "Failed to delete banner.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <style>{`
        .image-zoom-container {
          overflow: hidden;
          border-radius: 4px;
          display: inline-block;
        }
        
        .image-zoom {
          transition: transform 0.3s ease;
          display: block;
          width: 100%;
          
        }
        
        .image-zoom-container:hover .image-zoom {
          transform: scale(1.2);
        }
        
        .table-container {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        
        .table-container::-webkit-scrollbar {
          height: 8px;
        }
        
        .table-container::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .table-container::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        
        .table-container::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        .responsive-table {
          min-width: 800px;
        }

        @media (max-width: 768px) {
          .responsive-table {
            min-width: 700px;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 md:p-6 border-b border-gray-200">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Banners List
          </h1>
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center">
            <Plus size={18} />
            Add Banner
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 md:p-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show</span>
            <select
              value={entries}
              onChange={(e) => setEntries(Number(e.target.value))}
              className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="text-sm text-gray-600">entries</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-sm text-gray-600">Search:</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 flex-1 sm:w-64"
            />
          </div>
        </div>

        {/* Table - Always visible with horizontal scroll on mobile */}
        <div className="table-container">
          <table className="w-full responsive-table">
            <thead className="bg-gray-50 border-y border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  S.N.
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Photo
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentBanners.map((banner) => (
                <tr
                  key={banner.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {banner.id}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    {banner.heading}
                  </td>

                  <td className="max-w-xs truncate">{banner.description}</td>

                  <td className="px-4 py-4">
                    <div className="image-zoom-container">
                      <img
                        src={banner.image_url}
                        alt={banner.heading}
                        className="image-zoom h-10 w-auto object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold 
                      ${
                        banner.active === true
                          ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                          : "bg-red-100 text-red-700 border border-red-300"
                      }`}
                    >
                      {banner.active === true ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          navigate(`/dashboard/banners/edit/${banner.id}`)
                        }
                        className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteBanner(banner.id)}
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50 border-t border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  S.N.
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Photo
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Footer with Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 md:p-6 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1} to {endIndex} of {totalEntries} entries
          </div>

          {totalPages > 1 && (
            <div className="flex items-center gap-1 flex-wrap justify-center">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>

              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-2 py-1.5 text-gray-500"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-1.5 text-sm border rounded transition-colors ${
                      currentPage === page
                        ? "bg-blue-500 text-white border-blue-500"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
