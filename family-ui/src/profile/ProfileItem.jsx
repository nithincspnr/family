import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const ProfileItem = ({ id, name, place, imageUrl }) => {
  return (
    <div className="container p-4 flex">
      <Link to={`/profile/${id}`}>
        <div className="w-16 pr-4">
          <Avatar imageUrl={imageUrl} />
        </div>
      </Link>
      <div>
        <Link to={`/profile/${id}`}>
          <p className="text-sm font-bold">{name}</p>
        </Link>
        <p className="text-sm font-normal">{place}</p>
      </div>
    </div>
  );
};

export default ProfileItem;
