import { useState, useEffect } from "react";

import Header from "./components/Header";
import Body from "./components/Body";

import "./App.scss";

function App() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      const res = await fetch(
        "https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies"
      );
      const data = await res.json();
      setMovie(data);
    };

    getMovie();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredTitle = movie.filter((movieDetail) =>
    movieDetail.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header handleChange={handleChange} />
      <Body movie={filteredTitle} />
    </>
  );
}

export default App;
