import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

const AdminLayout = () => {
  const navigate = useNavigate();
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

  useEffect(() => {
    if (![isAdminLoggedIn].includes("true")) {
      navigate("login");
    } else {
      navigate("/admin");
    }
  }, [isAdminLoggedIn, navigate]);

  return (
    <div className="container mx-auto px-28 h-full">
      <Header />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
