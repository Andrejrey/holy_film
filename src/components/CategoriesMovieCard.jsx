import "./styles/categoriesMovieCard.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const CategoriesMovieCard = ({
  title,
  publicationDate,
  genre,
  image,
  movie,
  displayShowDetails,
  displayGenres,
  setMovie,
  rating,
}) => {
  return (
    <div className="movie-container">
      <img src={image} alt="Poster of the Movie" className="posterImage" />
      <h3 className="movie-title">{title}</h3>
      <div>
        {rating > 0 ? <StarIcon /> : <StarBorderIcon />}
        {rating > 1 ? <StarIcon /> : <StarBorderIcon />}
        {rating > 2 ? <StarIcon /> : <StarBorderIcon />}
        {rating > 3 ? <StarIcon /> : <StarBorderIcon />}
        {rating > 4 ? <StarIcon /> : <StarBorderIcon />}
      </div>
    </div>
  );
};

export default CategoriesMovieCard;
