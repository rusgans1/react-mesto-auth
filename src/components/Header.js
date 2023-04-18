import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

function Header({ isLoggedIn, email, onClick }) {
  const location = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      {isLoggedIn ? (
        <div className="header__container">
        <p className="header__user-email">{email}</p>
        <Link to="/" className="header__link">
          <p className="header__link-text" onClick={onClick}>
            Выйти
          </p>
        </Link>
      </div>
    ) : (
      <>
        {location.pathname === "/sign-in" ? (
          <Link to="/sign-up" className="header__link">
            <p className="header__link-text">Регистрация</p>
          </Link>
        ) : (
          <Link to="/sign-in" className="header__link">
            <p className="header__link-text">Войти</p>
          </Link>
        )}
      </>
      )}
    </header>
  );
}

export default Header;