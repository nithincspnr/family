import { useNavigate } from "react-router-dom";

import LogoutIcon from "@assets/logout.svg";
import BackButtonIcon from "@assets/back-icon.svg";
import { setItem } from "@utils/local-storage";

function Header() {
  const navigate = useNavigate();

  const onLogout = () => {
    setItem("isLoggedIn", false);
    navigate("../login");
  };

  return (
    <div className="flex pt-10 pb-8 px-4 justify-between">
      <img
        width={20}
        src={BackButtonIcon}
        className="cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <img
        width={20}
        src={LogoutIcon}
        onClick={onLogout}
        className="cursor-pointer mr-2"
      />
    </div>
  );
}

export default Header;
