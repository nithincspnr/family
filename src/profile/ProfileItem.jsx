import React from "react";
import Avatar from "./Avatar";

const ProfileItem = () => {
  return (
    <div className="container p-4 flex">
      <div className="w-16 pr-4">
        <Avatar />
      </div>
      <div>
        <p>James</p>
        <p>Payyanur</p>
      </div>
    </div>
  );
};

export default ProfileItem;
