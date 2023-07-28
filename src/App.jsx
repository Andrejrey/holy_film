// Import components
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import NewMovies from "./components/NewMovies";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

// Import packages
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

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
      <NewMovies movies={movies} />
      {/* <Routes>
        <Route path="/{prodURL}" element={<MoviePrices />} />
      </Routes> */}

      <Categories movies={movies} rating={rating} />
      <Footer />
    </>
  );
}

export default App;
