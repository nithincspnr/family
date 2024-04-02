import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container mx-auto max-w-sm h-full bg-white">
      <Outlet />
    </div>
  );
};

export default Layout;
