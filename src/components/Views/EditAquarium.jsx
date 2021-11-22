import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { Component, useEffect, useState } from "react";



const EditAquarium = (props) => {
    const [water_capacity, setWaterCapacity] = useState("");
    const [is_active, setIsActive] = useState('true');
    const [name, setName] = useState("");
    const [aquariums, setAquariums] = useState([]);
    const aquariumId = props.aquarium.id;
  
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
  
    // function mapAquariums() {
    //   console.log("map aquariums");
    //   return aquariums.map((aquarium) => (
    //     <Aquariums key={aquarium.id} aquarium={aquarium} />
    //   ));
    // }
  
    useEffect(() => {
      console.log("use effect");
      let mounted = true;
      if (mounted) {
        getAllUserAquariums();
      }
      return () => (mounted = false);
    }, []);
  
    const onSubmit = async (e, aquariumId) => {
      e.preventDefault();
      const jwt = localStorage.getItem("token");
      const responseUpdateAquarium = await axios.put(
        `http://127.0.0.1:8000/api/aquariums/details/${aquariumId}`,
        aquarium,
        { headers: { Authorization: "Bearer " + jwt } }
      );
      console.log(responseUpdateAquarium);
      // window.location.reload("http://localhost:3000/profile/");
    };
  

    return (
      <div>
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
          value="Update Aquarium in Collection"
          style={{
            color: "lightcoral",
            fontSize: "36px",
            textAlign: "center",
            backgroundColor: "black",
            borderRadius: "10px",
            webkitTextStrokeWidth: "2px",
            webkitTextStrokeColor: "lightcoral",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        />
      </form>
    </div>      
      );
}
 
export default EditAquarium;