import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

function Login(props) {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState(initialState);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", credentials)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("token", res.data.token);
        navigate("/friends");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"> Username: </label>
          <input
            type="text"
            name="username"
            value={props.username}
            onChange={handleChange}
          />

          <label htmlFor="password"> Password: </label>
          <input
            type="password"
            name="password"
            value={props.password}
            onChange={handleChange}
          />
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
