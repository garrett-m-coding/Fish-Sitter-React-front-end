import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Foods = (props) => {
  console.log(props);
  function fedStatus(props) {
    const wereFed = props.food.fed_food;
    if (wereFed !== false) {
      return "Fed";
    }
    return "Not Fed";
  }

  return (
    <tbody>
      <tr>
        <td>
          <Nav>
            <Link
              href="/aquarium/food/edit/"
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
        <td>{props.food.id}</td>
        <td>{props.food.food_type}</td>
        <td>{fedStatus(props)}</td>
        <td>{props.food.date_fed}</td>
        <td>{props.food.before_noon}</td>
        <td>{props.food.after_noon}</td>
        <td>buttons</td>
      </tr>
    </tbody>
  );
};

export default Foods;
