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
      <div className="footer-logo">HOLY FILM</div>
      <div className="footer-links-container">
        <div className="footer-about-us">
          <h3>About us</h3>
          <ul>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Data protection</a>
            </li>
            <li>
              <a href="#">Impressum</a>
            </li>
          </ul>
        </div>
        <div className="footer-new">
          <h3>New Movies</h3>
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
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="#">Action</a>
            </li>
            <li>
              <a href="#">Fantasy</a>
            </li>
            <li>
              <a href="#">Comedy</a>
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
      <p>(c) 2023 Holy Film Gmgh + CO. KG</p>
    </footer>
  );
};

export default Footer;
