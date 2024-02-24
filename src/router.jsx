import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Revolution from "./pages/Revolution";
import Contact from "./pages/Contact";
import MobileApp from "./pages/MobileApp";
import WebApp from "./pages/WebApp";
import CustomApp from "./pages/CustomApp";
import Estimate from "./pages/Estimate";

const BrowserRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/revolution",
    element: <Revolution />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/estimate",
    element: <Estimate />,
  },
  {
    path: "/mobile-app",
    element: <MobileApp />,
  },
  {
    path: "/custom-app",
    element: <CustomApp />,
  },
  {
    path: "/web-app",
    element: <WebApp />,
  },
]);

const Router = () => {
  return <RouterProvider router={BrowserRoutes} />;
};

export default Router;
