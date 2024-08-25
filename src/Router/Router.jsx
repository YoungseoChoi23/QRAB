import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "../pages/AuthPage/Signup";
import Layout from "./Layout";

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: "/", element: <Signup /> },
          { path: "/signup", element: <Signup /> },
        ],
      },
    ])}
  />
);

export default Router;
