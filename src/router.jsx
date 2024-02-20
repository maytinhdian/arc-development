import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

const BrowserRoutes = createBrowserRouter([
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/",
        element:<Dashboard/>
    },
])

const Router = () => {
    return <RouterProvider router={BrowserRoutes} />;
  };
  
  export default Router;