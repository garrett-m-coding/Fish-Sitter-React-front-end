import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { Component, useEffect, useState } from "react";



const AddPlants = () => {
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
            marginBottom: "10px"
          }}
        />
      </form>
    </div>      

      );
}
 
export default AddPlants;