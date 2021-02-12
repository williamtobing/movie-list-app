const Movie = ({ movie }) => {
  const posterLink = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="movie">
      <img src={posterLink + movie.poster_path} alt="Poster" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span
          className={
            movie.vote_count <= 4
              ? "red"
              : movie.vote_count >= 8
              ? "green"
              : "orange"
          }
        >
          {movie.vote_average}
        </span>
      </div>
      <div className="overview">
        <h3>{movie.title}</h3>
        <h4>Release Date: {movie.release_date}</h4>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
