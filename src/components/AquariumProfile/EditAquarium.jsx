import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState } from "react";
import { useLocation, Redirect } from "react-router-dom";

const EditAquarium = () => {
  const location = useLocation();
  const { aquariumId, editName, editWaterCapacity, editStatus } =
    location.state;

  const [water_capacity, setWaterCapacity] = useState(editWaterCapacity);
  const [is_active, setIsActive] = useState(editStatus);
  const [name, setName] = useState(editName);
  const [aquariums, setAquariums] = useState([]);
  // const aquariumId = props.aquarium.id;
  // console.log(aquariumId);

  const aquarium = {
    water_capacity: water_capacity,
    is_active: is_active,
    name: name,
  };

  // async function getAllUserAquariums() {
  //   const jwt = localStorage.getItem("token");
  //   let responseAllAquariums = await axios.get(
  //     "http://127.0.0.1:8000/api/aquariums/users/",
  //     { headers: { Authorization: "Bearer " + jwt } }
  //   );
  //   console.log(responseAllAquariums);
  //   setAquariums(responseAllAquariums.data);
  // }

  // function mapAquariums() {
  //   console.log("map aquariums");
  //   return aquariums.map((aquarium) => (
  //     <Aquariums key={aquarium.id} aquarium={aquarium} />
  //   ));
  // }

  // useEffect(() => {
  //   console.log("use effect");
  //   let mounted = true;
  //   if (mounted) {
  //     onSubmit();
  //   }
  //   return () => (mounted = false);
  // }, []);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const jwt = localStorage.getItem("token");
      const responseUpdateAquarium = await axios.put(
        `http://127.0.0.1:8000/api/aquariums/details/${aquariumId}`,
        aquarium,
        { headers: { Authorization: "Bearer " + jwt } }
      );
      setAquariums(responseUpdateAquarium.data);
    } catch (ex) {
      console.log("Error in Submitting Aquarium Update API call!");
    }
    <Redirect to="/profile/" />;
  };

  return (
    <div>
      <div>
        <br />
        {/* <p
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
        Hello, what are your aquarium plans today? Add an aquarium to get
        started.
      </p> */}
        <form onSubmit={onSubmit}>
          {" "}
          <label style={{ borderRadius: "10px" }} htmlFor="water_capacity">
            Current Water Capacity (in gallons):
          </label>{" "}
          <input
            name="water_capacity"
            type="text"
            placeholder={editWaterCapacity}
            onChange={(e) => setWaterCapacity(e.target.value)}
            required
          />{" "}
          <label style={{ borderRadius: "10px" }} htmlFor="is_active">
            Aquarium currently in use?:
          </label>{" "}
          <select
            placeholder={editStatus}
            onChange={(e) => setIsActive(e.target.value)}
            required
          >
            {" "}
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>{" "}
          <label style={{ borderRadius: "10px" }} htmlFor="name">
            Aquarium name (uniquely given name for this aquarium):
          </label>{" "}
          <input
            name="name"
            type="text"
            placeholder={editName}
            onChange={(e) => setName(e.target.value)}
            required
          />{" "}
          <input
            type="submit"
            value="Submit Aquarium Change(s)"
            style={{
              color: "lightcoral",
              fontSize: "36px",
              textAlign: "center",
              backgroundColor: "green",
              borderRadius: "10px",
              webkitTextStrokeWidth: "2px",
              webkitTextStrokeColor: "lightcoral",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />{" "}
        </form>
      </div>
    </div>
  );
};

export default EditAquarium;
