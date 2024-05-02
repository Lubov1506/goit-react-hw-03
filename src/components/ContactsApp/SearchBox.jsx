import s from "./ContactsApp.module.css";
import clsx from "clsx";

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className={s.col}>
      <label htmlFor="searchID">Find contacts by name</label>
      <input
        className={clsx(s.input, s.search_input)}
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        id="searchID"
      />
    </div>
  );
};

export default SearchBox;
