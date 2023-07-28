import "./styles/movieDetails.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MoviePrices from "./MoviePrices";
import { useState } from "react";

const MovieDetails = ({
  title,
  rating,
  genre,
  description,
  image,
  cinemas,
}) => {
  const [price, setPrice] = useState(false);
  return (
    <div className="movie-details-container">
      <div className="movie-details-description-container">
        <img src={image} alt="test" />
        <div className="movie-details-text-container">
          <div className="movie-details-title-ratings">
            <h1>{title}</h1>
            <div>
              {rating > 0 ? <StarIcon /> : <StarBorderIcon />}
              {rating > 1 ? <StarIcon /> : <StarBorderIcon />}
              {rating > 2 ? <StarIcon /> : <StarBorderIcon />}
              {rating > 3 ? <StarIcon /> : <StarBorderIcon />}
              {rating > 4 ? <StarIcon /> : <StarBorderIcon />}
            </div>
          </div>
          <div className="movie-details-category-container">
            <p className="movie-details-category">Genre:</p>
            <p className="movie-details-category-name">
              {" "}
              {genre.map((g) => g).join(", ")}
            </p>
          </div>
          <p className="movie-details-description">Beschreibung:</p>
          <p className="movie-details-description-text">{description}</p>
          <button onClick={() => setPrice(!price)}>
            Verfügbare Kinos ansehen
          </button>
        </div>
      </div>
      {price && <MoviePrices cinemas={cinemas} />}
    </div>
  );
};

export default MovieDetails;
