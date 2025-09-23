import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

function ImageSlideSection({ buildKey }) {
  const [isGridVisible, setIsGridVisible] = useState(false);
  const { items } = useSelector((state) => state.pcBuild);

  const toggleGrid = () => {
    setIsGridVisible(!isGridVisible);
  };

  const gridVariants = {
    hidden: { x: "50%" },
    visible: {
      x: "0%",
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: { x: "100%", transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hidden: { right: 0 },
    visible: {
      left: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: { right: 0 },
  };

  const currentBuild = items?.[buildKey];
  const parts = currentBuild?.parts || [];

  return (
    <div
      className="h-[80vh] relative bg-cover bg-center bg-no-repeat flex items-center justify-between px-10 py-20 text-white group"
      style={{
        backgroundImage: `url(${currentBuild?.image || ""})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      <motion.button
        onClick={toggleGrid}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 z-40 opacity-0 group-hover:opacity-100 transition"
        variants={buttonVariants}
        initial="hidden"
        animate={isGridVisible ? "visible" : "hidden"}
        exit="exit"
      >
        <ChevronLeft className="h-15 w-15 text-white bg-black/40 hover:bg-black/60 rounded-full p-3 cursor-pointer" />
      </motion.button>

      <AnimatePresence>
        {isGridVisible && (
          <motion.div
            className="absolute top-0 right-0 w-full h-full bg-black/90 p-4 z-30 flex flex-col"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Swiper
              modules={[Grid, Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={16}
              slidesPerView={4}
              grid={{ rows: 2, fill: "row" }}
              className="w-full h-full p-8"
            >
              {parts.map((part, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={part.imgSrc}
                      alt={part.description}
                      className="w-28 h-28 object-contain rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-gray-300 mt-2 text-center">
                      {part.description}
                    </p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ImageSlideSection;
