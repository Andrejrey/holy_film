// Import packages
import { Home } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";

// Import components
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import NewMovies from "./components/NewMovies";
import Categories from "./components/Categories";
import MoviePrices from "./components/MoviePrices";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/movieprices" element={<MoviePrices />} />
      </Routes>
      <NewMovies />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
