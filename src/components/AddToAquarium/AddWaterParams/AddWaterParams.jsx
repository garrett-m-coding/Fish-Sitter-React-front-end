import React, { useState, useEffect } from "react";
import "./AddWaterParams.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import WaterParams from "./WaterParams";
import WaterParamsTable from "./WaterParamsTable";

const AddWater = () => {
  const location = useLocation();
  const { aquariumId, name } = location.state;
  const aquIdNum = aquariumId;

  const [aquarium, setAquarium] = useState();
  const [general_hardness_ppm, setGeneralHardness] = useState();
  const [carbonate_hardness_ppm, setCarbonateHardness] = useState();
  const [power_of_hydrogen, setPowerOfHydrogen] = useState();
  const [nitrites_ppm, setNitrites] = useState();
  const [nitrates_ppm, setNitrates] = useState();
  const [temperature_fahrenheit, setTemperatureFahrenheit] = useState();
  const [water_changed, setWaterChanged] = useState("true");
  const [gallons_water_added, setGallonsWaterAdded] = useState();
  const [date_measured, setDateMeasured] = useState();
  const [before_noon, setBeforeNoon] = useState("");
  const [after_noon, setAfterNoon] = useState("");
  const [waterParams, setWaterParams] = useState([]);

  const waterParam = {
    aquarium: aquarium,
    general_hardness_ppm: general_hardness_ppm,
    carbonate_hardness_ppm: carbonate_hardness_ppm,
    power_of_hydrogen: power_of_hydrogen,
    nitrites_ppm: nitrites_ppm,
    nitrates_ppm: nitrates_ppm,
    temperature_fahrenheit: temperature_fahrenheit,
    water_changed: water_changed,
    gallons_water_added: gallons_water_added,
    date_measured: date_measured,
    before_noon: before_noon,
    after_noon: after_noon,
  };

  const getUsersSpecificAquariumWater = async () => {
    setAquarium(aquIdNum);
    const jwt = localStorage.getItem("token");
    let responseGetUsersSpecificAquariumWater = await axios.get(
      `http://127.0.0.1:8000/api/water_parameters/details/${aquariumId}`,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    if (responseGetUsersSpecificAquariumWater.data !== null) {
      setWaterParams(responseGetUsersSpecificAquariumWater.data);
    }
    return setWaterParams(responseGetUsersSpecificAquariumWater.data);
  };

  const onSubmitAddWater = async (e) => {
    // e.preventDefault();
    const jwt = localStorage.getItem("token");
    const responseAddWaterToAquarium = await axios.post(
      "http://127.0.0.1:8000/api/water_parameters/users/",
      waterParam,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    // setWaterParams(responseAddWaterToAquarium.data);
    window.location = "/aquarium/water/";
  };

  function mapWaterParams() {
    console.log("map water params");
    if (waterParams !== null) {
      return waterParams.map((waterParam) => (
        <WaterParams key={waterParam.id} waterParam={waterParam} />
      ));
    }
  }

  useEffect(() => {
    console.log("use effect");
    let mounted = true;
    if (mounted) {
      getUsersSpecificAquariumWater();
    }
    return () => (mounted = false);
  }, []);

  // const updateWaterInAquarium = async () => {
  //   try {
  //     const jwt = localStorage.getItem("token");
  //     let responseUpdateWaterInAquarium = await axios.put(
  //       `http://127.0.0.1:8000/api/water_parameters/details/${aquariumId}`,
  //       water_param,
  //       { headers: { Authorization: "Bearer " + jwt } }
  //     );
  //     // setWaterParams(responseUpdateWaterInAquarium.data);
  //   } catch (ex) {
  //     console.log("Error in Update Water Params in Aquarium API call!");
  //   }
  // };

  // const deleteWaterInAquarium = async () => {
  //   try {
  //     const jwt = localStorage.getItem("token");
  //     let responseDeleteWaterInAquarium = await axios.delete(
  //       `http://127.0.0.1:8000/api/water_parameters/details/${aquariumId}`,
  //       { headers: { Authorization: "Bearer " + jwt } }
  //     );
  //     // setWaterParams(responseDeleteWaterInAquarium.data);
  //   } catch (ex) {
  //     console.log("Error in Delete Water Params in Aquarium API call!");
  //   }
  // };

  return (
    <div className="addwater-container">
      <h2
        style={{
          color: "lightcoral",
          fontSize: "36px",
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          webkitTextStrokeWidth: "1px",
          webkitTextStrokeColor: "black",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        Add Water Parameters to Your Aquarium:
      </h2>
      <form onSubmit={onSubmitAddWater}>
        <label>Aquarium Name (read only)</label>
        <input
          type="text"
          name="name"
          required="required"
          value={name}
          readOnly
        />
        {/* <label>Aquarium ID</label>
        <input
          type="number"
          name="aquarium"
          required="required"
          value={aquariumId}
          onChange={(e) => setAquarium(e.target.value)}
          readOnly
        /> */}
        <label>General Hardness</label>
        <input
          type="integer"
          name="general_hardness_ppm"
          required="required"
          placeholder="Enter aquarium water general hardness measurement..."
          onChange={(e) => setGeneralHardness(e.target.value)}
        />
        <label>Carbonate Hardness</label>
        <input
          type="integer"
          name="carbonate_hardness_ppm"
          required="required"
          placeholder="Enter aquarium water carbonate hardness measurement..."
          onChange={(e) => setCarbonateHardness(e.target.value)}
        />
        <label>pH (Power of Hydrogen)</label>
        <input
          type="decimal"
          name="power_of_hydrogen"
          required="required"
          placeholder="Enter aquarium water pH measurement..."
          onChange={(e) => setPowerOfHydrogen(e.target.value)}
        />
        <label>Nitrites</label>
        <input
          type="integer"
          name="nitrites_ppm"
          required="required"
          placeholder="Enter aquarium water nitrites measurement..."
          onChange={(e) => setNitrites(e.target.value)}
        />
        <label>Nitrates</label>
        <input
          type="integer"
          name="nitrates_ppm"
          required="required"
          placeholder="Enter aquarium water nitrates measurement..."
          onChange={(e) => setNitrates(e.target.value)}
        />
        <label>Water Temperature (F)</label>
        <input
          type="integer"
          name="temperature_fahrenheit"
          required="required"
          placeholder="Enter aquarium water temperature measurement..."
          onChange={(e) => setTemperatureFahrenheit(e.target.value)}
        />
        <label>Water Change performed? (Yes or No)</label>
        <select
          required="required"
          value={water_changed}
          onChange={(e) => setWaterChanged(e.target.value)}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <label>Gallons of Water Added</label>
        <input
          type="integer"
          name="gallons_water_added"
          required="required"
          placeholder="Enter how many gallons of water added to aquarium..."
          onChange={(e) => setGallonsWaterAdded(e.target.value)}
        />
        <label>Date of Water Measurements</label>
        <input
          type="date"
          name="date_measured"
          required="required"
          placeholder="Enter date water added or measured..."
          onChange={(e) => setDateMeasured(e.target.value)}
        />
        <label>Water Added/Measured Before Noon? (Yes or No)</label>
        <select
          required="required"
          value={before_noon}
          onChange={(e) => setBeforeNoon(e.target.value)}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <label>Water Added/Measured After Noon? (Yes or No)</label>
        <select
          required="required"
          value={after_noon}
          onChange={(e) => setAfterNoon(e.target.value)}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <br />
        <button
          type="submit"
          style={{
            color: "white",
            fontSize: "20px",
            backgroundColor: "green",
            borderRadius: "10px",
            webkitTextStrokeWidth: "1.5px",
            webkitTextStrokeColor: "lightcoral",
            width: "100%",
          }}
        >
          Add Water/Measurements
        </button>
      </form>
      <br />
      <div>{<WaterParamsTable mapWaterParams={() => mapWaterParams()} />}</div>
    </div>
  );
};

export default AddWater;
