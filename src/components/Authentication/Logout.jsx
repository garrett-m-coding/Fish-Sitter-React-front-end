import React from "react";



const Logout = (props) => {
    const onSubmit = async (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        window.location.replace("http://localhost:3000/");    
    }

  return (
    <div>
      <div className="container">
          <h1
            style={{
              color: "lightcoral",
              fontSize: "36px",
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: "10px",
              webkitTextStrokeWidth: "2px",
              webkitTextStrokeColor: "lightcoral",
              paddingBottom: "5px",
              marginTop: "10px",
            }}
          >
            Are you sure you want to logout?
          </h1>
        <form onSubmit={onSubmit}>
          <input
            type="submit"
            value="Log-Out"
            style={{
              color: "lightcoral",
              fontSize: "36px",
              textAlign: "center",
              backgroundColor: "black",
              borderRadius: "10px",
              webkitTextStrokeWidth: "2px",
              webkitTextStrokeColor: "lightcoral",
              marginTop: "10px",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Logout;
