import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSoftwareTroubleshoot } from "../../../store/techexpertisepages/softwareTroubleshoot";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SoftwareTroubleshootPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(
    (state) => state.softwareTroubleshoot
  );

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    dispatch(fetchSoftwareTroubleshoot());
  }, [dispatch]);

  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center bg-zinc-900 text-white">
        <p className="animate-pulse">Loading Content</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center bg-zinc-900 text-red-500">
        <p>Error: {error}</p>
      </div>
    );

  if (!items || items.length === 0)
    return (
      <div className="min-h-screen flex justify-center items-center bg-zinc-900 text-white">
        <p>No Content Found</p>
      </div>
    );

  return (
    <div className="bg-black min-h-screen p-8 lg:p-16">
      <button
        onClick={() => navigate("/experience")}
        className="mb-10 px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold transition-all shadow-md cursor-pointer"
      >
        ← Back
      </button>
      <header className="text-center mb-12">
        <motion.h1
          className="text-4xl lg:text-6xl font-extrabold text-white mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Software Troubleshooting
        </motion.h1>
        <motion.p
          className="text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          A collection of essential methods I use to maintain, diagnose, and
          secure my system.
        </motion.p>
      </header>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="bg-zinc-800 rounded-xl shadow-lg hover:shadow-blue-500/30 transition duration-300 overflow-hidden flex flex-col cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => setSelectedImage(item.img)}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform"
            />
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="h-6 w-6 text-blue-500" />
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-3 right-3 bg-zinc-800 p-2 rounded-full text-white hover:bg-zinc-700 z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full flex justify-center items-center p-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <img
                src={selectedImage}
                alt="Full Resolution"
                className="max-w-full max-h-[85vh] rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SoftwareTroubleshootPage;
