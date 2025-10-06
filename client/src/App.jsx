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
        { index: true, element: <Homepage /> },
        {
          path: "experience",
          element: <Experience />,
          children: [
            {
              path: "tech-expertise",
              element: <TechExpertise />,
              children: [
                { path: "hardware-repair", element: <HardwareRepairPage /> },
                { path: "pc-build", element: <PCBuildPage /> },
                {
                  path: "software-troubleshoot",
                  element: <SoftwareTroubleshootPage />,
                },
              ],
            },
          ],
        },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
