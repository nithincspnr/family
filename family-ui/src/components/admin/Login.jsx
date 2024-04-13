import { useEffect, useRef } from "react";
import { getItem, setItem } from "../../utils/local-storage";
import { useNavigate } from "react-router-dom";

const AdminUIToken = "admin";

const AdminLogin = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const isAdminLoggedIn = getItem("isAdminLoggedIn");

  useEffect(() => {
    if ([isAdminLoggedIn].includes("true")) {
      navigate("search");
    }
  }, [isAdminLoggedIn, navigate]);

  const onButtonClick = () => {
    const input = inputRef.current.value;
    if (AdminUIToken === input) {
      setItem("isAdminLoggedIn", true);
    }
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2">
      <h3 className="text-4xl">Admin</h3>
      <input
        ref={inputRef}
        type="text"
        className="border-2 border-black px-3 py-3 focus:outline-none text-sm w-3/5 rounded text-center"
        placeholder="Code"
      />
      <button
        className="px-5 h-10 bg-black text-white rounded w-3/5"
        onClick={onButtonClick}
      >
        Login
      </button>
    </div>
  );
};

export default AdminLogin;
