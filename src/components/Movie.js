import { AiFillLike } from "react-icons/ai";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src="" alt="" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span
          className={
            movie.like <= 20000
              ? "red"
              : movie.like >= 80000
              ? "green"
              : "orange"
          }
        >
          <AiFillLike /> {movie.like}
        </span>
      </div>
      <div className="overview">
        <h3>{movie.title}</h3>
        <h4>{movie.showTime}</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          consequatur vitae tenetur reprehenderit error architecto
          exercitationem? Possimus voluptate expedita, voluptatem sed et qui
          unde ad! Aperiam magnam at fugit dignissimos?
        </p>
      </div>
    </div>
  );
};

export default Movie;
