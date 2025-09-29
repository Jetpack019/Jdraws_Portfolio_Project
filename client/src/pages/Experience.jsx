import React from "react";
import HeroSection from "../components/Experience/HeroSection";
import AIAnnotation from "../components/Experience/AIAnnotation";
import { Outlet } from "react-router-dom";
import Internship from "../components/Experience/Internship";
import HandsOn from "../components/Experience/HandsOn";
import Thesis from "../components/Experience/Thesis";
import Designs from "../components/Experience/Designs";
import TechExpertise from "../components/Experience/TechExpertise";

function Experience() {
  return (
    //  bg-gradient-to-br from-gray-900 via-black to-gray-800
    <div className="space-y-50 bg-gradient-to-br from-gray-900 to-black">
      <Outlet />
      <HeroSection />
      <AIAnnotation />
      <Internship />
      <Designs />
      <HandsOn />
      <Thesis />
      <TechExpertise />
    </div>
  );
}

export default Experience;
