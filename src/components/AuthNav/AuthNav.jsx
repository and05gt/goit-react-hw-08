import clsx from "clsx";
import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

const AuthNav = () => {
  return (
    <div className={style.authWrapper}>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
