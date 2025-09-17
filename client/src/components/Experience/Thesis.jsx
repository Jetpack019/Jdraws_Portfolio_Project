import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fetchThesis } from "../../store/thesisSlice";
import { motion, AnimatePresence } from "framer-motion";
import { Usb } from "lucide-react";
import ToggleDeviceButton from "./Button/ToggleDeviceButton";
function Thesis() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.thesis);
  const [showDeviceImages, setShowDeviceImages] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    dispatch(fetchThesis());
  }, [dispatch]);

  if (isLoading)
    return <p className="text-white text-center mt-10">Loading...</p>;
  if (error)
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!items)
    return <p className="text-white text-center mt-10">No data found.</p>;

  return (
    <section className="m-40">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center justify-between px-10 py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${items.bg_image})`,
        }}
      >
        <div className="relative z-10 flex-1  max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow mb-20">
            {items.head_title}
          </h1>
          <div className="space-y-15">
            <h3 className="text-xl md:text-2xl font-extrabold drop-shadow">
              {items.title}
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              {items.description}
            </p>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-2xl font-medium drop-shadow mb-5">
                Developed with:
              </h1>
              <div className="flex flex-wrap gap-4">
                {items.developed?.map((icon, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center hover:scale-110 transition"
                  >
                    <img
                      src={icon}
                      alt={`Tech-${i}`}
                      className="w-20 h-20object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="relative z-10  lg:w-1/2 mt-10 lg:mt-0 mb-10">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              className="w-80 "
            >
              {items.images_device.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative group rounded-xl overflow-hidden shadow ">
                    <img
                      src={img}
                      alt={`Internship-${i}`}
                      className="object-cover duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <span className="text-white text-sm font-medium">
                        Application Image {i + 1}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <ToggleDeviceButton
            showDeviceImages={showDeviceImages}
            setShowDeviceImages={setShowDeviceImages}
          />

          {/* Device Images Swiper */}
          {showDeviceImages && (
            <div className="relative z-10 lg:w-1/2 mt-6 animate-fadeIn">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                className="w-80"
              >
                {items.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="relative group rounded-xl overflow-hidden shadow-lg 
                             bg-white/5 backdrop-blur-md border border-white/10"
                    >
                      <img
                        src={img}
                        alt={`Device-${i}`}
                        className="h-60 w-full object-cover duration-500 
                               group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                               flex items-end justify-center opacity-0 group-hover:opacity-100 
                               transition duration-500"
                      >
                        <span className="text-white text-sm font-medium p-3">
                          Device Image {i + 1}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Thesis;
