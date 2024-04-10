import { useEffect, useRef } from "react";
import { getItem, setItem } from "../utils/local-storage";
import { useNavigate } from "react-router-dom";

const UIToken = "token";
const AdminUIToken = "admin";

const Login = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const isLoggedIn = getItem("isLoggedIn");
  const isAdminLoggedIn = getItem("isAdminLoggedIn");

  useEffect(() => {
    if ([isLoggedIn].includes("true")) {
      navigate("search");
    }
  }, [isLoggedIn, isAdminLoggedIn, navigate]);

  const onButtonClick = () => {
    const input = inputRef.current.value;
    if ([UIToken, AdminUIToken].includes(input)) {
      if (UIToken === input) {
        setItem("isLoggedIn", true);
      }
      if (AdminUIToken === input) {
        setItem("isAdminLoggedIn", true);
      }
      navigate("../search");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2">
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

export default Login;
