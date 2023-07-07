import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NewMovies from "./components/NewMovies";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <NewMovies />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
