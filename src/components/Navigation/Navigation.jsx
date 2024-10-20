import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import style from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import { FaAddressBook } from "react-icons/fa6";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={style.navWrapper}>
      <Link to="/" className={style.title}>
        <FaAddressBook size={24} /> Phonebook
      </Link>
      <nav>
        {isLoggedIn && (
          <NavLink className={style.link} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
