import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Revolution from "./pages/Revolution";
import Contact from "./pages/Contact";

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
]);

const Router = () => {
  return <RouterProvider router={BrowserRoutes} />;
};

export default Router;
