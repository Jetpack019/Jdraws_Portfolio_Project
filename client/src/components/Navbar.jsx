import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative py-2 px-3 text-lg font-medium transition duration-300
     ${
       isActive
         ? "text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-cyan-400 after:rounded-t-sm"
         : "text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md"
     }`;

  const staticLinkClass = `py-2 px-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition duration-300`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 p-4 bg-black/60 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-xl font-bold text-white tracking-wider hover:text-cyan-400 transition">
            JDRAWS
          </span>
        </div>

        <ul className="hidden md:flex space-x-1 lg:space-x-4">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={linkClass}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="/path/to/your/CV.pdf"
              download
              className="ml-4 px-4 py-2 text-md bg-cyan-500 text-gray-900 rounded-full font-semibold transition shadow-md opacity-50 pointer-events-none"
              aria-disabled="true"
            >
              Download CV
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-white p-2 rounded-md hover:bg-gray-700 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2"
          >
            <ul className="flex flex-col space-y-2 p-4 bg-gray-800/90 rounded-lg backdrop-blur-sm shadow-lg">
              <li>
                <NavLink
                  to="/"
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </NavLink>
              </li>
              <NavLink
                to="/contact"
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
              <li>
                <a
                  href="/path/to/your/CV.pdf"
                  download
                  className="w-full text-left mt-2 px-3 py-2 text-md bg-cyan-500 hover:bg-cyan-400 text-gray-900 rounded-full font-semibold transition block"
                  onClick={() => setIsOpen(false)}
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
