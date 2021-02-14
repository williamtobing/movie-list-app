import LazyLoad from "react-lazyload";

const Movie = ({ movie }) => {
  const posterLink = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="movie">
      <LazyLoad throttle={200} height={300}>
        <img src={posterLink + movie.poster_path} alt="Poster" />

        <div className="movie-info">
          <h3>{movie.title}</h3>
          <span
            className={
              movie.vote_average < 5
                ? "red"
                : movie.vote_average >= 8
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
      </LazyLoad>
    </div>
  );
};

export default Movie;
