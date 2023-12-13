import { useHistory } from "react-router-dom";

import BackButtonIcon from "../assets/back-icon.svg";

function Header() {
  const history = useHistory();
  return (
    <div className="flex px-4 py-8">
      <img
        onClick={() => history.goBack()}
        className="mr-24 cursor-pointer"
        src={BackButtonIcon}
        width={20}
      />
      <h1 className="text-4xl">Search</h1>
    </div>
  );
}

export default Header;
