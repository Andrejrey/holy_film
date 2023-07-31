import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MoviePrices from "./MoviePrices";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const [price, setPrice] = useState(false);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/movies/${id}`).then((response) => {
      setMovie(response.data);
    });
  }, [id]);
  return (
    <>
      {movie && (
        <div className="movie-details-container">
          <div className="movie-details-description-container">
            <img src={movie[0].image} alt="test" />
            <div className="movie-details-text-container">
              <div className="movie-details-title-ratings">
                <h1>{movie[0].title}</h1>
                <div>
                  {movie[0].rating > 0 ? <StarIcon /> : <StarBorderIcon />}
                  {movie[0].rating > 1 ? <StarIcon /> : <StarBorderIcon />}
                  {movie[0].rating > 2 ? <StarIcon /> : <StarBorderIcon />}
                  {movie[0].rating > 3 ? <StarIcon /> : <StarBorderIcon />}
                  {movie[0].rating > 4 ? <StarIcon /> : <StarBorderIcon />}
                </div>
              </div>
              <div className="movie-details-category-container">
                <p className="movie-details-category">Genre:</p>
                <p className="movie-details-category-name">
                  {" "}
                  {movie[0].category.map((g) => g).join(", ")}
                </p>
              </div>
              <p className="movie-details-description">Beschreibung:</p>
              <p className="movie-details-description-text">
                {movie[0].description}
              </p>
              <button onClick={() => setPrice(!price)}>
                Verfügbare Kinos ansehen
              </button>
            </div>
          </div>
          {price && <MoviePrices cinemas={movie[0].cinemas} />}
        </div>
      )}
    </>
  );
};

export default MovieDetails;
