import React, { useState } from "react";
import { motion } from "framer-motion";

const skills = {
  proficient: [
    { name: "React", icon: "devicon-react-original colored", level: 90 },
    { name: "CSS", icon: "devicon-css3-plain colored", level: 85 },
    { name: "SQL", icon: "devicon-mysql-plain colored", level: 80 },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain colored", level: 95 },
    { name: "HTML", icon: "devicon-html5-plain colored", level: 95 },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 88 },
    { name: "SCSS", icon: "devicon-sass-original colored", level: 75 },
    { name: "Vite", icon: "devicon-vite-original colored", level: 85 },
  ],
  basic: [
    { name: "NodeJS", icon: "devicon-nodejs-plain colored", level: 65 },
    { name: "Python", icon: "devicon-python-plain colored", level: 60 },
    { name: "VB.Net", icon: "devicon-dot-net-plain colored", level: 55 },
    { name: "SEO", icon: "devicon-google-plain colored", level: 70 },
    { name: "Dart", icon: "devicon-dart-plain colored", level: 50 },
    { name: "PHP", icon: "devicon-php-plain colored", level: 45 },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", level: 75 },
    { name: "Firebase", icon: "devicon-firebase-plain colored", level: 60 },
  ],
};

function SkillList() {
  const [activeTab, setActiveTab] = useState("proficient");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full min-h-screen py-20 flex flex-col items-center justify-start relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center relative z-10"
      >
        My{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Skillset
        </span>
      </motion.h1>

      <div className="relative flex bg-gray-700/50 backdrop-blur-sm rounded-full p-1.5 mb-16 shadow-lg border border-gray-600/30">
        {["proficient", "basic"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative z-10 w-40 text-center py-3 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? "text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {tab === "proficient" ? "Proficient" : "Familiar"}
          </button>
        ))}

        <motion.div
          layout
          className="absolute top-1.5 left-1.5 h-[84%] w-40 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/40"
          initial={false}
          animate={{
            x: activeTab === "proficient" ? 0 : 160,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </div>

      <div className="w-full max-w-6xl px-4 relative z-10">
        <motion.div
          key={activeTab}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center"
        >
          {skills[activeTab].map((skill, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                scale: 1.08,
                y: -8,
                boxShadow:
                  "0 10px 25px -5px rgba(34, 211, 238, 0.4), 0 0 15px rgba(0, 255, 255, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedSkill(skill)}
              className="flex flex-col items-center justify-center 
             w-36 h-36 md:w-40 md:h-40 
             p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full 
             shadow-2xl border border-gray-700/50 
             cursor-pointer transition-all duration-300 ease-out
             relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-full">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgba(55, 65, 81, 0.5)"
                    strokeWidth="3"
                    fill="none"
                  />

                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: skill.level / 100 }}
                    transition={{
                      delay: 0.3 + i * 0.05,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              <i
                className={`${skill.icon} text-3xl md:text-4xl mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300`}
              ></i>
              <span className="text-gray-200 text-sm font-semibold text-center relative z-10">
                {skill.name}
              </span>

              <div className=" bottom-3 right-3 bg-gray-800/80 text-cyan-300 text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <i className={`${selectedSkill.icon} text-5xl`}></i>
                <h3 className="text-2xl font-bold text-white">
                  {selectedSkill.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-700/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Proficiency</span>
                <span>{selectedSkill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedSkill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>

            <p className="text-gray-300">
              {activeTab === "proficient"
                ? `I have strong experience with ${selectedSkill.name} and use it regularly in my projects.`
                : `I have basic knowledge of ${selectedSkill.name} and have used it in some projects.`}
            </p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedSkill(null)}
                className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-md"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center max-w-2xl px-4 relative z-10"
      >
        <h3 className="text-xl font-semibold text-white mb-4">
          {activeTab === "proficient"
            ? "Technologies I Use Daily"
            : "Technologies I'm Exploring"}
        </h3>
        <p className="text-gray-300">
          {activeTab === "proficient"
            ? "These are the tools and technologies I'm most comfortable with and use regularly in my projects."
            : "I have experience with these technologies and continue to expand my knowledge in these areas."}
        </p>
      </motion.div>
    </div>
  );
}

export default SkillList;
