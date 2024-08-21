import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "../pages/AuthPage/Signup";

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [{ path: "/signup", element: <Signup /> }],
      },
    ])}
  />
);

export default Router;
