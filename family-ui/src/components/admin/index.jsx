import { Outlet, Link } from "react-router-dom";

import SearchProfile from "./SearchProfile";
import AddProfile from "./AddProfile";

const AdminLayout = () => {
  return (
    <div>
      <ul className="flex">
        <li className="mr-6">
          <Link
            to="search"
            className="text-blue-500 hover:text-blue-800"
            href="#"
          >
            Search Profiles
          </Link>
        </li>
        <li className="mr-6">
          <Link
            to="add-profile"
            className="text-blue-500 hover:text-blue-800"
            href="#"
          >
            Add Profile
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export { AdminLayout, SearchProfile, AddProfile };
