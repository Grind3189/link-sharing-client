import Navbar from "../nav/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="md:p-6">
      <div className="mb-[24px] h-[74px]">
        <Navbar />
      </div>
      <div className="h-[calc(100vh-74px-24px)] md:h-[calc(100vh-74px-24px-48px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
