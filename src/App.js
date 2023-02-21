import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login";
// import Logout from "./components/Logout";
// import FriendsList from ".components/FriendsList";
// import AddFriend from "./components/AddFriend";

function App() {
  return (
    <div className="App">
      <h2>Friends Database</h2>
      <div className="nav">
        <Link to="/login">Login</Link>
        <Link to="/friends">Friends List</Link>
        <Link to="/friends/add">Add Friend</Link>
        <Link to="/login">Logout</Link>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" />
        <Route path="/friends" />
        <Route path="/friends/add" />
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
