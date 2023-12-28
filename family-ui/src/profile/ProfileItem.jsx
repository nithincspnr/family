import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const ProfileItem = () => {
  return (
    <div className="container p-4 flex">
      <Link to="/profile/2">
        <div className="w-16 pr-4">
          <Avatar />
        </div>
      </Link>
      <div>
        <Link to="/profile/1">
          <p className="text-sm font-bold">James</p>
        </Link>
        <p className="text-sm font-normal">Payyanur</p>
      </div>
    </div>
  );
};

export default ProfileItem;
