import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const activeClass =
    "border-sky-500 px-1 pt-2 pb-4 text-sm font-medium text-sky-600";
  const inActiveClass =
    "border-transparent px-1 pt-2 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700";

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex gap-6" aria-label="Tabs">
        <Link
          to={"/admin"}
          onClick={() => setActiveMenu("home")}
          className={`shrink-0 border-b-2 ${
            activeMenu === "home" ? activeClass : inActiveClass
          }`}
        >
          Home
        </Link>
        <Link
          to={"/admin/add-profile"}
          onClick={() => setActiveMenu("addProfile")}
          className={`shrink-0 border-b-2 ${
            activeMenu === "addProfile" ? activeClass : inActiveClass
          }`}
        >
          Add Profile
        </Link>
        <a
          href="#"
          className="shrink-0 px-1 pt-2 pb-4 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          Logout
        </a>
      </nav>
    </div>
  );
};

export default Header;
