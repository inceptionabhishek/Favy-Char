import React from "react";
import { useState, useEffect } from "react";

const uri = "http://localhost:5000/api/user/getall";
function GetallUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Name : {user.username}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Joined : {user.date}</h6>
              <button className="btn btn-primary">Favourites List</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetallUsers;
