import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDesigns } from "../../store/designSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Designs() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.designs);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Mockups");
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    dispatch(fetchDesigns());
  }, [dispatch]);

  useEffect(() => {
    if (items[selected] && items[selected].length > 0) {
      setMainImage(items[selected][0].img);
    }
  }, [selected, items]);

  const categories = ["Mockups", "Infographics", "Icons and Logo", "3D Model"];

  const handleSelect = (item) => {
    setSelected(item);
    setOpen(false);
  };

  if (isLoading) return <p className="text-white">Loading designs...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <section className="text-white p-6 bg-black">
      <div className="relative inline-block text-left mb-6">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          {selected}
          <ChevronDown
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            size={20}
          />
        </button>

        {open && (
          <ul className="absolute mt-2 w-48 bg-gray-900 text-gray-100 rounded-lg shadow-lg border border-gray-700/50 overflow-hidden">
            {categories.map((item, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(item)}
                className="px-4 py-2 hover:bg-blue-600/80 hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col items-center">
        {mainImage ? (
          <img
            src={mainImage}
            alt="Main Display"
            className="w-full max-w-4xl h-[500px] object-contain rounded-xl shadow-lg mb-6"
          />
        ) : (
          <p className="text-gray-400">No images available</p>
        )}

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          className="w-full max-w-4xl rounded-xl mx-20"
        >
          {items[selected]?.map((design) => (
            <SwiperSlide
              key={design.id}
              className="flex justify-center items-center"
            >
              <img
                src={design.img}
                alt={design.title}
                onClick={() => setMainImage(design.img)}
                className={`w-full h-52 object-cover rounded-lg cursor-pointer transition-transform duration-300 ${
                  mainImage === design.img
                    ? " scale-[1.02]"
                    : "hover:scale-[1.02]"
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Designs;
