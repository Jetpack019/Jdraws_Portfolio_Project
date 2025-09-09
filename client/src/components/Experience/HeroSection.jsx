import React, { useState } from "react";
import experience_img_1 from "./../../assets/react.svg";
import experience_img_2 from "./../../assets/react.svg";
import { motion, AnimatePresence } from "framer-motion";
const experienceButton = [
  "Arena Entry",
  "Community Hub",
  "Game Stay",
  "Team Growth",
];

const experienceContent = [
  {
    image: experience_img_1,
    title: "Welcome to the Arena",
    subtitle: "Where Gamers Unite",
    description: `Our forum is the ultimate meeting ground for players, creators, and 
    fans from every corner of the gaming world. Whether you're here to 
    share your latest strategies, find allies for your next quest, or 
    debate the best boss battles, you’re in the right place.`,
  },
  {
    image: experience_img_2,
    title: "Community First",
    subtitle: "Built by Players, for Players",
    description: `Every post, reply, and discussion shapes the world of our forum. 
    We believe in an inclusive space where newcomers and veterans 
    alike can share knowledge, celebrate victories, and spark epic 
    collaborations.`,
  },
  {
    image: experience_img_1,
    title: "Stay in the Game",
    subtitle: "News, Guides, and More",
    description: `From patch notes to deep-dive game guides, our community keeps 
    you updated on the latest happenings in the gaming universe. 
    Learn from pros, discover hidden tips, and never miss out on the 
    next big update.`,
  },
  {
    image: experience_img_2,
    title: "Level Up Together",
    subtitle: "Your Journey Starts Here",
    description: `Whether you're a casual player or a hardcore competitor, there’s 
    always a seat at our table. Jump into conversations, share your 
    stories, and let’s create unforgettable moments — both in-game 
    and beyond.`,
  },
];
function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeContent = experienceContent[activeIndex];
  return (
    <section className="w-full min-h-[100vh] flex flex-col lg:flex-row mx-auto px-10 py-20 items-center gap-10">
      <div className="flex-1 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeContent.image}
            src={activeContent.image}
            alt={activeContent.title}
            className="w-[500px] h-[500px] object-contain rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
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
            <h3 className="text-xl text-gray-600">{activeContent.subtitle}</h3>
            <p className="text-gray-700 leading-relaxed max-w-xl">
              {activeContent.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default HeroSection;
