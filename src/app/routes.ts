import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "courses", Component: Courses },
      { path: "blog", Component: Blog },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
