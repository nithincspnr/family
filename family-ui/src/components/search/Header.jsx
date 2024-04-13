import { useNavigate } from "react-router-dom";

import BackButtonIcon from "@assets/back-icon.svg";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex px-4 py-8">
      <img
        width={20}
        src={BackButtonIcon}
        onClick={() => navigate(-1)}
        className="mr-24 cursor-pointer"
      />
      <h1 className="text-4xl">Search</h1>
    </div>
  );
}

export default Header;
