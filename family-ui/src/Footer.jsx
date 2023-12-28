import { Link } from "react-router-dom";
import Divider from "./Divider";
import SearchIcon from "./assets/search-icon.svg";

const Footer = () => {
  return (
    <div className="fixed bottom-0 h-14 w-96 bg-white shadow-[0_-2px_4px_0px_rgb(0,0,0,0.1)]">
      <Divider />
      <Link to="/search">
        <div className="flex">
          <img
            className="mx-auto mt-2"
            width={35}
            height={35}
            src={SearchIcon}
          />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
