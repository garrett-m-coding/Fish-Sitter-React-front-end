 import axios from "axios";
import React, { useState, useEffect } from "react";
import "./RegisterScreen.css";



const RegisterScreen = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [zip_code, setZipcode] = useState("");
  const [experience_level, setExperienceLevel] = useState("beginner");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt !== null) {
        window.location.replace("http://localhost:3000/");
    } else {
        setLoading(false);
    }
}, []);

const onSubmit = async (e) => {
    e.preventDefault();
    
    const user = {
        first_name: first_name,
        last_name: last_name,
        zip_code: zip_code,
        experience_level: experience_level,
        email: email,
        username: username,
        password: password,
    };
    console.log(user)
    let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', user)
    console.log(response);
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
            JOIN
          </h1>
        )}
        {errors === true && <h2>Cannot signup with provided credentials</h2>}
        <form onSubmit={onSubmit}>
          <label htmlFor="first_name">First name:</label>
          <input
            name="first_name"
            type="first_name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="last_name">Last name:</label>
          <input
            name="last_name"
            type="last_name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label htmlFor="zip_code">Zip code:</label>
          <input
            name="zip_code"
            type="zip_code"
            value={zip_code}
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
          <label htmlFor="experience_level">Experience level:</label>
          <select
            value={experience_level}
            onChange={(e) => setExperienceLevel(e.target.value)}
            required
          >
            <option value="beginner">beginner (0-2 years)</option>
            <option value="intermediate">intermediate (2-5 years)</option>
            <option value="experienced">experienced (5+ years)</option>
          </select>{" "}
          <label htmlFor="email">Email address:</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
            value="Register"
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

export default RegisterScreen;
