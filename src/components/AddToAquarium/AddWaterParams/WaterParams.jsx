import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const WaterParams = (props) => {
  console.log(props);
  function waterChangeStatus(props) {
    const waterChanged = props.waterParam.water_changed;
    if (waterChanged !== false) {
      return "Water Changed";
    }
    return "No Water Changed";
  }

  return (
    <tbody>
      <tr>
        <td>
          <Nav>
            <Link
              href="/aquarium/water/edit/"
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
        <td>{props.waterParam.id}</td>
        <td>{props.waterParam.general_hardness_ppm}</td>
        <td>{props.waterParam.carbonate_hardness_ppm}</td>
        <td>{props.waterParam.power_of_hydrogen}</td>
        <td>{props.waterParam.nitrites_ppm}</td>
        <td>{props.waterParam.nitrates_ppm}</td>
        <td>{props.waterParam.temperature_fahrenheit}</td>
        <td>{waterChangeStatus(props)}</td>
        <td>{props.waterParam.gallons_water_added}</td>
        <td>{props.waterParam.date_measured}</td>
        <td>{props.waterParam.before_noon}</td>
        <td>{props.waterParam.after_noon}</td>
        <td>buttons</td>
      </tr>
    </tbody>
  );
};

export default WaterParams;
