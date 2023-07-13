const NewMovieCard = ({
  title,
  publicationDate,
  genre,
  image,
  movie,
  setMovie,
}) => {
  return (
    <div
      style={{
        width: "400px",
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
          width: `400px`,
          heigth: `600px`,
          borderRadius: "20px 20px 0px 0px",
        }}
      />
      <h3
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "1.5rem",
          margin: "0.5rem 0rem",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "white",
          fontSize: "1rem",
          textAlign: "center",
          marginBottom: "0.25rem",
        }}
      >
        Erscheinungsdatum: {publicationDate}
      </p>
      <p
        style={{
          color: "white",
          fontSize: "1rem",
          textAlign: "center",
          marginBottom: "0.25rem",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        Genre: {genre.map((g) => g).join(", ")}
      </p>
      <button
        style={{
          width: "fit-content",
          fontWeight: "bold",
          fontSize: "1rem",
          border: "none",
          borderRadius: "10px",
          backgroundColor: "#ffbf46",
          color: "white",
          padding: "6px 12px",
          cursor: "pointer",
          margin: "1rem 0rem",
        }}
        onClick={() => setMovie(!movie)}
      >
        Mehr erfahren
      </button>
    </div>
  );
};

export default NewMovieCard;
