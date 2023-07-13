import "./styles/header.css";

const Header = () => {
  return (
    <div id="headerContainer">
      <div id="headerTitle">
        <img
          src="holymovie.svg"
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <h1>Holy Film</h1>
      </div>
      <p>Discover the best films here!</p>
    </div>
  );
};

export default Header;
