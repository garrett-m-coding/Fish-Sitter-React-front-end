import React, { Component } from "react";
import "./NavigationBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import discus from "../../images/DiscusSilhouette.png";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <Navbar sticky="top" bg="black" variant="dark" >
              <Container>
                <Navbar.Brand href="#home">
                  <img
                    alt=""
                    src={discus}
                    width="100px"
                    height="100px"
                    className="d-inline-block align-middle"
                  />{" "}
                  <span class="mb-0 h1">FISH SITTER</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">
                      <span class="mb-0 h3">SIGN-IN</span>
                    </Nav.Link>
                    <Nav.Link href="#link">
                      <span class="mb-0 h3">JOIN</span>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
