import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHardwareRepair } from "../../../store/techexpertisepages/hardwareRepairSlice";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { useNavigate } from "react-router-dom";

const HardwareRepairCard = ({ item }) => {
  return (
    <motion.div
      className="bg-zinc-800 rounded-xl p-6 shadow-2xl hover:shadow-blue-500/30 transition-shadow duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <span
          className="h-8 w-8 text-blue-500"
          dangerouslySetInnerHTML={{ __html: item.icon }}
        />
        <h3 className="text-2xl font-bold text-white tracking-wide">
          {item.title}
        </h3>
      </div>

      <p className="text-zinc-300 mb-6 leading-relaxed text-sm lg:text-base flex-grow">
        {item.description}
      </p>

      {item.img && item.img.length > 0 && (
        <Swiper
          modules={[Pagination, Autoplay, EffectCards]}
          effect="cards"
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="rounded-lg w-full h-52 md:h-64 lg:h-72 mt-auto"
        >
          {item.img.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${item.title} image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </motion.div>
  );
};

function HardwareRepairPage() {
  const navigate = useNavigate();
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
      transition: { staggerChildren: 0.2 },
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
          <span className="h-16 w-16 text-blue-500 animate-spin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-wrench"
            >
              <path d="M14.7 6.3a1 1 0 0 0-1.4 0L11 8.59l1.41 1.41L14.7 7.7a1 1 0 0 0 0-1.4z" />
              <path d="M20.71 4.29a1 1 0 0 0-1.42 0L16 7.59l1.41 1.41 3.29-3.29a1 1 0 0 0 0-1.42z" />
              <path d="M6.34 17.66a8 8 0 0 1 11.32-11.32" />
            </svg>
          </span>
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
    <div className="bg-black min-h-screen p-8 lg:p-16">
      <button
        onClick={() => navigate("/experience")}
        className="mb-10 px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold transition-all shadow-md cursor-pointer"
      >
        ← Back
      </button>
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item) => (
          <motion.div key={item.id} variants={itemVariants} className="h-full">
            <HardwareRepairCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default HardwareRepairPage;
