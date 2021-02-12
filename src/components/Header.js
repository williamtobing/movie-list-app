const Header = ({ handleChange }) => {
  return (
    <header>
      <h1>
        Nonton<span>Film</span>
      </h1>
      <input
        type="search"
        className="search"
        placeholder="Search"
        onChange={handleChange}
      />
    </header>
  );
};

export default Header;
