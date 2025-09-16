import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperience } from "../../store/experienceSlice";

const experienceButton = [
  "Internship",
  "AI Annotation",
  "Tech Expertise",
  "Hands On",
];

function HeroSection() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.experience);

  const [activeIndex, setActiveIndex] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);

  useEffect(() => {
    dispatch(fetchExperience());
  }, [dispatch]);

  if (isLoading) return <p className="text-white">Loading experience...</p>;
  if (error)
    return <p className="text-red-500">Error loading experience: {error}</p>;

  if (!items || items.length === 0) {
    return <p className="text-white">No experience found.</p>;
  }

  const activeContent = items[activeIndex];

  return (
    <section className="w-full min-h-[100vh] flex flex-col lg:flex-row mx-auto px-10 py-20 items-center gap-10">
      <div className="flex-1 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeContent.smimage}
            src={activeContent.smimage}
            alt={activeContent.title}
            className="w-[500px] h-[500px] object-contain rounded-2xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowFullImage(true)}
          />
        </AnimatePresence>
      </div>

      <div className="flex-1 flex flex-col space-y-8">
        <div className="flex flex-wrap gap-3">
          {experienceButton.map((content, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {content}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeContent.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-bold">{activeContent.title}</h1>
            <h3 className="text-xl text-gray-600">{activeContent.duration}</h3>
            <p className="text-gray-700 leading-relaxed max-w-xl">
              {activeContent.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showFullImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFullImage(false)}
          >
            <motion.img
              src={activeContent.image}
              alt={activeContent.title}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default HeroSection;
