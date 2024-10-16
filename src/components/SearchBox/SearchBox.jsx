import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import style from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.searchWrapper}>
      <label className={style.label} htmlFor="search">
        <span>Find contacts by name</span>
        <input
          className={style.input}
          id="search"
          type="text"
          name="search"
          onChange={(event) => dispatch(changeFilter(event.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
