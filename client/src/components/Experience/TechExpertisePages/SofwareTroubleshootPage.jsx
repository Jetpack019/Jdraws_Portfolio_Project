import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSoftwareTroubleshoot } from "../../../store/techexpertisepages/softwareTroubleshoot";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

function SoftwareTroubleshootPage() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(
    (state) => state.softwareTroubleshoot
  );

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
    <div className="bg-zinc-900 min-h-screen p-8 lg:p-16">
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
            className="bg-zinc-800 rounded-xl shadow-lg hover:shadow-blue-500/30 transition duration-300 overflow-hidden flex flex-col"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
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
    </div>
  );
}

export default SoftwareTroubleshootPage;
