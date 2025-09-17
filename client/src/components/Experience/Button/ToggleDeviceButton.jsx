import { Usb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function ToggleDeviceButton({ showDeviceImages, setShowDeviceImages }) {
  const [hovered, setHovered] = useState(false);

  const container = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        duration: 0.3,
      },
    },
    exit: { opacity: 0, x: -20 },
  };

  const letter = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
  };

  return (
    <div className="relative flex flex-col items-center">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setShowDeviceImages(!showDeviceImages)}
        className="mb-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 
                   hover:bg-white/20 transition rounded-full shadow-lg cursor-pointer"
      >
        <Usb className="w-6 h-6 text-blue-400 transition-transform" />
      </button>

      <AnimatePresence>
        {hovered && (
          <motion.div
            key="tooltip"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-15 top-1/3 -translate-y-1/2
                 flex justify-center items-center text-center
                 bg-cyan-400 px-3 py-3 rounded-md shadow-lg"
          >
            {"DEVICE".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="text-xs font-medium text-gray-500"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ToggleDeviceButton;
