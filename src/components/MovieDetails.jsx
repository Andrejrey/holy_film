import "./styles/movieDetails.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MoviePrices from "./MoviePrices";
import { useState } from "react";

const MovieDetails = () => {
  const [price, setPrice] = useState(false);
  const [rating, setRating] = useState(1);

  return (
    <div className="movie-details-container">
      <div className="movie-details-description-container">
        <img src="src\components\images\ant_man_ver5.jpg" alt="" />
        <div className="movie-details-text-container">
          <div className="movie-details-title-ratings">
            <h1>FILM TITLE</h1>
            <div>
              {rating > 0 ? <StarIcon /> : <StarBorderIcon />}
              {rating > 1 ? <StarIcon /> : <StarBorderIcon />}
              {rating > 2 ? <StarIcon /> : <StarBorderIcon />}
              {rating > 3 ? <StarIcon /> : <StarBorderIcon />}
              {rating > 4 ? <StarIcon /> : <StarBorderIcon />}
            </div>
          </div>
          <div className="movie-details-category-container">
            <p className="movie-details-category">Category:</p>
            <p className="movie-details-category-name"> Action</p>
          </div>
          <p className="movie-details-description">Description:</p>
          <p className="movie-details-description-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            non sequi minus dolor voluptates atque incidunt ad error, minima
            dicta libero veritatis harum, reiciendis id rem sapiente aspernatur
            voluptas facere? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Distinctio non sequi minus dolor voluptates atque incidunt ad
            error, minima dicta libero veritatis harum, reiciendis id rem
            sapiente aspernatur voluptas facere?
          </p>
          <button onClick={() => setPrice(!price)}>See prices</button>
        </div>
        <img
          className="footer-holy-movie-logo"
          src="src\components\images\holymovie.svg"
          alt="logo"
        />
      </div>
      {price && <MoviePrices />}
    </div>
  );
};

export default MovieDetails;
