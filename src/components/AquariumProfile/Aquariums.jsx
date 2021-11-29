import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
// import { Nav } from "react-bootstrap";
// import EditAquarium from "./EditAquarium";
// import AddFish from "../AddToAquarium/AddFish/AddFish";
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
          <Link
            to={{
              pathname: "/aquarium/edit/",
              state: {
                aquariumId: props.aquarium.id,
                editName: props.aquarium.name,
                editWaterCapacity: props.aquarium.water_capacity,
                editStatus: aquariumStatus(props),
              },
            }}
            style={{
              color: "white",
              fontSize: "24px",
              backgroundColor: "green",
              borderRadius: "10px",
              webkitTextStrokeWidth: "1.5px",
              webkitTextStrokeColor: "lightcoral",
            }}
          >
            Edit
          </Link>
        </td>
        {/* <td>{props.aquarium.id}</td> */}
        <td>{props.aquarium.name}</td>
        <td>{props.aquarium.water_capacity}</td>
        <td>{aquariumStatus(props)}</td>
        <td>
          <Link
            to={{
              pathname: "/aquarium/fish/",
              state: {
                aquariumId: props.aquarium.id,
                name: props.aquarium.name,
              },
            }}
            style={{
              color: "white",
              fontSize: "24px",
              backgroundColor: "green",
              borderRadius: "10px",
              webkitTextStrokeWidth: "1.5px",
              webkitTextStrokeColor: "lightcoral",
            }}
          >
            Add Fish
          </Link>
        </td>
        <td>
          <Link
            to={{
              pathname: "/aquarium/food/",
              state: {
                aquariumId: props.aquarium.id,
                name: props.aquarium.name,
              },
            }}
            style={{
              color: "white",
              fontSize: "24px",
              backgroundColor: "green",
              borderRadius: "10px",
              webkitTextStrokeWidth: "1.5px",
              webkitTextStrokeColor: "lightcoral",
            }}
          >
            Add Food
          </Link>
        </td>
        <td>
          <Link
            to={{
              pathname: "/aquarium/plants/",
              state: {
                aquariumId: props.aquarium.id,
                name: props.aquarium.name,
              },
            }}
            style={{
              color: "white",
              fontSize: "24px",
              backgroundColor: "green",
              borderRadius: "10px",
              webkitTextStrokeWidth: "1.5px",
              webkitTextStrokeColor: "lightcoral",
            }}
          >
            Add Plants
          </Link>
        </td>
        <td>
          <Link
            to={{
              pathname: "/aquarium/water/",
              state: {
                aquariumId: props.aquarium.id,
                name: props.aquarium.name,
              },
            }}
            style={{
              color: "white",
              fontSize: "24px",
              backgroundColor: "green",
              borderRadius: "10px",
              webkitTextStrokeWidth: "1.5px",
              webkitTextStrokeColor: "lightcoral",
            }}
          >
            Add Water Parameters
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default Aquariums;
