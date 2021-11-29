import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Plants = (props) => {
  console.log(props);
  function trimmedStatus(props) {
    const wereTrimmed = props.plant.plant_trimmed;
    if (wereTrimmed !== false) {
      return "Trimmed";
    }
    return "Not Trimmed";
  }

  return (
    <tbody>
      <tr>
        <td>
          <Nav>
            <Link
              href="/aquarium/plants/edit/"
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
        <td>{props.plant.id}</td>
        <td>{props.plant.plant_type}</td>
        <td>{trimmedStatus(props)}</td>
        <td>{props.plant.date_trimmed}</td>
        <td>buttons</td>
      </tr>
    </tbody>
  );
};

export default Plants;
