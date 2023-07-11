import "./styles/movieDetails.css";
import MoviePrices from "./MoviePrices";

const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <h1>Movie Details</h1>
      <MoviePrices />
    </div>
  );
};

export default MovieDetails;
