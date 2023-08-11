import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link className="logo__link" to="/">
            <img className="logo__img" src="academlo.png" alt="" />
            <span className="logo__span">e-commerce</span>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav__ul">
            <li className="nav__li nav__login">
              <Link to="/login">
                <i className="bx bx-user-circle bx-sm nav__login"></i>
              </Link>
            </li>
            <li className="nav__li nav__register">
              <Link to="/register">
                <i className="bx bx-user-plus bx-sm nav__register"></i>
              </Link>
            </li>
            <li className="nav__li nav__cart">
              <Link to="/cart">
                <i className="bx bx-cart bx-sm nav__cart"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
