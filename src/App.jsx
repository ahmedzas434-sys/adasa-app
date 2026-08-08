import React from "react";
import Blog from "./pages/Blog/Blog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Home from "./pages/Home/Home";
import WhoAreWe from "./pages/WhoAreWe/WhoAreWe";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index:true,
          element: <Home />,
        },
        {
          path: "/whoAreWe",
          element: <WhoAreWe/>,
        },
        {
          path: "/blogDetails/:id",
          element: <BlogDetails />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
         {
      path:"/*",
      element:<NotFound/>
    }
      ],
    },
  ]);
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}
