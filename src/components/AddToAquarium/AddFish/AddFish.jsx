import React, { useState, useEffect } from "react";
import "./AddFish.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Fishes from "./Fishes";
import FishTable from "./FishTable";

const AddFish = () => {
  const location = useLocation();
  const { aquariumId, name } = location.state;
  const aquIdNum = aquariumId;

  const [aquarium, setAquarium] = useState();
  const [fish_type, setFishType] = useState("");
  const [is_alive, setIsAlive] = useState("true");
  const [number_of_fish, setNumberOfFish] = useState();
  const [fishes, setFishes] = useState([]);

  const fish = {
    aquarium: aquarium,
    fish_type: fish_type,
    is_alive: is_alive,
    number_of_fish: number_of_fish,
  };

  const getUsersSpecificAquariumFish = async () => {
    setAquarium(aquIdNum);
    const jwt = localStorage.getItem("token");
    let responseGetUsersSpecificAquariumFish = await axios.get(
      `http://127.0.0.1:8000/api/fish/details/${aquariumId}`,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    if (responseGetUsersSpecificAquariumFish.data !== null) {
      setFishes(responseGetUsersSpecificAquariumFish.data);
    }
    return setFishes(responseGetUsersSpecificAquariumFish.data);
  };

  const onSubmitAddFish = async (e) => {
    // e.preventDefault();
    const jwt = localStorage.getItem("token");
    const responseAddFishToAquarium = await axios.post(
      "http://127.0.0.1:8000/api/fish/users/",
      fish,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    setFishes(responseAddFishToAquarium.data);
    window.location = "/aquarium/fish/";
  };

  function mapFishes() {
    console.log("map fishes");
    if (fishes !== null) {
      return fishes.map((fish) => <Fishes key={fish.id} fish={fish} />);
    }
  }

  useEffect(() => {
    console.log("use effect");
    let mounted = true;
    if (mounted) {
      getUsersSpecificAquariumFish();
    }
    return () => (mounted = false);
  }, []);

  // const updateFishInAquarium = async () => {
  //   try {
  //     const jwt = localStorage.getItem("token");
  //     let responseUpdateFishInAquarium = await axios.put(
  //       `http://127.0.0.1:8000/api/fish/details/${aquariumId}`,
  //       fish,
  //       { headers: { Authorization: "Bearer " + jwt } }
  //     );
  //     // setFishes(responseUpdateFishInAquarium.data);
  //   } catch (ex) {
  //     console.log("Error in Update Fish in Aquarium API call!");
  //   }
  // };

  // const deleteFishInAquarium = async () => {
  //   try {
  //     const jwt = localStorage.getItem("token");
  //     let responseDeleteFishInAquarium = await axios.delete(
  //       `http://127.0.0.1:8000/api/fish/details/${aquariumId}`,
  //       { headers: { Authorization: "Bearer " + jwt } }
  //     );
  //     // setFishes(responseDeleteFishInAquarium.data);
  //   } catch (ex) {
  //     console.log("Error in Delete Fish in Aquarium API call!");
  //   }
  // };

  return (
    <div className="addfish-container">
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
        Add Fish to Your Aquarium:
      </h2>
      <form onSubmit={onSubmitAddFish}>
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
        <label>Fish Type</label>
        <input
          type="text"
          name="fish_type"
          required="required"
          placeholder="Enter type of fish..."
          onChange={(e) => setFishType(e.target.value)}
        />
        <label>Alive?</label>
        <select
          required="required"
          value={is_alive}
          onChange={(e) => setIsAlive(e.target.value)}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <label>How many of these fish?</label>
        <input
          type="number"
          name="number_of_fish"
          required="required"
          placeholder="Enter amount of these fish..."
          onChange={(e) => setNumberOfFish(e.target.value)}
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
          Add Fish
        </button>
      </form>
      <br />
      <div>{<FishTable mapFishes={() => mapFishes()} />}</div>
    </div>
  );
};

export default AddFish;
