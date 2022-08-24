import { Link } from "react-router-dom";
import { InternalEndpoints } from "../Globals";
import UserAccountWidget from "./UserAccountWidget";

const Header = () => {
  return (
    <header className="app-header">
      <h1>
        <Link className="link__undecorated" to={InternalEndpoints.HOME_END}>
          NC News App
        </Link>
      </h1>
      <h2>A place for all your NC news!</h2>
      <UserAccountWidget />
    </header>
  );
};

export default Header;
