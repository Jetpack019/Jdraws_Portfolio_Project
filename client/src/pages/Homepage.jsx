import React from "react";
import HeroSection from "../components/Homepage/HeroSection";
import ProjectList from "../components/Homepage/ProjectList";
import DesignList from "../components/Homepage/DesignList";
import { Outlet } from "react-router-dom";
import SkillList from "../components/Homepage/SkillList";

function Homepage() {
  return (
    <>
      <div className="space-y-50 bg-gradient-to-br from-gray-900 to-blackspace-y-50 bg-black">
        <Outlet />
        <HeroSection />
        <SkillList />
        <ProjectList />
        <DesignList />
      </div>
    </>
  );
}

export default Homepage;
