import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTechExpertise } from "../../store/techExpertiseSlice";
import { motion } from "framer-motion";

function TechExpertise() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(
    (state) => state.techExpertise
  );

  useEffect(() => {
    dispatch(fetchTechExpertise());
  }, [dispatch]);

  if (isLoading)
    return <p className="text-white text-center text-xl mt-10">Loading...</p>;
  if (error)
    return (
      <p className="text-red-400 text-center text-xl mt-10">Error: {error}</p>
    );
  if (!items || items.length === 0)
    return (
      <p className="text-gray-400 text-center text-xl mt-10">No data found.</p>
    );

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen py-24 px-6 md:px-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center mb-16 drop-shadow-lg">
        Tech Expertise
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((expertise, i) => (
          <motion.div
            key={expertise.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(59,130,246,0.4)",
            }}
            className="flex flex-col items-center p-8 rounded-3xl transition-all duration-300 transform-gpu cursor-pointer
                       bg-gray-800 border-2 border-gray-700 hover:border-blue-500 shadow-2xl hover:shadow-blue-500/30"
          >
            <div
              className="w-36 h-36 p-4 rounded-full flex items-center justify-center mb-6 
                          bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 ring-4 ring-blue-500/30"
            >
              <img
                src={expertise.image}
                alt={expertise.title}
                className="w-24 h-24 object-contain filter drop-shadow-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-3">
              {expertise.title}
            </h2>
            <p className="text-md text-gray-300 text-center leading-relaxed">
              {expertise.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TechExpertise;
