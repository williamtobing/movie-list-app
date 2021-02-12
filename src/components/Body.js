import MovieList from "./MovieList";

const Body = ({ movie }) => {
  return (
    <div>
      {movie.length > 0 ? (
        <MovieList movie={movie} />
      ) : (
        <h1 className="no-movie">Movie not found.</h1>
      )}
    </div>
  );
};

export default Body;
