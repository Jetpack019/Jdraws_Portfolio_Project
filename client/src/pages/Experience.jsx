import React from "react";
import HeroSection from "../components/Experience/HeroSection";
import AIAnnotation from "../components/Experience/AIAnnotation";
import Internship from "../components/Experience/Internship";
import HandsOn from "../components/Experience/HandsOn";
import Thesis from "../components/Experience/Thesis";
import Designs from "../components/Experience/Designs";
import { Outlet } from "react-router-dom";

function Experience() {
  return (
    <div className="space-y-50 bg-gradient-to-br from-gray-900 to-black">
      <HeroSection />
      <AIAnnotation />
      <Internship />
      <Designs />
      <HandsOn />
      <Thesis />

      {/* 🔹 This Outlet is where TechExpertise (and its children) will load */}
      <Outlet />
    </div>
  );
}

export default Experience;
