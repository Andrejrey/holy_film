import NewMovies from "../components/NewMovies";
import Categories from "../components/Categories";

const Home = ({ movies, rating, getDataForMovieDetails }) => {
  return (
    <>
      <NewMovies
        movies={movies}
        getDataForMovieDetails={getDataForMovieDetails}
      />
      <Categories movies={movies} rating={rating} />
    </>
  );
};

export default Home;
