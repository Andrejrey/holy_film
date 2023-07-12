import { useState } from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NewMovies from "./components/NewMovies";

function App() {
  const [rating, setRating] = useState(3);
  return (
    <>
      <NavBar />
      <Header />
      <NewMovies />
      <Categories rating={rating} />
      <Footer />
    </>
  );
}

export default App;
