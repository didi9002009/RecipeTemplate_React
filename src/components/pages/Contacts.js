import React, { Component } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

class Contacts extends Component {
  render() {
    return (
      <ContactContainer>
        <section id="contact">
          <div className="container-fluid no-padding">
            <div className="row">
              <div className="col-md-6 my-3">
                <div className="embed-responsive embed-responsive-21by9 height-60">
                  <iFrame
                    className="embed-responsive-item"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214209.98185206568!2d151.549615306413!3d-32.976584806088354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b733e1371c702e5%3A0x4017d681632a8a0!2sNewcastle%20NSW!5e0!3m2!1sen!2sau!4v1578897097955!5m2!1sen!2sau"
                    width="100"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                  />
                </div>
              </div>
              <div className="col-md-6 my-3 align-self-center">
                <div className="card text-center">
                  <div className="card-header">
                    <h1 className="text-uppercase">contact list</h1>
                  </div>
                  <div className="card-body">
                    <form>
                      {/* <!-- input group 1--> */}
                      <div class="input-group my-3">
                        <div className="input-group-prepend">
                          <div className="input-group-text" id="input-text">
                            <i className="fas fa-user" />
                          </div>
                        </div>
                        <input
                          type="text"
                          id="text"
                          className="form-control form-control-lg"
                          placeholder="Enter your name here"
                        />
                      </div>
                      {/* <!-- input group 2--> */}
                      <div className="input-group my-3">
                        <div className="input-group-prepend">
                          <div className="input-group-text" id="input-phone">
                            <i className="fas fa-phone" />
                          </div>
                        </div>
                        <input
                          type="text"
                          id="phone"
                          className="form-control form-control-lg"
                          placeholder="Enter your phone number here"
                        />
                      </div>
                      {/* <!-- input group 3--> */}
                      <div className="input-group my-3">
                        <div className="input-group-prepend">
                          <div className="input-group-text" id="input-email">
                            <i className="fas fa-envelope" />
                          </div>
                        </div>
                        <input
                          type="email"
                          id="text"
                          className="form-control form-control-lg"
                          placeholder="Enter your email here"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-block btn-lg text-uppercase contact-btn"
                      >
                        <i className="far fa-hand-point-right mr-2" />
                        click here
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContactContainer>
    );
  }
}

export default Contacts;

const ContactContainer = styled.section`
  .height-60 {
    min-height: 60vh;
  }
  #contact .card {
    background: rgba(0, 0, 0, 0.5);
    transition: all 2s ease;
  }
  #contact .card:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  #contact .card-header {
    color: #d3325f;
  }
  #contact .input-group-text {
    background: #d3325f;
    border-color: #d3325f;
    color: #242424;
  }
  #contact .card input {
    color: #606060;
  }

  #contact .card input::placeholder {
    color: #606060;
  }

  .contact-btn {
    color: #d3325f;
    border-color: #d3325f;
    background: transparent;
    transition: all 2s ease-in-out;
  }

  .contact-btn:hover {
    background: #c9c1ac;
    color: #d3325f;
    border-color: #c9c1ac;
  }
`;
