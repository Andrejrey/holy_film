// Import components
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";

// Import packages
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

export const MovieDetailsContext = createContext();

function App() {
  const [rating, setRating] = useState(3);
  const [movies, setMovies] = useState(null);
  const [movieDetailsTitle, setMovieDetailsTitle] = useState(null);
  const [movieDetailsRating, setMovieDetailsRating] = useState(null);
  const [movieDetailsGenre, setMovieDetailsGenre] = useState(null);
  const [movieDetailsDescription, setMovieDetailsDescription] = useState(null);
  const [movieDetailsImage, setMovieDetailsImage] = useState(null);
  const [movieDetailsCinemas, setMovieDetailsCinemas] = useState(null);
  const [movieDetailsId, setMovieDetailsId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/movies").then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home movies={movies} rating={rating} />} />
        <Route
          path="/movie_details/:id"
          element={
            <MovieDetails
              id={movieDetailsId}
              title={movieDetailsTitle}
              rating={movieDetailsRating}
              genre={movieDetailsGenre}
              description={movieDetailsDescription}
              image={movieDetailsImage}
              cinemas={movieDetailsCinemas}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
