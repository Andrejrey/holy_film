// Import components
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import NewMovies from "./components/NewMovies";
import Categories from "./components/Categories";
import MoviePrices from "./components/MoviePrices";
import Footer from "./components/Footer";

// Import packages
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { getCampaigns } from "./client";
const promise = getCampaigns();

function App() {
  const [rating, setRating] = useState(3);
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((posts) => {
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/movieprices" element={<MoviePrices />} />
      </Routes>
      <NewMovies data={posts} />
      <Categories rating={rating} />
      <Footer />
    </>
  );
}

export default App;
