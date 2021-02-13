import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLoadMovie, isLoadedMovie } from "./actions";

import Header from "./components/Header";
import Body from "./components/Body";

import "./App.scss";

function App() {
  const yearList = ["2014", "2015", "2016", "2017", "2018", "2019", "2020"];

  const [movie, setMovie] = useState([]);
  const enteredSearch = useSelector((state) => state.search);
  const entederYear = useSelector((state) => state.year);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovie = async () => {
      dispatch(isLoadMovie());
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=5"
      );
      const data = await res.json();
      dispatch(isLoadedMovie());
      setMovie(data.results);
    };

    getMovie();
  }, [dispatch]);

  const filteredTitle = movie.filter(
    (movieDetail) =>
      movieDetail.title.toLowerCase().includes(enteredSearch.toLowerCase()) &&
      movieDetail.release_date.includes(entederYear)
  );

  return (
    <>
      <Header />
      <Body movie={filteredTitle} year={yearList} />
    </>
  );
}

export default App;
