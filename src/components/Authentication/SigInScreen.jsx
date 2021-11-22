import axios from "axios";
import React, { useState, useEffect } from "react";
import "./RegisterScreen.css";



const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt !== null) {
      window.location.replace("http://localhost:3000/profile/");
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };
    console.log(user);
    let response = await axios.post("http://127.0.0.1:8000/api/auth/login/", user);
    console.log(response);
    localStorage.setItem('token', response.data.access);
    alert(`Welcome back to Fish Sitter, ${user.username}!`);
    window.location.replace("http://localhost:3000/profile/");
  };

  return (
    <div>
      <div className="container">
        {loading === false && (
          <h1
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
            SIGN-IN
          </h1>
        )}
        <form onSubmit={onSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            name="username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="submit"
            value="Log-In"
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

export default SignInScreen;
