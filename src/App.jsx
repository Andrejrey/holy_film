import { useState } from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewMovies from "./components/NewMovies";
import MoviePrices from "./components/MoviePrices";

function App() {
  const [rating, setRating] = useState(3);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/movieprices" element={<MoviePrices />} />
      </Routes>
      <NewMovies />
      <Categories rating={rating} />
      <Footer />
    </>
  );
}

export default App;
