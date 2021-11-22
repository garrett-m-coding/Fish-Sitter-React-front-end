import React from "react";

const AddFishEditRow = ({
  editAddFishForm,
  handleEditFishFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="integer"
          name="aquarium"
          required="required"
          placeholder="Enter aquarium id..."
          value={editAddFishForm.aquarium}
          onChange={handleEditFishFormChange}
        />
      </td>
      <td>
      <input
          type="text"
          name="fish_type"
          required="required"
          placeholder="Enter type of fish..."
          value={editAddFishForm.fish_type}
          onChange={handleEditFishFormChange}
        ></input>
      </td>
      <td>
      <select
          type="boolean"
          name="is_alive"
          required="required"
          placeholder="Choose fish status..."
          value={editAddFishForm.is_alive}
          onChange={handleEditFishFormChange}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </td>
      <td>
      <input
          type="integer"
          name="number_of_fish"
          required="required"
          placeholder="Enter amount of these fish..."
          value={editAddFishForm.number_of_fish}
          onChange={handleEditFishFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default AddFishEditRow;
