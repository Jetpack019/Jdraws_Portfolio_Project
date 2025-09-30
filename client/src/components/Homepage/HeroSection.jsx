import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/userSlice";
import { motion } from "framer-motion";
import { FolderGit2, Mail } from "lucide-react";

function HeroSection() {
  const dispatch = useDispatch();
  const { item, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading)
    return (
      <p className="text-white text-center py-40">Loading user profile...</p>
    );
  if (error)
    return (
      <p className="text-red-500 text-center py-40">
        Error loading user: {error}
      </p>
    );

  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 text-white min-h-screen">
      {item && (
        <>
          <div className="flex-1 text-center md:text-left space-y-5 md:space-y-6 order-2 md:order-1 pt-10 md:pt-0">
            <motion.h1
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
            >
              {item.name}
            </motion.h1>

            <motion.h2
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-xl sm:text-2xl text-cyan-400 font-semibold"
            >
              Aspiring Frontend Developer
            </motion.h2>

            <motion.p
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-white max-w-xl leading-relaxed sm:text-lg"
            >
              Passionate about building beautiful, responsive, and user-friendly
              web applications. I focus on
              <strong className="text-gray-300"> ReactJS, TailwindCSS</strong>,
              and modern web practices to bring ideas to life.
            </motion.p>

            <motion.div
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex justify-center md:justify-start space-x-4 mt-6"
            >
              <a href="/experience" className="inline-flex items-center">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-medium flex items-center gap-2 transition">
                  <FolderGit2 size={18} /> View Projects
                </button>
              </a>

              <a
                href={`mailto:${item.email || "your-email@example.com"}`}
                className="inline-flex items-center"
              >
                <button className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:border-white hover:text-white rounded-full font-medium flex items-center gap-2 transition">
                  <Mail size={18} /> Contact Me
                </button>
              </a>
            </motion.div>
          </div>

          <div className="flex-1 flex justify-center order-1 md:order-2">
            <div
              className="relative w-64 h-64 md:w-100 md:h-100 rounded-full overflow-hidden 
                         shadow-2xl"
            >
              <div className="rounded-full w-full h-full overflow-hidden bg-black">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400 bg-gray-800 rounded-full text-lg">
                    <span>No Image</span>
                    <span className="text-sm text-gray-500">
                      Add user image to data
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default HeroSection;
