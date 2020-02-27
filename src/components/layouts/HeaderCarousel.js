import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import { placeInfo } from '../data';
import styled from "styled-components";

function HeaderCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <HeaderCarouselContainer>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
                  {/* <!-- image --> */}
                  <div class="align-self-center ml-3">
                    <img
                      src="./../.././images/person1.jpg"
                      alt=""
                      class="rounded-circle review-img"
                    />
                  </div>
                  {/* <!-- text --> */}
                  <div class="review-text px-5">
                    <h2 class="text-capitalize mb-3 primary-color">
                      customer name
                    </h2>
                    <p class="lead text-muted">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Reiciendis accusamus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
                  {/* <!-- image --> */}
                  <div class="align-self-center ml-3">
                    <img
                      src="./../.././images/person2.jpg"
                      alt=""
                      class="rounded-circle review-img"
                    />
                  </div>
                  {/* <!-- text --> */}
                  <div class="review-text px-5">
                    <h2 class="text-capitalize mb-3 primary-color">
                      customer name
                    </h2>
                    <p class="lead text-muted">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Reiciendis accusamus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
                  {/* <!-- image --> */}
                  <div class="align-self-center ml-3">
                    <img
                      src="./../.././images/person3.jpg"
                      alt=""
                      class="rounded-circle review-img"
                    />
                  </div>
                  {/* <!-- text --> */}
                  <div class="review-text px-5">
                    <h2 class="text-capitalize mb-3 primary-color">
                      customer name
                    </h2>
                    <p class="lead text-muted">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Reiciendis accusamus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </HeaderCarouselContainer>
  );
}

export default HeaderCarousel;

const HeaderCarouselContainer = styled.header`
  .review-item {
    background: rgba(255, 255, 255, 0.7);
    clip-path: polygon(5% 0, 100% 0, 90% 100%, 0 100%);
  }
  .review-img {
    width: 150px;
  }
`;
