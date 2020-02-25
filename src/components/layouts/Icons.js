import React from "react";
import { Link } from "react-router-dom";

function Icons() {
  return (
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
          <h2 className="primary-color p-2 text-capitalize">Food Monster</h2>
        </div>
      </div>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary  my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Icons;
