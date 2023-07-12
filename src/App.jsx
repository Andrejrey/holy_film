
import { useState } from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";


import { Home } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";


import NavBar from "./components/NavBar";
import Header from "./components/Header";
import NewMovies from "./components/NewMovies";
import Categories from "./components/Categories";
import MoviePrices from "./components/MoviePrices";
import Footer from "./components/Footer";

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
