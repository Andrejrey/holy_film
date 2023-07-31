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
        <Route path="/movie_details/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
