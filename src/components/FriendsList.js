import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Friends List</h2>

      {friends.map((friend, idx) => {
        return (
          <div key={idx}>
            Name: {friend.name} - Email: {friend.email} - Age: {friend.age}
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
