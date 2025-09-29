import React from "react";
import HeroSection from "../components/Homepage/HeroSection";
import ProjectList from "../components/Homepage/ProjectList";
import DesignList from "../components/Homepage/DesignList";
import { Outlet } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Outlet />
      <HeroSection />
      <ProjectList />
      <DesignList />
    </>
  );
}

export default Homepage;
