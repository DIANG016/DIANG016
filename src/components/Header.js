import { Link } from "react-router-dom";
import "../components/Header.css";
import Avatar from "./Avatar";
export const Header = () => {
  return (
    <header>
      <h1>PortFolio</h1>
      <ul className="links">
        <li>
          <Link to={"/"} className="homeLinks">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/works"} className="homeLinks">
            WorksPages
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/abaut"} className="homeLinks">
            Abaut
          </Link>
        </li>

        <li>
          <Link to={"/contac"} className="homeLinks">
            Contac
          </Link>
        </li>
      </ul>
      <Avatar />
    </header>
  );
};
