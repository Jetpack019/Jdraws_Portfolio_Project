import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function ExpandingButton({ icon: Icon, button1, button2 }) {
  const [showButtons, setShowButtons] = useState(false);

  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };
  return (
    <div className="flex items-center space-x-4">
      <motion.button
        onClick={() => setShowButtons(!showButtons)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 rounded-full text-blue-600 bg-white shadow-xl
                   focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50
                   transition-all duration-300 ease-in-out cursor-pointer"
      >
        <Icon size={24} />
      </motion.button>

      <AnimatePresence>
        {showButtons && (
          <>
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full text-white font-semibold bg-gray-700 hover:bg-gray-600 shadow-lg
                         focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50"
            >
              {button1}
            </motion.button>

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full text-white font-semibold bg-gray-700 hover:bg-gray-600 shadow-lg
                         focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50"
            >
              {button2}
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExpandingButton;
