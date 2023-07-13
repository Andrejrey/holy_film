import CategoriesMovieCard from "./CategoriesMovieCard";
import MovieDetails from "./MovieDetails";

const Categories = ({ rating }) => {
  return (
    <div>
      <h1>Categories</h1>
      <CategoriesMovieCard />
      <MovieDetails rating={rating} />
    </div>
  );
};

export default Categories;
