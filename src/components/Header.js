import { useDispatch } from "react-redux";
import { inputSearch } from "../actions";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <h1>
        Nonton<span>Film</span>
      </h1>
      <input
        type="search"
        className="search"
        placeholder="Search"
        onChange={(e) => dispatch(inputSearch(e.target.value))}
      />
    </header>
  );
};

export default Header;
