import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

function ImageSlideSection() {
  const [isGridVisible, setIsGridVisible] = useState(false);

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

  const imageSources = [
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1528652251036-7c98031d2757?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1508920557458-750d4050d287?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1528652251036-7c98031d2757?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1508920557458-750d4050d287?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1528652251036-7c98031d2757?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1508920557458-750d4050d287?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1528652251036-7c98031d2757?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1508920557458-750d4050d287?auto=format&fit=crop&w=500&q=60",
  ];

  return (
    <div
      className="h-[80vh] relative bg-cover bg-center bg-no-repeat flex items-center justify-between px-10 py-20 text-white group"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1500&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Custom Hover Toggle Button */}
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

      {/* Grid Overlay */}
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
              slidesPerView={4} // Sets the number of columns to 4
              grid={{ rows: 2, fill: "row" }} // Sets the number of rows to 2
              className="w-full h-full p-8"
            >
              {imageSources.map((src, index) => (
                <SwiperSlide key={index}>
                  <motion.img
                    src={src}
                    alt={`Grid Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
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
