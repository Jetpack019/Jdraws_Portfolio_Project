import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";

import Contact from "./pages/Contact";

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
        { path: "experience", element: <Experience /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
