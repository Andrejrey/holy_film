import "./styles/moviePrices.css";

const MoviePrices = ({ cinemas }) => {
  return (
    <div className="movie-price-container">
      <h2>Wo kann ich diesen Film anschauen?</h2>
      <div className="movie-price-details-container">
        <div>
          <p>Wo?</p>
          <ul>
            <li>CineStar</li>
            <li>CinemaxX</li>
            <li>Cineplex</li>
            <li>UCI</li>
          </ul>
        </div>
        <div>
          <p>Preis</p>
          <ul>
            <li>
              {cinemas.CineStar
                ? `ab ${cinemas.CineStar} €`
                : "Nicht verfügbar"}
            </li>
            <li>
              {cinemas.CinemaxX
                ? `ab ${cinemas.CinemaxX} €`
                : "Nicht verfügbar"}
            </li>
            <li>
              {cinemas.Cineplex
                ? `ab ${cinemas.Cineplex} €`
                : "Nicht verfügbar"}
            </li>
            <li>{cinemas.UCI ? `ab ${cinemas.UCI} €` : "Nicht verfügbar"}</li>
          </ul>
        </div>
        <div className="movie-price-ticket">
          <p>Tickets</p>
          <a href="https://www.cinestar.de/">Jetzt Tickets kaufen</a>
          <a href="https://www.cinemaxx.de/">Jetzt Tickets kaufen</a>
          <a href="https://www.cineplex.de/">Jetzt Tickets kaufen</a>
          <a href="https://www.uci-kinowelt.de/">Jetzt Tickets kaufen</a>
        </div>
      </div>
    </div>
  );
};

export default MoviePrices;
