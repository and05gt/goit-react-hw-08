import { FaAddressBook } from "react-icons/fa6";
import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={style.container}>
      <FaAddressBook className={style.icon} size={124} />
      <h1>Phonebook welcome page</h1>
    </div>
  );
};

export default HomePage;
