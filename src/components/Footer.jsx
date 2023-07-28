import "./styles/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links-container">
        <img
          className="footer-holy-movie-logo"
          src="src\images\holymovie.svg"
          alt="logo"
        />
        <div className="footer-about-us">
          <h3>Über uns</h3>
          <ul>
            <li>
              <a href="#">Firma</a>
            </li>
            <li>
              <a href="#">Datenschutz</a>
            </li>
            <li>
              <a href="#">Impressum</a>
            </li>
          </ul>
        </div>
        <div className="footer-new">
          <h3>Neue Filme</h3>
          <ul>
            <li>
              <a href="#">Film 1</a>
            </li>
            <li>
              <a href="#">Film 2</a>
            </li>
            <li>
              <a href="#">Film 3</a>
            </li>
          </ul>
        </div>
        <div className="footer-movie-categories">
          <h3>Kategorien</h3>
          <ul>
            <li>
              <a href="#Action">Action</a>
            </li>
            <li>
              <a href="#Fantasy">Fantasy</a>
            </li>
            <li>
              <a href="#Komödie">Komödie</a>
            </li>
          </ul>
        </div>
        <div className="footer-social-media">
          <h3>Social media</h3>
          <div className="footer-sm-div-one">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="">
              <InstagramIcon />
            </a>
            <a href="">
              <TwitterIcon />
            </a>
          </div>
          <div className="footer-sm-div-two">
            <a href="">
              <YouTubeIcon />
            </a>
            <a href="">
              <PinterestIcon />
            </a>
            <a href="">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
      <p id="copyright">© 2023 Holy Film GmbH & Co. KG</p>
    </footer>
  );
};

export default Footer;
