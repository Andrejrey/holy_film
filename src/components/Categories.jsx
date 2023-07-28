import { useState } from "react";
import "./styles/categories.css";

import CategoriesMovieCard from "./CategoriesMovieCard";

const Categories = ({ movies }) => {
  const [movie, setMovie] = useState(false);

  // Group movies by genre

  let groupedMovies = [];

  if (movies) {
    groupedMovies = movies.reduce((acc, movie) => {
      const categories = movie.category;
      categories.forEach((categories) => {
        if (!acc[categories]) {
          acc[categories] = [];
        }
        acc[categories].push(movie);
      });

      return acc;
    }, {});
  }

  return (
    <div className="all-container">
      <div className="categories-container">
        <h2 id="categories">Kategorien</h2>
        {Object.entries(groupedMovies).map(([categories, movies]) => (
          <div id={categories} key={categories}>
            <h3 className="genre-heading">{categories}</h3>
            <div className="movies-container">
              {movies &&
                movies.map((m) => (
                  <div key={m.id}>
                    <CategoriesMovieCard
                      title={m.title}
                      genre={m.categories}
                      image={m.image}
                      movie={m}
                      setMovie={setMovie}
                      rating={m.rating}
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
