import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Main from "./pages/Main/Main.jsx";
import GeneralLayout from "./Layouts/GeneralLayout.jsx";
import MainShop from "./pages/Shop/MainShop.jsx";
import ShopsLayout from "./Layouts/ShopsLayout.jsx";
import Item from "./pages/Shop/Item.jsx";
import Service from "./pages/Service/Service.jsx";
import Team from "./pages/Team/Team.jsx";
import Blogsingle from "./pages/Blog/Blogsingle.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Porfoliosingle from "./pages/Portfolio/Porfoliosingle.jsx";
import Licenses from "./pages/licenses/Licenses.jsx";
import BlogLayout from "./Layouts/BlogLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <BlogLayout />,
        errorElement: <NotFound />,
        children: [
          {
            path: "/blog",
            element: <Blog />,
          },
          {
            path: ":blogId",
            element: <Blogsingle />,
          },
        ],
      },
      {
        path: "shop",
        element: <ShopsLayout />,
        errorElement: <NotFound />,
        children: [
          {
            path: "/shop",
            element: <MainShop />,
          },
          {
            path: ":shopId",
            element: <Item />,
          },
        ],
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "portfoliosingle",
        element: <Porfoliosingle />,
      },
      {
        path: "licenses",
        element: <Licenses />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
