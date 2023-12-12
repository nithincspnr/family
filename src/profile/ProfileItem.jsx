import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const ProfileItem = () => {
  return (
    <div className="container p-4 flex">
      <Link to="/profile?ID=789">
        <div className="w-16 pr-4">
          <Avatar />
        </div>
      </Link>
      <div>
        <Link to="/profile?ID=789">
          <p className="text-sm font-bold">James</p>
        </Link>
        <p className="text-sm font-normal">Payyanur</p>
      </div>
    </div>
  );
};

export default ProfileItem;
