import "./styles/moviePrices.css";

const MoviePrices = () => {
  return (
    <div className="movie-price-container">
      <h2>Where i can watch this movie</h2>
      <div className="movie-price-details-container">
        <div>
          <p>Where?</p>
          <ul>
            <li>Cinemax</li>
            <li>CineStar</li>
            <li>Cineplex</li>
          </ul>
        </div>
        <div>
          <p>Price</p>
          <ul>
            <li>from 12.50$</li>
            <li>from 15.00$</li>
            <li>from 11.00$</li>
          </ul>
        </div>
        <div className="movie-price-ticket">
          <p>Ticket</p>
          <a href="#">Buy ticket now</a>
          <a href="#">Buy ticket now</a>
          <a href="#">Buy ticket now</a>
        </div>
      </div>
    </div>
  );
};

export default MoviePrices;
