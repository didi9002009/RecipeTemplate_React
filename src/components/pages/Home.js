import React, { Component } from "react";
import { InfoConsumer } from "../context";
import Info from "../Info";
import Menu from "../layouts/Menu";
import HeaderCarousel from "../layouts/HeaderCarousel";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <HeaderCarousel />
          <Menu />
          <InfoConsumer>
            {value => {
              return value.info.map(item => {
                return <Info key={item.id} item={item} />;
              });
            }}
          </InfoConsumer>
        </div>
      </div>
    );
  }
}

export default Home;
