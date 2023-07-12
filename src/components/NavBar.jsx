import "./styles/navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar className="navbar" sticky="top" expand="lg">
        <Container className="container">
          <Navbar.Brand href="/" to="/" className="navbar-brand">
            <img
              src="holymovie.svg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav ms-auto">
              <Nav.Link href="/" to="/">
                Home
              </Nav.Link>
              <Nav.Link href="/new-movies" to="/new-movies">
                New Movies
              </Nav.Link>
              <Nav.Link href="/categories" to="/categories">
                Categories
              </Nav.Link>
              <Nav.Link href="/movieprices" to="/moviePrices">
                Movie Prices
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
