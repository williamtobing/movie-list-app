import { useSelector } from "react-redux";

import MovieList from "./MovieList";
import Filter from "./Filter";

const Body = ({ movie, year }) => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <>
      <Filter year={year} />

      {isLoading ? (
        <h1 className="no-movie">Loading...</h1>
      ) : movie.length > 0 ? (
        <MovieList movie={movie} />
      ) : (
        <h1 className="no-movie">Movie not found.</h1>
      )}
    </>
  );
};

export default Body;
