import React, { useState, useEffect } from "react";
import "./AddPlants.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Plants from "./Plants";
import PlantTable from "./PlantTable";



const AddPlants = () => {
  const location = useLocation();
  const { aquariumId, name } = location.state;
  const aquIdNum = aquariumId;

  const [aquarium, setAquarium] = useState();
  const [plant_type, setPlantType] = useState("");
  const [plant_trimmed, setPlantTrimmed] = useState("true");
  const [date_trimmed, setDateTrimmed] = useState();
  const [plants, setPlants] = useState([]);

  const plant = {
    aquarium: aquarium,
    plant_type: plant_type,
    plant_trimmed: plant_trimmed,
    date_trimmed: date_trimmed,
  };

  const getUsersSpecificAquariumPlant = async () => {
    setAquarium(aquIdNum);
    const jwt = localStorage.getItem("token");
    let responseGetUsersSpecificAquariumPlant = await axios.get(
      `http://127.0.0.1:8000/api/plant/details/${aquariumId}`,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    if (responseGetUsersSpecificAquariumPlant.data !== null) {
      setPlants(responseGetUsersSpecificAquariumPlant.data);
    }
    return setPlants(responseGetUsersSpecificAquariumPlant.data);
  };

  const onSubmitAddPlant = async (e) => {
    // e.preventDefault();
    const jwt = localStorage.getItem("token");
    const responseAddPlantToAquarium = await axios.post(
      "http://127.0.0.1:8000/api/plant/users/",
      plant,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    setPlants(responseAddPlantToAquarium.data);
    window.location = "/aquarium/plants/";
  };

  function mapPlants() {
    console.log("map plants");
    if (plants !== null) {
      return plants.map((plant) => <Plants key={plant.id} plant={plant} />);
    }
  }

  useEffect(() => {
    console.log("use effect");
    let mounted = true;
    if (mounted) {
      getUsersSpecificAquariumPlant();
    }
    return () => (mounted = false);
  }, []);

  // const updatePlantInAquarium = async () => {
  //   try {
  //     const jwt = localStorage.getItem("token");
  //     let responseUpdatePlantInAquarium = await axios.put(
  //       `http://127.0.0.1:8000/api/plant/details/${aquariumId}`,
  //       plant,
  //       { headers: { Authorization: "Bearer " + jwt } }
  //     );
  //     // setPlants(responseUpdatePlantInAquarium.data);
  //   } catch (ex) {
  //     console.log("Error in Update Plant To Aquarium API call!");
  //   }
  // };

  // const deletePlantInAquarium = async () => {
  //   try {
  //     const jwt = localStorage.getItem("token");
  //     let responseDeletePlantInAquarium = await axios.delete(
  //       `http://127.0.0.1:8000/api/plant/details/${aquariumId}`,
  //       { headers: { Authorization: "Bearer " + jwt } }
  //     );
  //     // setPlants(responseDeletePlantInAquarium.data);
  //   } catch (ex) {
  //     console.log("Error in Delete Plant in Aquarium API call!");
  //   }
  // };

  return (
    <div className="addplants-container">
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
        Add Plant to Your Aquarium:
      </h2>
      <form onSubmit={onSubmitAddPlant}>
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
        <label>Plant Type</label>
        <input
          type="text"
          name="plant_type"
          required="required"
          placeholder="Enter type of plant..."
          onChange={(e) => setPlantType(e.target.value)}
        />
        <label>Trimmed Plant? (Yes or No)</label>
        <select
          required="required"
          value={plant_trimmed}
          onChange={(e) => setPlantTrimmed(e.target.value)}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <label>Date Plant Trimmed</label>
        <input
          type="date"
          name="date_trimmed"
          required="required"
          placeholder="Enter date trimmed this plant..."
          onChange={(e) => setDateTrimmed(e.target.value)}
        />
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
          Add Plant
        </button>
      </form>
      <br />
      <div>{<PlantTable mapPlants={() => mapPlants()} />}</div>
    </div>
  );
};

export default AddPlants;
