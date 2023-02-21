import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Logout from "./components/Logout";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import PrivateRoutes from "./components/PrivateRoutes";

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
        <Route path="/logout" element={<Logout />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriend />} />
        <Route exact path="/" />
      </Routes>
    </div>
  );
}

export default App;
