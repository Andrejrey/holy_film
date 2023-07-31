import NewMoviesSlider from "./NewMoviesSlider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const NewMovies = ({ movies, getDataForMovieDetails }) => {
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
      <NewMoviesSlider
        movies={movies}
        getDataForMovieDetails={getDataForMovieDetails}
      />
    </div>
  );
};

export default NewMovies;
