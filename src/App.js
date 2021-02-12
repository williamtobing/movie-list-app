import { useState, useEffect } from "react";

import Header from "./components/Header";
import Body from "./components/Body";

import "./App.scss";

function App() {
  const [movie, setMovie] = useState([]);

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

  return (
    <>
      <Header />
      <Body movie={movie} />
    </>
  );
}

export default App;
