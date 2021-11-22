import React from "react";
import "./NavigationBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import discus from "../../images/DiscusSilhouette.png";


 
const NavigationBar = ({ user }) => {
  return (
    <div>
      <div>
        <div>
          <Navbar sticky="top" bg="black" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src={discus}
                  width="100px"
                  height="100px"
                  className="d-inline-block align-bottom"
                  />{" "}
                <text
                  style={{
                    color: "white",
                    fontSize: "74px",
                    textAlign: "center",
                    backgroundColor: "black",
                  }}
                  >
                  FISH SITTER
                </text>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                className="nav navbar-nav navbar-right"
                id="basic-navbar-nav"
              >
                <Nav>
                  {!user && (
                    <React.Fragment>
                      <Nav.Link
                        className="nav-item"
                        href="/login/"
                        style={{
                          color: "white",
                          fontSize: "36px",
                          textAlign: "center",
                          backgroundColor: "white",
                          borderRadius: "40px",
                          webkitTextStrokeWidth: "1.5px",
                          webkitTextStrokeColor: "lightcoral",
                        }}
                      >
                        SIGN-IN
                      </Nav.Link>{" "}
                      <Nav.Link
                        className="nav-item"
                        href="/register/"
                        style={{
                          color: "white",
                          fontSize: "36px",
                          textAlign: "center",
                          backgroundColor: "white",
                          borderRadius: "40px",
                          webkitTextStrokeWidth: "1.5px",
                          webkitTextStrokeColor: "lightcoral",
                        }}
                      >
                        JOIN
                      </Nav.Link>
                    </React.Fragment>
                  )}
                  {user && (
                    <React.Fragment>
                      <Nav.Link
                        className="nav-item"
                        href="/profile/"
                        style={{
                          color: "white",
                          fontSize: "36px",
                          backgroundColor: "green",
                          borderRadius: "10px",
                          webkitTextStrokeWidth: "1.5px",
                          webkitTextStrokeColor: "lightcoral",
                        }}
                        >
                        AQUARIUMS
                      </Nav.Link>
                      <Nav.Link
                        className="nav-item"
                        href="/logout/"
                        style={{
                          color: "white",
                          fontSize: "36px",
                          textAlign: "center",
                          backgroundColor: "white",
                          borderRadius: "40px",
                          webkitTextStrokeWidth: "1.5px",
                          webkitTextStrokeColor: "lightcoral",
                        }}
                      >
                        LOGOUT
                      </Nav.Link>
                    </React.Fragment>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
