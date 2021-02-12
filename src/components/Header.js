const Header = ({ handleChange }) => {
  return (
    <header>
      <form>
        <input
          type="text"
          className="search"
          placeholder="Search"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Header;
