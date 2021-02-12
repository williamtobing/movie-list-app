import Movie from "./Movie";

const MovieList = ({ movie }) => {
  return (
    <div className="movie-list">
      {movie.map((movieDetail) => {
        return <Movie key={movieDetail.id} movie={movieDetail} />;
      })}
    </div>
  );
};

export default MovieList;
