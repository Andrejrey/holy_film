import { Home } from "@mui/icons-material";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NewMovies from "./components/NewMovies";
import { Routes, Route } from "react-router-dom";
import MoviePrices from "./components/MoviePrices";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/new-movies" element={<NewMovies />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/movieprices" element={<MoviePrices />} />
      </Routes>
      <Header />
      <NewMovies />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
