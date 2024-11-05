import { Outlet } from "react-router-dom";
import NavBar from "../components/Common/NavBar";

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
