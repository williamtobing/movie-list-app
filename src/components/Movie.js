import Img from "../assets/movie.jpg";

const Movie = () => {
  return (
    <div className="movie">
      <img src={Img} alt="" />
      <div className="movie-info">
        <h3>Movie Title</h3>
        <span className="orange">vote_average</span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
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
