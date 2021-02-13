import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";

import "./App.scss";

function App() {
  const yearList = [
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  const [movie, setMovie] = useState([]);
  const enteredSearch = useSelector((state) => state.search);
  const entederYear = useSelector((state) => state.year);

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

  const filteredYear = movie.filter((movieDetail) =>
    movieDetail.release_date.includes(entederYear)
  );

  const filteredTitle = movie.filter((movieDetail) =>
    movieDetail.title.toLowerCase().includes(enteredSearch.toLowerCase())
  );

  return (
    <>
      <Header />
      <Body movie={filteredTitle} year={yearList} filteredYear={filteredYear} />
    </>
  );
}

export default App;
