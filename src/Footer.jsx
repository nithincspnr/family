import { Link } from "react-router-dom";
import Divider from "./Divider";
import SearchIcon from "./assets/search-icon.svg";

const Footer = () => {
  return (
    <div className="fixed shadow bottom-0 h-14 w-96 bg-white">
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
