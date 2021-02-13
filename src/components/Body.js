import MovieList from "./MovieList";
import Filter from "./Filter";

const Body = ({ movie, year }) => {
  return (
    <>
      <Filter year={year} />
      {movie.length > 0 ? (
        <MovieList movie={movie} />
      ) : (
        <h1 className="no-movie">Movie not found.</h1>
      )}
    </>
  );
};

export default Body;
