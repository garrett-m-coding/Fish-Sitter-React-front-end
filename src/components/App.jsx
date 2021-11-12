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
            <h2>Making fresh-water fish-keeping more enjoyable and organized!</h2>
            <br />
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-xs-block w-100"
                  src={discusPlanted}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>JOIN FOR FREE</h3>
                  <p>
                    Join the best, easiest-to-use, fresh-water Aquarium tracking app!
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
                  <h3>TRACK ALL YOUR AQUARIUMS WITH EASE</h3>
                  <p>
                    Add each individual aquarium to keep track of all the changes unique 
                    to each set-up!
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
                  <h3>FISH STATUS</h3>
                  <p>
                    Add your fish within each aquarium and keep it up to date as you add 
                    more fish, move fish to different aquariums, or fish pass away.
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
                  <h3>PLANTS</h3>
                  <p>
                    Don't forget to add which plants you've used in each aquarium as well. 
                    You can add, remove, and keep track of trimmings as well!
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
                  <h3>WATER PARAMETERS</h3>
                  <p>
                    The most important step to diagnosing aquarium problems is regular water 
                    parameter measurements. Keep track of your measurements as frequently as 
                    you'd like (Gh, Kh, pH, Ni, Na, temperature, water-changes).
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
