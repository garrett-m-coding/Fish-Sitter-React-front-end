import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "react-bootstrap";
import EditAquarium from "./EditAquarium";
import AddFish from "../AddToAquarium/AddFish/AddFish";
// import AddFood from "../AddToAquarium/AddFood/AddFood";
// import AddPlants from "../AddToAquarium/AddPlants/AddPlants";
// import AddWaterParams from "../AddToAquarium/AddWaterParams/AddWaterParams";

const Aquariums = (props) => {
  function aquariumStatus(props) {
    const isActive = props.aquarium.is_active;
    if (isActive !== false) {
      return "Actively used";
    }
    return "Not being used";
  }

  return (
    <tbody>
      <tr>
        <td>
          <button onClick={EditAquarium}>Edit</button>
        </td>
        <td>{props.aquarium.name}</td>
        <td>{props.aquarium.water_capacity}</td>
        <td>{aquariumStatus(props)}</td>
        <td>
          <Nav>
            <Nav.Link
              href="/aquariums/fish/"
              style={{
                color: "white",
                fontSize: "20px",
                backgroundColor: "green",
                borderRadius: "10px",
                webkitTextStrokeWidth: "1.5px",
                webkitTextStrokeColor: "lightcoral",
              }}
            >
              Add Fish
            </Nav.Link>
          </Nav>
        </td>
        <td>
          <button>Add Food</button>
        </td>
        <td>
          <button>Add Plants</button>
        </td>
        <td>
          <button>Water Parameters</button>
        </td>
      </tr>
    </tbody>
  );
};

export default Aquariums;
