import { Link } from "react-router-dom";
import { InternalEndpoints } from "../Globals";

const Header = () => {
  return (
    <header className="app-header">
      <h1>
        <Link to={InternalEndpoints.HOME_END}>NC News App</Link>
      </h1>
      <h2>A place for all your NC news!</h2>
    </header>
  );
};

export default Header;
