import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Fishes = (props) => {
  console.log(props);
  function fishStatus(props) {
    const isAlive = props.fish.is_alive;
    if (isAlive !== false) {
      return "Alive";
    }
    return "Dead";
  }

  return (
    <tbody>
      <tr>
        <td>
          <Nav>
            <Link
              href="/aquarium/fish/edit/"
              style={{
                color: "white",
                fontSize: "20px",
                backgroundColor: "green",
                borderRadius: "10px",
                webkitTextStrokeWidth: "1.5px",
                webkitTextStrokeColor: "lightcoral",
              }}
            >
              Edit
            </Link>
          </Nav>
        </td>
        <td>{props.fish.id}</td>
        <td>{props.fish.fish_type}</td>
        <td>{fishStatus(props)}</td>
        <td>{props.fish.number_of_fish}</td>
        <td>buttons</td>
      </tr>
    </tbody>
  );
};

export default Fishes;
