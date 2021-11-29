import React, { useState, useEffect } from "react";
import "./AddFood.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Foods from "./Foods";
import FoodTable from "./FoodTable";



const AddFood = () => {
  const location = useLocation();
  const { aquariumId, name } = location.state;
  const aquIdNum = aquariumId;

  const [aquarium, setAquarium] = useState();
  const [food_type, setFoodType] = useState("");
  const [fed_food, setFedFood] = useState("true");
  const [date_fed, setDateFed] = useState();
  const [before_noon, setBeforeNoon] = useState("");
  const [after_noon, setAfterNoon] = useState("");
  const [foods, setFoods] = useState([]);

  const food = {
    aquarium: aquarium,
    food_type: food_type,
    fed_food: fed_food,
    date_fed: date_fed,
    before_noon: before_noon,
    after_noon: after_noon,
  };

  const getUsersSpecificAquariumFood = async () => {
    setAquarium(aquIdNum);
    const jwt = localStorage.getItem("token");
    let responseGetUsersSpecificAquariumFood = await axios.get(
      `http://127.0.0.1:8000/api/food/details/${aquariumId}`,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    if (responseGetUsersSpecificAquariumFood.data !== null) {
      setFoods(responseGetUsersSpecificAquariumFood.data);
    }
    return setFoods(responseGetUsersSpecificAquariumFood.data);
  };

  const onSubmitAddFood = async (e) => {
    // e.preventDefault();
    const jwt = localStorage.getItem("token");
    const responseAddFoodToAquarium = await axios.post(
      "http://127.0.0.1:8000/api/food/users/",
      food,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    setFoods(responseAddFoodToAquarium.data);
    window.location = "/aquarium/food/";
  };

  function mapFoods() {
    console.log("map foods");
    if (foods !== null) {
      return foods.map((food) => <Foods key={food.id} food={food} />);
    }
  }

  useEffect(() => {
    console.log("use effect");
    let mounted = true;
    if (mounted) {
      getUsersSpecificAquariumFood();
    }
    return () => (mounted = false);
  }, []);

  // const updateFoodInAquarium = async () => {
  //   try {
  //     const jwt = localStorage.getItem("token");
  //     let responseUpdateFoodInAquarium = await axios.put(
  //       `http://127.0.0.1:8000/api/food/details/${aquariumId}`,
  //       food,
  //       { headers: { Authorization: "Bearer " + jwt } }
  //     );
  //     // setFoods(responseUpdateFoodInAquarium.data);
  //   } catch (ex) {
  //     console.log("Error in Update Food in Aquarium API call!");
  //   }
  // };

  // const deleteFoodInAquarium = async () => {
  //   try {
  //     const jwt = localStorage.getItem("token");
  //     let responseDeleteFoodInAquarium = await axios.delete(
  //       `http://127.0.0.1:8000/api/food/details/${aquariumId}`,
  //       { headers: { Authorization: "Bearer " + jwt } }
  //     );
  //     // setFoods(responseDeleteFoodInAquarium.data);
  //   } catch (ex) {
  //     console.log("Error in Delete Food in Aquarium API call!");
  //   }
  // };

  return (
    <div className="addfood-container">
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
        Add Food to Your Aquarium:
      </h2>
      <form onSubmit={onSubmitAddFood}>
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
        <label>Food Type</label>
        <input
          type="text"
          name="food_type"
          required="required"
          placeholder="Enter type of fish food..."
          onChange={(e) => setFoodType(e.target.value)}
        />
        <label>Fed Food? (Yes or No)</label>
        <select
          required="required"
          value={fed_food}
          onChange={(e) => setFedFood(e.target.value)}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <label>Date Fed Food</label>
        <input
          type="date"
          name="date_fed"
          required="required"
          placeholder="Enter date fed this food..."
          onChange={(e) => setDateFed(e.target.value)}
        />
        <label>Fed Before Noon? (Yes or No)</label>
        <select
          required="required"
          value={before_noon}
          onChange={(e) => setBeforeNoon(e.target.value)}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <label>Fed After Noon? (Yes or No)</label>
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
          Add Food
        </button>
      </form>
      <br />
      <div>{<FoodTable mapFoods={() => mapFoods()} />}</div>
    </div>
  );
};

export default AddFood;
