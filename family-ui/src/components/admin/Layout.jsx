import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
    <div className="container mx-auto h-full">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
