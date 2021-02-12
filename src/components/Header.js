const Header = ({ handleChange }) => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
