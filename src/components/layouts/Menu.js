import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Menu() {
  return (
    <MenuContainer>
      <section className="py-5" id="special-items">
        <div className="container my-5">
          <div className="row parent-container">
            {/*  menu item   */}
            <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
              <div className="item-container">
                <img
                  src="../../.././images/sushiBlack.jpg"
                  className="img-fluid img-thumbnail item-img"
                  alt="menu item"
                />
                <a href="img/sushiBlack.jpg">
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
                  src="../../.././images/sushiChops.jpg"
                  className="img-fluid img-thumbnail item-img"
                  alt="menu item"
                />
                <a href="img/sushiChops.jpg">
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
                <Link href="img/sushiOnTable.jpg">
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
                  src="i../../.././images/sushiWhole.jpg"
                  className="img-fluid img-thumbnail item-img"
                  alt="menu item"
                />
                <Link href="img/sushiWhole.jpg">
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
                <Link href="img/sushiKnives.jpg">
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
                <Link href="img/sushiRed.jpg">
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
