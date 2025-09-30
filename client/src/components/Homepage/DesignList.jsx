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

  const tabs = ["Mockups", "Infographics", "Icons and Logo", "3D Model"];

  return (
    <div className=" min-h-screen p-4 sm:p-6">
      <div className="flex flex-wrap gap-3 mb-6 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-all text-sm sm:text-base cursor-pointer ${
              activeTab === tab
                ? "bg-[#00B2FF] text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

            <div className="relative p-5 flex flex-col justify-end h-64 sm:h-72 md:h-80">
              <h3 className="text-lg sm:text-xl font-bold">{design.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignList;
