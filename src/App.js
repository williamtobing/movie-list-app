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
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=5"
      );
      const data = await res.json();
      setMovie(data.results);
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
