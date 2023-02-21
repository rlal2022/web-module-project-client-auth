import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";
import axios from "axios";

const initialFormValues = {
  name: "",
  email: "",
  age: "",
};

const AddFriend = () => {
  const [form, setForm] = useState(initialFormValues);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:9000/api/friends", form, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/friends");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Add a Friend!</h2>

      <form onSubmit={handleSubmit}>
        <div className="add-form">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" onChange={handleChange} />
          <label htmlFor="name">Email: </label>
          <input type="email" name="email" id="email" onChange={handleChange} />
          <label htmlFor="name">Age: </label>
          <input type="text" name="age" id="age" onChange={handleChange} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddFriend;
