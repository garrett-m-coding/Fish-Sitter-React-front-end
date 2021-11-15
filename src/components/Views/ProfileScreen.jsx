import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// i want to see a button to click on that allows me to add aquarium
// after I click on the button i want a modal to pop up allowing me to add aquarium
// below the add aquarium button i want a list of my aquariums along with their name, status, and water volume
// next to each aquarium a button to click that changes the screen to just that aquarium

const Profile = ({ user }) => {
  return (
    <div>
      {user && (
        <h4 style={{ color: "white", textAlign: "center" }}>
          {" "}
          Hello {user.first_name}, what are your aquarium plans today?
        </h4>
      )}
      <div className="Profile">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <p> {user.first_name}, add an aquarium to get started.</p>
            <button> Add Aquarium </button>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="cole-md-6">
            <h2> {user.first_name}'s Aquarium Collection </h2>
            <p> ---------------------------------------------------- </p>
            <br />
            <p> list of aquarium tiles or tables for each added aquarium </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
