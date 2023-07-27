import { useState } from "react";
import "./styles/categories.css";

import CategoriesMovieCard from "./CategoriesMovieCard";

const Categories = ({ data, rating }) => {
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
    <div className="all-container">
      <div className="categories-container">
        <h2 id="categories">Categories</h2>
        {Object.entries(groupedMovies).map(([genre, movies]) => (
          <div key={genre}>
            <h3 className="genre-heading">{genre}</h3>
            <div className="movies-container">
              {movies.map((movie) => (
                <div key={movie.sys.id}>
                  <CategoriesMovieCard
                    title={movie.fields.title}
                    genre={movie.fields.genre}
                    image={movie.fields.image.fields.file.url}
                    movie={movie}
                    setMovie={setMovie}
                    rating={rating}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
