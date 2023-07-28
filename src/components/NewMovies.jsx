import { useState } from "react";
// Import components
import NewMovieCard from "./NewMovieCard";
import MovieDetails from "./MovieDetails";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const NewMovies = ({ movies }) => {
  const [movie, setMovie] = useState(false);

  return (
    <div id="newMovies-container" style={{ marginBottom: "2rem" }}>
      <h2
        id="newMovies"
        style={{
          textAlign: "center",
          color: "#575761",
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "3rem 0rem 1rem 0rem",
        }}
      >
        Neue Filme
      </h2>
      <swiper-container>
        {movies &&
          movies.map((m) => {
            return (
              <swiper-slide
                key={m.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NewMovieCard
                  title={m.title}
                  publicationDate={m.publicationdate}
                  genre={m.category}
                  image={m.image}
                  movie={movie}
                  displayShowDetails={true}
                  setMovie={setMovie}
                />
                {movie && (
                  <MovieDetails
                    title={m.title}
                    rating={m.rating}
                    genre={m.category}
                    description={m.description}
                    image={m.image}
                    cinemas={m.cinemas}
                  />
                )}
              </swiper-slide>
            );
          })}
      </swiper-container>
    </div>
  );
};

export default NewMovies;
