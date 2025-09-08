import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDesigns } from "../../store/designSlice";

function DesignList() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.designs);

  const [activeTab, setActiveTab] = useState("Mockups");

  useEffect(() => {
    dispatch(fetchDesigns());
  }, [dispatch]);

  if (isLoading) return <p className="text-white">Loading projects...</p>;
  if (error)
    return <p className="text-red-500">Error loading projects: {error}</p>;

  return (
    <div className="bg-black min-h-screen p-6">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("Mockups")}
          className={`px-4 py-2 rounded-lg transition-all ${
            activeTab === "Mockups"
              ? "bg-[#00B2FF] text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Mockups
        </button>
        <button
          onClick={() => setActiveTab("Infographics")}
          className={`px-4 py-2 rounded-lg transition-all ${
            activeTab === "mobile"
              ? "bg-[#00B2FF] text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Infographics
        </button>
        <button
          onClick={() => setActiveTab("Icons and Logo")}
          className={`px-4 py-2 rounded-lg transition-all ${
            activeTab === "mobile"
              ? "bg-[#00B2FF] text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Icons and Logo
        </button>
        <button
          onClick={() => setActiveTab("3D Model")}
          className={`px-4 py-2 rounded-lg transition-all ${
            activeTab === "mobile"
              ? "bg-[#00B2FF] text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          3D Model
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items[activeTab]?.map((design) => (
          <div
            key={design.id}
            className="relative bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            style={{
              backgroundImage: `url(${design.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative p-5 flex flex-col justify-between h-64">
              <div>
                <h3 className="text-xl font-bold mb-2">{design.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignList;
