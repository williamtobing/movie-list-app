import MovieList from "./MovieList";
import Filter from "./Filter";

const Body = ({ movie, year, filteredYear }) => {
  return (
    <>
      <Filter year={year} />
      {movie.length > 0 ? (
        <MovieList movie={movie} filteredYear={filteredYear} />
      ) : (
        <h1 className="no-movie">Movie not found.</h1>
      )}
    </>
  );
};

export default Body;
