import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHardwareRepair } from "../../../store/techexpertisepages/hardwareRepairSlice";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// A reusable component for each hardware repair card
const HardwareRepairCard = ({ item }) => {
  return (
    <motion.div
      className="bg-zinc-800 rounded-xl p-6 shadow-2xl hover:shadow-cyan-500/30 transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <Wrench className="h-8 w-8 text-cyan-500" />
        <h3 className="text-2xl font-bold text-white tracking-wide">
          {item.title}
        </h3>
      </div>
      <p className="text-zinc-300 mb-6 leading-relaxed text-sm lg:text-base">
        {item.description}
      </p>
      {item.img && item.img.length > 0 && (
        <Swiper
          modules={[Pagination, Autoplay, EffectCards]}
          effect={"cards"}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="rounded-lg h-64 lg:h-80 w-full"
        >
          {item.img.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${item.title} image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </motion.div>
  );
};

// Main page component
function HardwareRepairPage() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(
    (state) => state.hardwareRepair
  );

  useEffect(() => {
    dispatch(fetchHardwareRepair());
  }, [dispatch]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (isLoading) {
    return (
      <motion.div
        className="min-h-screen bg-zinc-900 text-white flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <Wrench className="h-16 w-16 text-cyan-500 animate-spin" />
          <p className="mt-4 text-xl">Loading...</p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-zinc-900 text-red-500 flex items-center justify-center">
        <p className="text-center text-xl">Error: {error}</p>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
        <p className="text-center text-xl">No data found.</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 min-h-screen p-8 lg:p-16">
      <header className="mb-12 text-center">
        <motion.h1
          className="text-4xl lg:text-6xl font-extrabold text-white mb-2 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hardware Repair Expertise
        </motion.h1>
        <motion.p
          className="text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A showcase of my hands-on experience in fixing and upgrading tech.
        </motion.p>
      </header>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, index) => (
          <motion.div key={item.id} variants={itemVariants}>
            <HardwareRepairCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default HardwareRepairPage;
