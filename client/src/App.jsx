import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

import TechExpertise from "./components/Experience/TechExpertise";
import HardwareRepairPage from "./components/Experience/TechExpertisePages/HardwareRepairPage";
import PCBuildPage from "./components/Experience/TechExpertisePages/PCBuildPage";
import SoftwareTroubleshootPage from "./components/Experience/TechExpertisePages/SofwareTroubleshootPage";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // ✅ Main pages
        { index: true, element: <Homepage /> },
        { path: "experience", element: <Experience /> },
        { path: "contact", element: <Contact /> },

        // ✅ These are standalone pages that only show Navbar + the expertise page
        {
          path: "experience/tech-expertise/hardware-repair",
          element: <HardwareRepairPage />,
        },
        {
          path: "experience/tech-expertise/pc-build",
          element: <PCBuildPage />,
        },
        {
          path: "experience/tech-expertise/software-troubleshoot",
          element: <SoftwareTroubleshootPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
