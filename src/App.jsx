// Import components
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import NewMovies from "./components/NewMovies";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

// Import packages
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getCampaigns } from "./client";
import axios from "axios";

const promise = getCampaigns();

function App() {
  const [rating, setRating] = useState(3);
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});

  useEffect(() => {
    promise.then((posts) => {
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8000/movies").then((response) => {
      setMovies(response.data);
    });
  }, []);

  console.log("movies:", movies);

  return (
    <>
      <NavBar />
      <Header />
      <NewMovies data={posts} />
      {/* <Routes>
        <Route path="/{prodURL}" element={<MoviePrices />} />
      </Routes> */}

      <Categories data={posts} rating={rating} />
      <Footer />
    </>
  );
}

export default App;
