const NewMovieCard = ({ title, publicationDate, genre, image }) => {
  console.log(genre);
  return (
    <div className="carouselItem">
      <img src={image} alt="Poster of the Movie" className="carImage" />
      <h3>{title}</h3>
      <p>Erscheinungsdatum: {publicationDate}</p>
      {/* <div>
        <p className="genre">Genre: </p>
        {genre.map((g) => {
          return <p>{g}</p>;
        })}
      </div> */}
      <p>Genre: {genre.map((g) => g).join(", ")}</p>
      <button>Mehr erfahren</button>
    </div>
  );
};

export default NewMovieCard;
