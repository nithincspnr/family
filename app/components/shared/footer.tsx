import { Link } from "react-router";
import Profile from "~/assets/profile.svg";
import Search from "~/assets/search.svg";
import Settings from "~/assets/settings.svg";

const Footer = () => {
  return (
    <div className="container flex items-center fixed bottom-0 border-1 border-gray-400 pt-4 pb-2 rounded-md max-w-xl bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="basis-1/3">
        <Link to={"/profile/2"} className="flex flex-col items-center gap-1">
          <img
            className="cursor-pointer"
            src={Profile}
            alt="Logo"
            width={18}
            height={18}
          />
          <p className="text-sm font-bold">Profile</p>
        </Link>
      </div>
      <div className="basis-1/3">
        <Link to={"/search"} className="flex flex-col items-center gap-1">
          <img
            className="cursor-pointer"
            src={Search}
            alt="Logo"
            width={18}
            height={18}
          />
          <p className="text-sm">Search</p>
        </Link>
      </div>
      <div className="basis-1/3">
        <Link to={"/settings"} className="flex flex-col items-center gap-1">
          <img
            className="cursor-pointer"
            src={Settings}
            alt="Logo"
            width={18}
            height={18}
          />
          <p className="text-sm">Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
