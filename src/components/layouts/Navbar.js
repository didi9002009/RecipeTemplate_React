import React from "react";
// import logo from "../../logo.svg";
// import {
//   Nav,
//   Navbar,
//   NavDropdown,
//   Form,
//   FormControl,
//   Button
// } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Navbar.Brand href="#home">Food Moster</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#specials">Specials</Nav.Link>
    //       <Nav.Link href="#menu">Menu</Nav.Link>
    //       <Nav.Link href="#about">About</Nav.Link>
    //       <Nav.Link href="#reviews">Reviews</Nav.Link>
    //       <Nav.Link href="#team">Team</Nav.Link>
    //       <Nav.Link href="#contackt">Contact</Nav.Link>
    //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">
    //           Another action
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">
    //           Separated link
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Form inline>
    //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //       <Button variant="outline-primary">Search</Button>
    //     </Form>
    //   </Navbar.Collapse>
    // </Navbar>

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      {/* <a className="navbar-brand ml-5" href="/#">
          <img src={logo} alt="logo" style={{ width: "35px" }} />
        </a> */}
      <div className="container-fluid info p-3" id="top-icons">
        <div className="row">
          <div className="col d-flex justify-content-between align-items-baseline flex-wrap">
            <div className="info-icons p-2">
              <Link href="#" className="mr-2 primary-color">
                <i className="fab fa-facebook fa-2x" />
              </Link>
              <Link href="#" className="mr-2 primary-color">
                <i className="fab fa-instagram fa-2x" />
              </Link>
              <Link href="#" className="mr-2 primary-color">
                <i clLinkss="fab fa-twitter fa-2x" />
              </Link>
              <Link href="#" className="mr-2 primary-color">
                <i className="fab fa-yelp fa-2x" />
              </Link>
            </div>
            <h2 className="primary-color p-2 text-capitalize">Information</h2>
          </div>
        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: "#fff" }} />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase ml-5" to="/">
              Home&nbsp;
              <i className="fas fa-home" />
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/news"
            >
              news
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/contacts"
            >
              contact us
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary  my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavbarComponent;
