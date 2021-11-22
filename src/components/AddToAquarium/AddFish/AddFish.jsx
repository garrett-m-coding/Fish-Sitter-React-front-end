import React, { useState, useEffect, Fragment } from "react";
import "./AddFish.css";
import axios from "axios";
import AddFishReadOnlyRow from "./AddFishReadOnlyRow";
import AddFishEditRow from "./AddFishEditRow";



const AddFish = () => {
  const [fishes, setFishes] = useState([]);
  
  async function getAllUserFish() {
      const jwt = localStorage.getItem("token");
      let responseAllUserFish = await axios.get(
        "http://127.0.0.1:8000/api/fish/users/",
        { headers: { Authorization: "Bearer " + jwt } }
      );
      console.log(responseAllUserFish.data);
      setFishes(responseAllUserFish.data);
  };

  useEffect(() => {
    console.log("use effect");
    let mounted = true;
    if (mounted) {
      getAllUserFish();
    }
    return () => (mounted = false);
  }, []);

  const [aquarium, setAquarium] = useState("");
  const [fish_type, setFishType] = useState("");
  const [is_alive, setIsAlive] = useState("true");
  const [number_of_fish, setNumberOfFish] = useState("");
  
  const fish = {
    aquarium: aquarium,
    fish_type: fish_type,
    is_alive: is_alive,
    number_of_fish: number_of_fish
  };
  
  const [addFishForm, setAddFishForm] = useState({
    aquarium: "",
    fish_type: "",
    is_alive: "",
    number_of_fish: "",
  });

  const onSubmitAddFish = async (e) => {
    e.preventDefault();
        const jwt = localStorage.getItem("token");
        const responseAddFishToAquarium = await axios.post(
          "http://127.0.0.1:8000/api/fish/users/", fish,
          { headers: { Authorization: "Bearer " + jwt } }
        );
        console.log(responseAddFishToAquarium.data);
        // setFishes(responseAddFishToAquarium.data);
  };

  const [editAddFishForm, setEditAddFishForm] = useState({
    aquarium: "",
    fish_type: "",
    is_alive: "",
    number_of_fish: "",
  });

  // updateFishInAquarium = async (aquariumId) => {
  //   try {
  //     const jwt = localStorage.getItem("token");
  //     let responseUpdateFishInAquarium = await axios.put(
  //       `http://127.0.0.1:8000/api/fish/details/${aquariumId}`, fish,
  //       { headers: { Authorization: "Bearer " + jwt } }
  //     );
  //     console.log(responseUpdateFishInAquarium.data);
  //     setFishes(responseUpdateFishToAquarium.data);
  //     } catch (ex) {
  //     console.log("Error in Add Fish To Aquarium API call!");
  //     }
  // };

  const [editFishId, setEditFishId] = useState(null);

  const handleAddFishFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFishForm = { ...addFishForm };
    newFishForm[fieldName] = fieldValue;

    setAddFishForm(newFishForm);
  };

  const handleEditFishFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFishForm = { ...editAddFishForm };
    newFishForm[fieldName] = fieldValue;

    setEditAddFishForm(newFishForm);
  };

  // const handleAddFormSubmit = (event) => {
  //   event.preventDefault();

  //   const newContact = {
  //     id: nanoid(),
  //     fullName: addFormData.fullName,
  //     address: addFormData.address,
  //     phoneNumber: addFormData.phoneNumber,
  //     email: addFormData.email,
  //   };

  //   const newContacts = [...contacts, newContact];
  //   setContacts(newContacts);
  // };

  const handleEditFishFormSubmit = (event) => {
    event.preventDefault();

    const editedFish = {
      id: editFishId,
      aquarium: editAddFishForm.aquarium,
      fish_type: editAddFishForm.fish_type,
      is_alive: editAddFishForm.is_alive,
      number_of_fish: editAddFishForm.number_of_fish,
    };

    const newFishes = [...fishes];

    const index = fishes.findIndex((fish) => fish.id === editFishId);

    newFishes[index] = editedFish;

    setFishes(newFishes);
    setEditFishId(null);
  };

  const handleEditClick = (event, fish) => {
    event.preventDefault();
    setEditFishId(fish.id);

    const formValues = {
      aquarium: fish.aquarium,
      fish_type: fish.fish_type,
      is_alive: fish.is_alive,
      number_of_fish: fish.number_of_fish,
    };

    setEditAddFishForm(formValues);
  };

  const handleCancelClick = () => {
    setEditFishId(null);
  };

  const handleDeleteClick = (FishId) => {
    const newFishes = [...fishes];

    const index = fishes.findIndex((fish) => fish.id === FishId);

    newFishes.splice(index, 1);

    setFishes(newFishes);
  };

  return (
    <div className="addfish-container">
      <h2>Add Fish to Your Aquarium</h2>
      <form onSubmit={onSubmitAddFish}>
        <input
          type="integer"
          name="aquarium"
          required="required"
          placeholder="Enter aquarium id..."
          onChange={handleAddFishFormChange}
        />
        <input
          type="text"
          name="fish_type"
          required="required"
          placeholder="Enter type of fish..."
          onChange={handleAddFishFormChange}
        />
        <select
          type="boolean"
          name="is_alive"
          required="required"
          placeholder="Choose fish status..."
          onChange={handleAddFishFormChange}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <input
          type="integer"
          name="number_of_fish"
          required="required"
          placeholder="Enter amount of these fish..."
          onChange={handleAddFishFormChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={handleEditFishFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fishes.map((fish) => (
              <Fragment>
                {editFishId === fish.id ? (
                  <AddFishEditRow
                    editAddFishForm={editAddFishForm}
                    handleEditFishFormChange={handleEditFishFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <AddFishReadOnlyRow
                    fish={fish}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddFish;