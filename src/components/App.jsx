import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import { Carousel } from "react-bootstrap";
import discusPlanted from "../images/discus planted background.jpg";
import plantedAquarium from "../images/planted aquarium black background.jpg";
import goldAngelfish from "../images/gold angelfish planted background.jpg";
import whiteBetta from "../images/white betta black background.jpg";
import stripedAngelfish from "../images/striped angelfish planted background.jpg";
// import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <br />
            <br />
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-xs-block w-100"
                  src={discusPlanted}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-xs-block w-100"
                  src={plantedAquarium}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-xs-block w-100"
                  src={goldAngelfish}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-xs-block w-100"
                  src={whiteBetta}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-xs-block w-100"
                  src={stripedAngelfish}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default App;
