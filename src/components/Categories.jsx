import React, { useState } from "react";

import MovieDetails from "./MovieDetails";
import CategoriesMovieCard from "./CategoriesMovieCard";

const Categories = ({ data }) => {
  const [movie, setMovie] = useState(false);

  // Group movies by genre
  const groupedMovies = data.reduce((acc, movie) => {
    const genres = movie.fields.genre;
    genres.forEach((genre) => {
      if (!acc[genre]) {
        acc[genre] = [];
      }
      acc[genre].push(movie);
    });

    return acc;
  }, {});

  return (
    <div style={{ backgroundColor: "#8acb88", marginBottom: "2rem" }}>
      <h2
        id="categories"
        style={{
          textAlign: "center",
          color: "#575761",
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "3rem 0rem 1rem 0rem",
          padding: "2rem",
        }}
      >
        Categories
      </h2>
      {console.log(groupedMovies)}
      {Object.entries(groupedMovies).map(([genre, movies]) => (
        <div key={genre}>
          <h3
            style={{
              color: "#575761",
              fontSize: "2rem",
              fontWeight: "bold",
              margin: "3rem 0rem 1rem 2rem",
            }}
          >
            {genre}
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "2rem",
              paddingBottom: "2rem",
              gap: "2rem",
            }}
          >
            {movies.map((movie) => (
              <div key={movie.sys.id}>
                <CategoriesMovieCard
                  title={movie.fields.title}
                  publicationDate={movie.fields.publicationDate}
                  genre={movie.fields.genre}
                  image={movie.fields.image.fields.file.url}
                  movie={movie}
                  displayShowDetails={false}
                  displayGenres={false}
                  setMovie={setMovie}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
