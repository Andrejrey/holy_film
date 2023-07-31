import "./styles/movieDetails.css";
import { Link } from "react-router-dom";

const NewMovieCard = ({
  id,
  title,
  publicationDate,
  genre,
  image,
  displayGenres,
}) => {
  const publicationDateFormated = publicationDate.split("T");
  const publicationDateFormatedTwo = publicationDateFormated[0]
    .split("-")
    .reverse()
    .join(".");
  return (
    <>
      <div className="new-movie-card-container">
        <img src={image} alt="Poster of the Movie" className="carImage" />
        <h3>{title}</h3>
        <p>Erscheinungsdatum: {publicationDateFormatedTwo}</p>
        {displayGenres && (
          <p id="new.movie.card.genre.p">
            Genre: {genre.map((g) => g).join(", ")}
          </p>
        )}

        <Link className="link-test" to={`movie_details/${id}`}>
          Mehr erfahren
        </Link>
      </div>
    </>
  );
};

export default NewMovieCard;
