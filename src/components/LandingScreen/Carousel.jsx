import React from "react";
import { Carousel } from "react-bootstrap";
import discusPlanted from "../../images/discus planted background.jpg";
import plantedAquarium from "../../images/planted aquarium black background.jpg";
import goldAngelfish from "../../images/gold angelfish planted background.jpg";
import whiteBetta from "../../images/white betta black background.jpg";
import stripedAngelfish from "../../images/striped angelfish planted background.jpg";
import "./Carousel.css";



const CarouselLanding = () => {
  return (
    <div className="Carousel">
      <br />
      <h2
        style={{
          color: "white",
          fontSize: "36px",
          textAlign: "center",
          backgroundColor: "black",
          borderRadius: "10px",
          webkitTextStrokeWidth: "1.5px",
          webkitTextStrokeColor: "lightcoral",
        }}
      >
        Making fresh-water fish-keeping more enjoyable and organized!
      </h2>
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
              Join the easiest-to-use and best fresh-water aquarium tracking
              app!
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
              Add each individual aquarium to your profile and keep track of all
              the changes unique to each aquarium set-up!
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
              Add your fish within each aquarium and keep it up to date as you
              add more fish, move fish to different aquariums, or fish pass
              away.
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
              Don't forget to add which plants you've used in each aquarium as
              well. You can add, remove, and keep track of trimmings!
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
              The most important step to diagnosing aquarium problems is regular
              water parameter measurements. Keep track of your measurements as
              frequently as you'd like (Gh, Kh, pH, Ni, Na, temperature,
              water-changes).
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselLanding;
