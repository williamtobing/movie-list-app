import Movie from "./Movie";

const MovieList = ({ movie }) => {
  return (
    <div className="movie-list">
      {movie.map((movieDetail) => {
        return <Movie movie={movieDetail} />;
      })}
    </div>
  );
};

export default MovieList;
