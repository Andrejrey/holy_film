const CategoriesMovieCard = ({
  title,
  publicationDate,
  genre,
  image,
  movie,
  displayShowDetails,
  displayGenres,
  setMovie,
}) => {
  return (
    <div
      style={{
        width: "200px",
        backgroundColor: "#575761",
        border: "none",
        borderRadius: "20px",
        boxShadow: "7px 7px 10px 0px rgba(87, 87, 87, 0.75)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <img
        src={image}
        alt="Poster of the Movie"
        className="carImage"
        style={{
          width: "200px",
          heigth: "300px",
          borderRadius: "20px 20px 0px 0px",
        }}
      />
      <h3
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "0.8rem",
          margin: "0.5rem 0rem",
        }}
      >
        {title}
      </h3>
    </div>
  );
};

export default CategoriesMovieCard;
