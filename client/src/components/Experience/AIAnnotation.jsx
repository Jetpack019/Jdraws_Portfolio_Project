import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnnotation } from "../../store/annotationSlice";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function AIAnnotation() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.annotation);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    dispatch(fetchAnnotation());
  }, [dispatch]);

  if (isLoading) return <p className="text-white">Loading experience...</p>;
  if (error) return <p className="text-red-500">Error loading: {error}</p>;
  if (!items) return <p className="text-white">No experience found.</p>;

  return (
    <section className="p-10 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-white mb-10 text-center"
      >
        AI Annotation Projects
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 p-6 space-y-40"
        >
          <div>
            <h2 className="text-xl text-white mb-5 lg:mb-10">
              Contributes to:
            </h2>
            <div className="flex flex-col gap-4 lg:flex-row">
              {items.work?.map((icon, i) => (
                <motion.img
                  key={i}
                  src={icon}
                  alt={`Tech-${i}`}
                  whileHover={{ scale: 1.1 }}
                  className="w-50 h-30 lg:w-60 lg:h-40"
                />
              ))}
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-light text-3xl text-gray-300"
          >
            {items.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {items.type?.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={project.data_image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-11 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 rounded-2xl shadow-lg max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh] scrollbar-hide"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3  text-white hover:text-red-500 cursor-pointer"
              >
                <X size={28} strokeWidth={2} />
              </button>

              <img
                src={selectedProject.data_image}
                alt={selectedProject.title}
                className="w-full h-72 object-cover rounded-lg mb-6 shadow-md mt-10"
              />

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {selectedProject.description1}
              </p>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <motion.img
                    src={selectedProject.images?.[0]}
                    alt={`${selectedProject.title}-img1`}
                    className="w-full md:w-1/2 h-60 object-cover rounded-lg shadow-md"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.description2}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <motion.img
                    src={selectedProject.images?.[1]}
                    alt={`${selectedProject.title}-img2`}
                    className="w-full md:w-1/2 h-60 object-cover rounded-lg shadow-md"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-3">Type</h2>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.category || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AIAnnotation;
