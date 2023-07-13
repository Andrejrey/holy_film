import { useState } from "react";
// Import components
import NewMovieCard from "./NewMovieCard";
import MovieDetails from "./MovieDetails";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const NewMovies = ({ data }) => {
  const [movie, setMovie] = useState(false);

  return (
    <div id="sectionNew">
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
        New Movies
      </h2>
      <swiper-container>
        {data.map((d) => {
          return (
            <swiper-slide
              key={d.sys.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <NewMovieCard
                title={d.fields.title}
                publicationDate={d.fields.publicationDate}
                genre={d.fields.genre}
                image={d.fields.image.fields.file.url}
                movie={movie}
                setMovie={setMovie}
              />
            </swiper-slide>
          );
        })}
      </swiper-container>
      {movie && <MovieDetails />}
    </div>
  );
};

export default NewMovies;
