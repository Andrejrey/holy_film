const NewMovieCard = ({ title, publicationDate, genre, image }) => {
  return (
    <div className="carouselItem">
      <img src={image} alt="Poster of the Movie" />
      <h3>{title}</h3>
      <p>Erscheinungsdatum: {publicationDate}</p>
      <p>Genre: {genre}</p>
      <button>More information</button>
    </div>
  );
};

export default NewMovieCard;
