import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ProfileScreen.css";
import Aquariums from "./Aquariums";
import AquariumTable from "./AquariumTable";

// i want to see a button to click on that allows me to add aquarium
// after I click on the button i want a modal to pop up allowing me to add aquarium
// below the add aquarium button i want a list of my aquariums along with their name, status, and water volume
// next to each aquarium a button to click that changes the screen to just that aquarium

function AquariumsProfile(props) {
  const [water_capacity, setWaterCapacity] = useState("");
  const [is_active, setIsActive] = useState("true");
  const [name, setName] = useState("");
  const [aquariums, setAquariums] = useState([]);

  const aquarium = {
    water_capacity: water_capacity,
    is_active: is_active,
    name: name,
  };

  async function getAllUserAquariums() {
    const jwt = localStorage.getItem("token");
    let responseAllAquariums = await axios.get(
      "http://127.0.0.1:8000/api/aquariums/users/",
      { headers: { Authorization: "Bearer " + jwt } }
    );
    console.log(responseAllAquariums);
    setAquariums(responseAllAquariums.data);
  }

  function mapAquariums() {
    console.log("map aquariums");
    return aquariums.map((aquarium) => (
      <Aquariums key={aquarium.id} aquarium={aquarium} />
    ));
  }

  useEffect(() => {
    console.log("use effect");
    let mounted = true;
    if (mounted) {
      getAllUserAquariums();
    }
    return () => (mounted = false);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("token");
    const responseCreateAquarium = await axios.post(
      "http://127.0.0.1:8000/api/aquariums/users/",
      aquarium,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    console.log(responseCreateAquarium);
  };

  return (
    <div>
      <div className="row">
        <br />
        <p
          style={{
            color: "lightcoral",
            fontSize: "36px",
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            webkitTextStrokeWidth: "2px",
            webkitTextStrokeColor: "lightcoral",
            marginTop: "10px",
          }}
        >
          {" "}
          Hello, what are your aquarium plans today? Add an aquarium to get
          started.
        </p>
        <form onSubmit={onSubmit}>
          <label style={{ borderRadius: "10px" }} htmlFor="water_capacity">
            Water capacity (in gallons):
          </label>
          <input
            name="water_capacity"
            type="water_capacity"
            value={water_capacity}
            onChange={(e) => setWaterCapacity(e.target.value)}
            required
          />
          <label style={{ borderRadius: "10px" }} htmlFor="is_active">
            Aquarium currently in use?:
          </label>
          <select
            value={is_active}
            onChange={(e) => setIsActive(e.target.value)}
            required
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>{" "}
          <label style={{ borderRadius: "10px" }} htmlFor="name">
            Aquarium name (uniquely given name for this aquarium):
          </label>
          <input
            name="name"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="submit"
            value="Add Aquarium to Collection"
            style={{
              color: "lightcoral",
              fontSize: "36px",
              textAlign: "center",
              backgroundColor: "black",
              borderRadius: "10px",
              webkitTextStrokeWidth: "2px",
              webkitTextStrokeColor: "lightcoral",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
        </form>
      </div>
      <br />
      <div>
        <AquariumTable mapAquariums={() => mapAquariums()} />
      </div>
    </div>
  );
}

export default AquariumsProfile;
