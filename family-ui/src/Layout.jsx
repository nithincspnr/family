import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { localStorage } from "./utils";

const Layout = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (isLoggedIn !== "true") {
      navigate("./");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="container mx-auto max-w-sm h-full bg-white">
      <Outlet />
    </div>
  );
};

export default Layout;
