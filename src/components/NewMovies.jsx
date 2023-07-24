import { useState } from "react";
// Import components
import NewMovieCard from "./NewMovieCard";
import MovieDetails from "./MovieDetails";
import Categories from "./Categories";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const NewMovies = ({ data }) => {
  const [movie, setMovie] = useState(false);

  return (
    <div style={{ marginBottom: "2rem" }}>
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
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NewMovieCard
                title={d.fields.title}
                publicationDate={d.fields.publicationDate}
                genre={d.fields.genre}
                image={d.fields.image.fields.file.url}
                movie={movie}
                displayShowDetails={true}
                setMovie={setMovie}
              />
              {movie && (
                <MovieDetails
                  title={d.fields.title}
                  rating={d.fields.rating}
                  genre={d.fields.genre}
                  description={d.fields.description}
                  image={d.fields.image.fields.file.url}
                  imageName={d.fields.image.fields.title}
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
