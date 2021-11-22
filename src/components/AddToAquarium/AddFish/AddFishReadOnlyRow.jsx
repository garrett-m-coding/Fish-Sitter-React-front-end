import React from "react";

const AddFishReadOnlyRow = ({ fish, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{fish.aquarium}</td>
      <td>{fish.fish_type}</td>
      <td>{fish.is_alive}</td>
      <td>{fish.number_of_fish}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, fish)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(fish.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AddFishReadOnlyRow;