import React, { Component } from "react";
// import { SingleImage } from "react-magnific-popup";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Menu extends Component {
  // constructor(props, context) {
  //   super(props, context);
  //   this.state = {
  //     singleSample: "hide",
  //     lightBoxSample: "hide",
  //     zoomGallery: "hide",
  //     popupVideo: "hide",
  //     popupZoom: "hide",
  //     popupForm: "hide",
  //     popupAjax: "hide"
  //   };
  // }

  // onToggle(type, e) {
  //   e.preventDefault();
  //   let newState = {};

  //   newState[type] = this.state[type] === "hide" ? "show" : "hide";
  //   this.setState(newState);
  // }

  render() {
    return (
      <MenuContainer>
        <section className="py-5" id="special-items">
          <div className="container my-5">
            <div className="row parent-container">
              {/*  menu item   */}
              <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                <div className="item-container">
                  {/* <SingleImage> */}
                  <img
                    src="../../.././images/sushiBlack.jpg"
                    className="img-fluid img-thumbnail item-img"
                    alt="menu item"
                  />
                  <a
                    href="../../.././images/sushiBlack.jpg"
                    // onClick={this.onToggle.bind(this, "singleSample")}
                  >
                    <h1 className="text-uppercase text-center item-link px-3">
                      menu item
                    </h1>
                  </a>
                  {/* </SingleImage> */}
                </div>
              </div>
              {/* <!-- menu item --> */}
              <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                <div className="item-container">
                  <img
                    src="../../.././images/sushiChops.jpg"
                    className="img-fluid img-thumbnail item-img"
                    alt="menu item"
                  />
                  <a href="../../.././images/sushiChops.jpg">
                    <h1 className="text-uppercase text-center item-link px-3">
                      menu item
                    </h1>
                  </a>
                </div>
              </div>
              {/* <!-- menu item --> */}
              <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                <div className="item-container">
                  <img
                    src="../../.././images/sushiOnTable.jpg"
                    className="img-fluid img-thumbnail item-img"
                    alt="menu item"
                  />
                  <Link href="../../.././images/sushiOnTable.jpg">
                    <h1 className="text-uppercase text-center item-link px-3">
                      menu item
                    </h1>
                  </Link>
                </div>
              </div>
              {/* <!-- menu item --> */}
              <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                <div className="item-container">
                  <img
                    src="../../.././images/sushiWhole.jpg"
                    className="img-fluid img-thumbnail item-img"
                    alt="menu item"
                  />
                  <Link href="../../.././images/sushiWhole.jpg">
                    <h1 className="text-uppercase text-center item-link px-3">
                      menu item
                    </h1>
                  </Link>
                </div>
              </div>
              {/* <!-- menu item --> */}
              <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                <div className="item-container">
                  <img
                    src="../../.././images/sushiKnives.jpg"
                    className="img-fluid img-thumbnail item-img"
                    alt="menu item"
                  />
                  <Link href="../../.././images/sushiKnives.jpg">
                    <h1 className="text-uppercase text-center item-link px-3">
                      menu item
                    </h1>
                  </Link>
                </div>
              </div>
              {/* <!-- menu item --> */}
              <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                <div className="item-container">
                  <img
                    src="../../.././images/sushiRed.jpg"
                    className="img-fluid img-thumbnail item-img"
                    alt="menu item"
                  />
                  <Link href="../../.././images/sushiRed.jpg">
                    <h1 className="text-uppercase text-center item-link px-3">
                      menu item
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MenuContainer>
    );
  }
}

export default Menu;

const MenuContainer = styled.menu`
  .item-container {
    position: relative;
    /* for the link */
    overflow: hidden;
    background: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0));
    transition: all 2s ease;
  }

  .item-img {
    transition: all 2s ease;
  }

  .item-container:hover .item-img {
    transform: scale(1.2);
  }

  .item-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #d3325f;
    font-size: 2rem;
    border-top: 3px solid #d3325f;
    border-bottom: 3px solid #d3325f;
    transition: all 2s ease;
    opacity: 0;
  }

  .item-container:hover .item-link {
    opacity: 1;
  }

  .item-link:hover {
    color: #c9c1ac;
    border: 3px solid #c9c1ac;
    background: #c9c1ac;
    color: #242424;
  }
  .item-container:hover {
    outline: 10px solid #d3325f;
    outline: offset 0.8rem;
  }
`;
