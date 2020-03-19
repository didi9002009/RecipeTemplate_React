import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import styled from "styled-components";

class NavbarComponent extends Component {
  //  constructor (props){
  //    super(props)
  //  }
  componentDidMount = () => {
    $(".navbar-toggler").click(function() {
      $(".navbar-toggler").toggleClass("change");
    });
  };
  render() {
    return (
      <NavbarContainer className="main-navbar">
        <nav className="navbar navbar-expand-lg">
          {/* <a className="navbar-brand ml-5" href="/#">
          <img src={logo} alt="logo" style={{ width: "35px" }} />
        </a> */}
          <Link href="#" class="navbar-brand text-uppercase primary-color">
            sushi monster
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
            aria-controls="myNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="toggler-btn">
              <div className="bar bar1" />
              <div className="bar bar2" />
              <div className="bar bar3" />
            </div>
          </button>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link text-capitalize" to="/">
                  Home&nbsp;
                  <i className="fas fa-home" />
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-capitalize">special items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-capitalize">menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-capitalize" to="/news">
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-capitalize">reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-capitalize">team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-capitalize" to="/contacts">
                  contacts
                </Link>
              </li>
            </ul>
            <form className="form-inline d-none d-lg-block mr-5">
              <button className="btn nav-btn text-capitalize" type="button">
                order online
              </button>
            </form>
          </div>
        </nav>
      </NavbarContainer>
    );
  }
}

export default NavbarComponent;

const NavbarContainer = styled.nav`
  .navbar {
    background: #c9c1ac;
    padding: 20px 20px;
    transition: all 1s ease;
  }
  .navbar-background {
    padding: 5px 20px;
  }
  .navbar-brand {
    font-size: 30px;
    transition: all 1s ease;
  }
  .navbar-brand:hover {
    color: #242424;
  }
  .navbar-collapse {
    display: block;
  }
  /* .collapse {
    display: none;
  } */
  .nav-link {
    color: #242424;
    text-decoration: none;
    transition: all 2s ease;
    font-size: 23px;
  }
  .nav-link:hover {
    color: #d3325f;
  }
  .nav-btn {
    background: transparent;
    color: #d3325f;
    border: 2px solid #d3325f;
    font-size: 23px;
    transition: all 2s ease;
  }
  .nav-btn:hover {
    color: #242424;
    border: 2px solid #242424;
    transform: rotate(10deg);
  }
  .toggler-btn {
    border: 2px solid #d3325f;
    padding: 5px;
    transition: all 2s ease;
  }

  .bar {
    width: 30px;
    height: 3px;
    margin: 5px;
    background: #d3325f;
    transition: all 0.5s ease;
  }
  .change .bar1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  .change .bar2 {
    opacity: 0;
  }
  .change .bar3 {
    transform: rotate(45deg) translate(-5px, -8px);
  }
`;
